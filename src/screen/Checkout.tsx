import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
  TextInput, Alert,
} from 'react-native';
import RadioButton from '../components/RadioButton';
import {Icon} from 'native-base';
import IconAwesome from 'react-native-vector-icons/FontAwesome5';
import {useSelector} from "react-redux";
import {Login} from "./Auth";
import {CartState} from "../containers/cartInterface";
import {Platform, NativeModules, NativeEventEmitter} from 'react-native';
// @ts-ignore
import RNMomosdk from 'react-native-momosdk';
import {removeAllCart} from "../redux/cart";
import {useNavigation} from "@react-navigation/native";
import {useDispatch} from "react-redux";
import {host} from "../constants/host";

const RNMoMoPaymentModule = NativeModules.RNMomosdk;
const EventEmitter = new NativeEventEmitter(RNMoMoPaymentModule);
const cards = [
  {
    key: 'momo',
    text: 'MoMo',
    cardNumber: '0917003003',
    imgUri:
      'https://img.mservice.io/momo-payment/icon/images/logo512.png',
  },
  {
    key: 'paypal',
    text: 'Paypal',
    cardNumber: '2222222222222',
    imgUri:
      'https://i1.wp.com/www.middleeastmonitor.com/wp-content/uploads/2016/10/paypal-logo.jpg?resize=1200%2C750&quality=85&strip=all&zoom=1&ssl=1',
  },
  {
    key: 'debitcard',
    text: 'Debit Card',
    cardNumber: '33333333333333',
    imgUri:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Visa.svg/640px-Visa.svg.png',
  },
];

const merchantname: string = "Food Order";
const merchantcode: string = "MOMOXTMJ20200723";
const merchantNameLabel: string = "Nhà cung cấp";
const billdescription: string = "Total Cart";
const enviroment: string = "0"; // "1": production

const formatNumberToMoney = (number: any,
    defaultNum: any,
    predicate: any) => {
  predicate = !predicate ? "" : "" + predicate;
  if (number == 0 ||
      number == '' ||
      number == null ||
      number == 'undefined' ||
      isNaN(number) ||
      number == '0' ||
      number == '00' ||
      number == '000') {
    return "0" + predicate;
  }

  const array = [];
  let result = '';
  let count = 0;

  if (!number) {
    return defaultNum ? defaultNum : "" + predicate;
  }

  let flag1 = false;
  if (number < 0) {
    number = -number;
    flag1 = true;
  }

  const numberString = number.toString();
  if (numberString.length < 3) {
    return numberString + predicate;
  }

  for (let i = numberString.length - 1; i >= 0; i--) {
    count += 1;
    if (numberString[i] == "." || numberString[i] == ",") {
      array.push(',');
      count = 0;
    } else {
      array.push(numberString[i]);
    }
    if (count == 3 && i >= 1) {
      array.push('.');
      count = 0;
    }
  }

  for (let i = array.length - 1; i >= 0; i--) {
    result += array[i];
  }

  if (flag1) {
    result = "-" + result;
  }

  return result + predicate;
};


const Checkout = () => {
  const cart = useSelector((state: CartState) => state.cart);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [value, setValue] = useState('momo');
  const [amount, setAmount] = useState(cart.total);
  const [textAmount, setTextAmount] = useState(
      formatNumberToMoney(cart.total, null, ""));
  const [description, setDescription] = useState('');
  const [processing, setProcessing] = useState(false);
  const [coupon, setCoupon] = useState('');
  const user = useSelector((state: Login) => state.login);
  const [totalVND, setTotalVND] = useState(0);
  const goBackClick = () => {
    navigation.goBack();
  };
  const onRemoveClick = () => {
    dispatch(
        removeAllCart(),
    );
  };

  useEffect(() => {
    const listenAction = () => {
      setAmount(cart.total);
      setTextAmount(formatNumberToMoney(cart.total, null, ""));
      EventEmitter.addListener(
          'RCTMoMoNoficationCenterRequestTokenReceived', (response) => {
            console.log("<MoMoPay>Listen.Event::" + JSON.stringify(response));
            try {
              if (response && response.status == 0) {
                const fromapp = response.fromapp;
                setDescription(JSON.stringify(response));
                setProcessing(false);
                const momoToken = response.data;
                const phonenumber = response.phonenumber;
                const message = response.message;
                const orderId = response.refOrderId; // your orderId
                const requestId = response.refRequestId; // your requestId
                // continue to submit momoToken,phonenumber to server
                console.log(fromapp +
                    momoToken +
                    phonenumber +
                    message +
                    orderId +
                    requestId);
              } else {
                setDescription("message: Get token fail");
                setProcessing(false);
              }
            } catch (ex) {
              console.log(ex);
            }
          });

      // OPTIONAL
      EventEmitter.addListener(
          'RCTMoMoNoficationCenterRequestTokenState', (response) => {
            console.log("<MoMoPay>Listen.RequestTokenState:: " +
                response.status);
            // status = 1: Parameters valid & ready to open MoMo app.
            // status = 2: canOpenURL failed for URL MoMo app
            // status = 3: Parameters invalid
          });
    };
    listenAction();
  }, []);

  useEffect(() => {
    const applyCouponCal = () => {
      setTextAmount(formatNumberToMoney(amount, null, ""));
    };
    const convertUSD = () => {
      fetch('http://api.currencylayer.com/live?access_key=576ec3baef4e5e51bf3a1a5387e471b4')
          .then((response) => response.json())
          .then(async (data) => {
            await setTotalVND(amount * data.quotes.USDVND);
          })
          .catch((error) => {
            Alert.alert("Fail to apply coupon");
            console.error('Error:', error);
          });
    };
    applyCouponCal();
    convertUSD();
  }, [amount]);

  useEffect(() => {
    const updateTotal = () => {
      setAmount(cart.total);
    };
    updateTotal();
  }, [cart.total]);

  const momoHandleResponse = async (response: any) =>{
    try {
      if (response && response.status == 0) {
        const fromapp = response.fromapp;
        setDescription(JSON.stringify(response));
        setProcessing(false);
        const momoToken = response.data;
        const phonenumber = response.phonenumber;
        const message = response.message;
        // continue to submit momoToken,phonenumber to server
        console.log(fromapp + momoToken + phonenumber + message);
      } else {
        setDescription("message: Get token fail");
        setProcessing(false);
      }
    } catch (ex) {
      console.log(ex);
    }
  };

  const onPress = async () => {
    if (cart.total === 0) {
      Alert.alert("Your cart is empty");
      return;
    }
    if (!processing) {
      const jsonData: any = {};
      jsonData.enviroment = enviroment;
      jsonData.action = "gettoken";
      jsonData.isDev = true; // SANBOX only , remove this key on PRODUCTION
      jsonData.merchantname = merchantname;
      jsonData.merchantcode = merchantcode;
      jsonData.merchantnamelabel = merchantNameLabel;
      jsonData.description = billdescription;
      jsonData.amount = totalVND;
      jsonData.orderId = "bill234284290348";
      jsonData.requestId = "bill234284290348";
      jsonData.orderLabel = "Ma don hang";
      jsonData.appScheme = "momoxtmj20200723";
      console.log("data_request_payment " + JSON.stringify(jsonData));
      if (Platform.OS === 'android') {
        const dataPayment = await RNMomosdk.requestPayment(jsonData);
        await momoHandleResponse(dataPayment);
        if (dataPayment.status === 0) {
          dispatch(
              removeAllCart(),
          );
          setAmount(0);
          Alert.alert("Check out successfully!");
        } else {
          Alert.alert("Có làm thì mới có ăn!");
        }
        console.log("data_request_payment " + dataPayment.status);
      } else {
        RNMomosdk.requestPayment(JSON.stringify(jsonData));
      }
      setDescription("");
      setProcessing(false);
    } else {
      setDescription("...");
      setProcessing(false);
    }
  };

  const applyCoupon = () => {
    const getCoupon = () => {
      fetch(host + '/api/v1/discounts/' + coupon, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'bearer ' + user.jwtToken,
        },
      })
          .then( async (response) => {
            const data = await response.json();
            if (response.status === 200) {
              await setAmount(
                  cart.total - (cart.total/ 100) * data.discountPercentages);
            } else {
              setCoupon('');
              Alert.alert("Error: " + data.title);
            }
          })
          .catch((error) => {
            Alert.alert("Fail to apply coupon");
            console.error('Error:', error);
          });
    };
    if (coupon !== '') {
      getCoupon();
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.flexbox}>
        <TouchableOpacity style={styles.box1} onPress={goBackClick}>
          <Icon
            name="chevron-left"
            type="Feather"
            style={{fontSize: 25, color: '#272D2F'}}
          />
        </TouchableOpacity>
        <View>
          <Text style={styles.headerText}>Checkout Now</Text>
        </View>
        <TouchableOpacity onPress={onRemoveClick} style={styles.box2}>
          <Icon
            name="x"
            type="Feather"
            style={{fontSize: 20, color: '#fff'}}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <RadioButton cards={cards} value={value} setValue={setValue}/>
      </View>
      <View style={{flex: 1, flexDirection: 'row', marginLeft: 20}}>
        <Icon name="tag" type="Feather" style={styles.tagIcon} />
        <Text style={styles.CouponText}>Add Coupon</Text>
      </View>
      <View style={styles.CouponView}>
        <TextInput style={styles.textInput} value={coupon}
          onChangeText={(value) => setCoupon(value)}
          placeholder="Coupon Code" />
        <TouchableOpacity onPress={applyCoupon}
          style={styles.CouponImageContainer}>
          <Image
            style={styles.CouponImage}
            source={require('../images/ticket.png')}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginLeft: 20,
          marginRight: 20,
        }}>
        <View style={styles.foodPrice}>
          <Text style={styles.itemText}>
            Items ({cart.products.length}):
          </Text>
          <View>
            <Text style={styles.foodPriceText}>
              <IconAwesome name="dollar-sign" color="#FFC529" size={20} />
              <Text> </Text>
              {cart.total}
            </Text>
          </View>
        </View>
        <View style={styles.foodPrice}>
          <Text style={styles.itemText}>Discount Price: </Text>
          <View>
            <Text style={styles.foodPriceText}>
              <IconAwesome name="dollar-sign" color="#FFC529" size={20} />
              {amount - cart.total}
            </Text>
          </View>
        </View>
        <View style={styles.foodPrice}>
          <Text style={styles.itemText}>Total Price: </Text>
          <View>
            <Text style={styles.totalPriceText}>
              <IconAwesome name="dollar-sign" color="#FFC529" size={20} />
              <Text>{description}</Text>
              {textAmount}
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={onPress} style={styles.ConfirmButton}>
        <Text style={styles.ConfirmText}>Confirm Order</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  ConfirmText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  ConfirmButton: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    borderRadius: 20,
    backgroundColor: '#FFC529',
    height: 50,
  },
  line: {
    borderRadius: 100,
    marginTop: 10,
    borderWidth: 2,
    borderColor: '#D7D7D7',
  },
  totalPriceText: {
    fontWeight: 'bold',
    fontSize: 40,
  },
  foodPrice: {
    marginTop: 20,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  foodPriceText: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  itemText: {
    fontSize: 20,
  },
  tagIcon: {
    color: '#FFC529',
  },
  CouponView: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 20,
    marginTop: 10,
    marginRight: 20,
  },
  CouponImage: {
    // backgroundColor: 'white',
    width: 50,
    height: 30,
  },
  CouponImageContainer: {
    // marginLeft: 5,
    borderRadius: 15,
    height: 55,
    width: 80,
    backgroundColor: '#FFC529',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexbox: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    marginBottom: 10,
    flex: 1,
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  box1: {
    // borderColor: '#272D2F',
    // borderWidth: 0.25,
    borderRadius: 10,
    width: 50,
    height: 50,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box2: {
    borderRadius: 10,
    width: 50,
    height: 50,
    backgroundColor: '#FFC529',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    paddingLeft: 15,
    flex: 1,
    height: 55,
    width: 300,
    borderRadius: 20,
    backgroundColor: '#e3e3e3',
  },
  CouponText: {
    // alignItems: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  headerText: {
    // alignItems: 'center',
    paddingTop: 5,
    fontSize: 25,
    fontWeight: 'bold',
  },
});
