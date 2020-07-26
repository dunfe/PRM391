import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Text,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import RadioButton from '../components/RadioButton';
import {Icon} from 'native-base';
import IconAwesome from 'react-native-vector-icons/FontAwesome5';

const PROP = [
  {
    key: 'creditcard',
    text: 'Credit Card',
    cardNumber: '111111111111111',
    imgUri:
      'https://drive.google.com/file/d/1BUYoTDAGAczKOKvrQs8QEpieYApsFMZs/view',
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
const App = () => {
  const discount = 0.5;
  const numOfProduct = 0;
  const foodPrice = 100;
  const deliveryPrice = 0;
  const totalPrice = (foodPrice + deliveryPrice) * (1 - discount);
  const clickHandler = () => {
    // function to handle click on floating Action Button
    Alert.alert('Floating Button Clicked');
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.flexbox}>
        <TouchableOpacity style={styles.box1} onPress={clickHandler}>
          <Icon
            name="chevron-left"
            type="Feather"
            style={{fontSize: 25, color: '#272D2F'}}
          />
        </TouchableOpacity>
        <View>
          <Text style={styles.headerText}>Checkout Now</Text>
        </View>
        <TouchableOpacity onPress={clickHandler} style={styles.box2}>
          <View>
            <Icon
              name="x"
              type="Feather"
              style={{fontSize: 20, color: '#FFC529'}}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <RadioButton PROP={PROP} />
      </View>
      <View style={{flex: 1, flexDirection: 'row', marginLeft: 20}}>
        <Icon name="tag" type="Feather" style={styles.tagIcon} />
        <Text style={styles.CouponText}>Add Coupon</Text>
      </View>
      <View style={styles.CouponView}>
        <TextInput style={styles.textInput} placeholder="Coupon Code" />
        <TouchableOpacity style={styles.CouponImageContainer}>
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
          <Text style={styles.itemText}>Items ({numOfProduct}):</Text>
          <View>
            <Text style={styles.foodPriceText}>
              <IconAwesome name="dollar-sign" color="#FFC529" size={20} />
              <Text> </Text>
              {foodPrice}
            </Text>
          </View>
        </View>
        <View style={styles.foodPrice}>
          <Text style={styles.itemText}>Delivery Services: </Text>
          <View>
            <Text style={styles.foodPriceText}>
              <IconAwesome name="dollar-sign" color="#FFC529" size={20} />
              <Text> </Text>
              {deliveryPrice}
            </Text>
          </View>
        </View>
        <View style={styles.line}></View>
        <View style={styles.foodPrice}>
          <Text style={styles.itemText}>Total Price: </Text>
          <View>
            <Text style={styles.totalPriceText}>
              <IconAwesome name="dollar-sign" color="#FFC529" size={20} />
              <Text> </Text>
              {totalPrice}
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.ConfirmButton}>
        <Text style={styles.ConfirmText}>Confirm Order</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
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
    // borderRadius: 10,
    width: 50,
    height: 50,
    // backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box2: {
    borderRadius: 10,
    width: 50,
    height: 50,
    // backgroundColor: '#FFC529',
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
