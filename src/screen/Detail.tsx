import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity, ImageBackground, SafeAreaView,
} from 'react-native';
// eslint-disable-next-line no-unused-vars
import {RouteProp} from '@react-navigation/native';
// eslint-disable-next-line no-unused-vars
import {StackNavigationProp} from '@react-navigation/stack';
import {Dimensions} from 'react-native';
import {Col, Grid} from 'react-native-easy-grid';
import {useDispatch, useSelector} from "react-redux";
import {addToCart} from "../redux/cart";
import {Icon} from 'native-base';
import {host} from "../constants/host";
// eslint-disable-next-line no-unused-vars
import {Login} from "./Auth";
// eslint-disable-next-line no-unused-vars
import {Product} from "../containers/cartInterface";
import SpinnerView from "../components/SpinnerView";
import {update} from "../redux/add";

type RootStackParamList = {
    product: {
        productId: number;
        productName: string;
        shortDescription: string;
        detail: string;
        calories: number;
        price: number;
        productImage: string;
        timeToMake: number;
        categoryId: number;
        isFavourite: boolean;
    }
};

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'product'>;
type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList,
    'product'>;

interface IProps {
    route: ProfileScreenRouteProp;
    navigation: ProfileScreenNavigationProp;
}

export interface Update {
  update: boolean
}

const windowWidth = Dimensions.get('window').width;

const initProduct: Product = {
  productId: 1,
  productName: "string",
  shortDescription: "string",
  detail: "string",
  calories: 0,
  price: 0,
  productImage: "",
  timeToMake: 0,
  categoryId: 0,
  isFavourite: false,
};

const Detail = ({route, navigation}: IProps) => {
  const dispatch = useDispatch();
  // @ts-ignore
  const {productId} = route.params;
  const user = useSelector((state: Login) => state.login);
  const updateChange = useSelector((state: Update) => state.update);
  const [favouriteChange, setFavouriteChange] = useState(false);
  const [product, setProduct] = useState<Product>(initProduct);
  const [count, setCount] = useState(0);
  const changeQuality = (action: string) => () => {
    if (action === 'decrease') {
      if (count > 0) {
        setCount((count) => count - 1);
      }
    } else {
      setCount((count) => count + 1);
    }
  };

  const addToCartClick = () => {
    if (count > 0) {
      console.log(count);
      dispatch(
          addToCart({
            product: product,
            quality: count,
          }),
      );
    }
  };

  const goBackClick = () => {
    navigation.goBack();
  };

  useEffect(() => {
    const getProduct = () => {
      fetch(host + '/api/v1/products/' + user.email + "/" + productId, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'bearer ' + user.jwtToken,
        },
      })
          .then((response) => response.json())
          .then(async (data) => {
            await setProduct(data);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
    };
    getProduct();
  }, [favouriteChange, updateChange]);

  const onHeart = () => {
    const setFavourite = () => {
      if (product.isFavourite) {
        fetch(host + '/api/v1/favourites/' + user.email + "/" +
                    product.productId, {
          method: 'DELETE',
          headers: {
            'accept': '*/*',
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + user.jwtToken,
          },
        })
            .then((response) => {
              if (response.status === 200) {
                dispatch(
                    update(),
                );
                setFavouriteChange(!favouriteChange);
              }
            });
      } else {
        fetch(host + '/api/v1/favourites', {
          method: 'POST',
          headers: {
            'accept': '*/*',
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + user.jwtToken,
          },
          body: JSON.stringify({
            productId: product.productId,
            email: user.email,
          }),
        }).then((response) => {
          if (response.status === 200) {
            setFavouriteChange(!favouriteChange);
          }
        });
      }
    };
    setFavourite();
  };

  return (
    <SafeAreaView style={{backgroundColor: "#f7f7f7"}}>
      <ScrollView style={styles.container}>
        {product.productImage !== "" ? <ImageBackground
          imageStyle={styles.imageStyle}
          source={{uri: product.productImage}}
          style={styles.image}/> : <SpinnerView/>}
        <TouchableOpacity onPress={goBackClick}
          style={styles.btnLeftPosition}>
          <Icon
            type="Feather"
            name="arrow-left"
            style={styles.btnLeft}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={onHeart}
          style={product.isFavourite ?
                                      styles.btnRightPositionYellow :
                                      styles.btnRightPosition}>
          <Icon
            type="FontAwesome5"
            name="heart"
            style={styles.btnRight}/>
        </TouchableOpacity>
        <View style={styles.bottomFlex}>
          <View style={styles.bottomComponent}>
            <View style={styles.btnContainer}>
              <TouchableOpacity
                style={styles.btnMinus}
                onPress={changeQuality("decrease")}>
                <Text>
                  <Icon type="Feather"
                    name="minus" style={{fontSize: 15}}/>
                </Text>
              </TouchableOpacity>
              <Text style={styles.btnText}>
                {count}
              </Text>
              <TouchableOpacity style={styles.btnPlus}
                onPress={changeQuality("increase")}>
                <Text>
                  <Icon type="Feather"
                    name="plus"
                    color="black" style={{fontSize: 15}}/>
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.detailContainer}>
              <Grid style={styles.title}>
                <Col size={75}>
                  <Text style={styles.foodName}>{product.productName}</Text>
                </Col>
                <Col size={25} style={styles.price}>
                  <Icon type="Feather"
                    name="dollar-sign"
                    style={{fontSize: 15, color: "#FE724C"}}/>
                  <Text style={styles.foodPrice}>{product.price}</Text>
                </Col>
              </Grid>
              <View style={styles.category}>
                <View style={styles.categoryField}>
                  <Icon type="FontAwesome5"
                    name="fire-alt"
                    style={{fontSize: 20, color: "#FE724C"}}/>
                  <Text style={styles.categoryText}>
                    {product.calories} Calories
                  </Text>
                </View>
                <View style={styles.categoryField}>
                  <Icon type="Feather"
                    name="clock"
                    style={{fontSize: 20}}/>
                  <Text style={styles.categoryText}>
                    {product.timeToMake} Min
                  </Text>
                </View>
              </View>
              <View style={styles.detailInfor}>
                <Text style={styles.detail}>Details</Text>
                <Text style={styles.detailInformation}>
                  {product.detail}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{paddingBottom: 70}}><Text> </Text></View>
      </ScrollView>
      <View style={styles.btnAddView}>
        <TouchableOpacity style={styles.btnAdd} onPress={addToCartClick}>
          <Icon type="Feather"
            name="plus"
            style={{fontSize: 15}}/>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f7f7f7",
    position: 'relative',
  },
  imageStyle: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  spinnerView: {
    top: 0,
    width: '100%',
    height: 400,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  image: {
    top: 0,
    width: '100%',
    height: 400,
  },
  btnLeftPosition: {
    position: "absolute",
    top: 20,
    left: 20,
    borderColor: '#272D2F',
    borderRadius: 10,
    width: 50,
    height: 50,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnLeft: {
    fontSize: 20,
    padding: 8,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  btnRightPositionYellow: {
    position: "absolute",
    top: 20,
    right: 20,
    color: "#FE724C",
    borderColor: '#272D2F',
    borderRadius: 10,
    width: 50,
    height: 50,
    backgroundColor: '#FFC529',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnRightPosition: {
    position: "absolute",
    top: 20,
    right: 20,
    color: "#FE724C",
    borderColor: '#272D2F',
    borderRadius: 10,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnRight: {
    fontSize: 20,
    color: "white",
  },
  btnPlus: {
    backgroundColor: '#FFC529',
    justifyContent: 'center',
    padding: 10,
    paddingRight: 20,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
    fontWeight: "bold",
  },
  btnMinus: {
    backgroundColor: '#FFC529',
    alignContent: 'center',
    justifyContent: 'center',
    padding: 10,
    paddingLeft: 20,
    right: -1,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    fontWeight: "bold",
  },
  btnText: {
    backgroundColor: '#FFC529',
    width: 50,
    textAlign: 'center',
    padding: 7,
    fontSize: 18,
    fontWeight: "bold",
  },
  price: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  bottomComponent: {
    borderRadius: 20,
    backgroundColor: 'white',
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'center',
    top: -20,
    padding: 10,
  },
  returnBtn: {
    flexDirection: 'row',
    justifyContent: "space-between",
  },
  title: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 15,
  },
  foodName: {
    fontSize: 20,
    fontWeight: "bold",
    color: 'black',
    marginLeft: 5,
  },
  foodPrice: {
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 10,
    color: 'black',
  },
  detail: {
    fontSize: 20,
    fontWeight: "bold",
    color: 'black',
    marginLeft: 5,
  },
  btnContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: -20,
  },
  addBtnContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
  bottomFlex: {
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  category: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 5,
  },
  categoryField: {
    padding: 8,
    paddingRight: 20,
    borderRadius: 10,
    flexDirection: 'row',
  },
  detailInfor: {
    marginTop: 25,
  },
  categoryText: {
    marginLeft: 5,
  },
  detailInformation: {
    marginTop: 10,
    color: '#D7D7D7',
    fontWeight: "bold",
  },
  btnAddView: {
    position: "absolute",
    bottom: 20,
    left: (windowWidth / 2) - (45 / 2),
    width: 45,
  },
  btnAdd: {
    borderWidth: 5, borderColor: "white",
    borderRadius: 30,
    width: 55,
    padding: 15,
    backgroundColor: '#FFC529',
  },
  detailContainer: {
    marginTop: 20,
  },
});

export default Detail;
