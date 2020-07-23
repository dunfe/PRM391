import * as React from 'react';
import {SwipeListView} from 'react-native-swipe-list-view';
import ProductInCart from '../components/ProductInCart';
import {useSelector} from "react-redux";
import {Icon} from "native-base";
import {View} from "native-base";
import {StyleSheet, Text, TouchableOpacity} from "react-native";
import {useDispatch} from "react-redux";
import {removeFromCart, totalCalculator} from "../redux/cart";
import {useEffect} from "react";
import {useNavigation} from "@react-navigation/native";

interface Product {
    productId: number;
    productName: string;
    shortDescription: string;
    detail: string;
    calories: number;
    price: number;
    productImage: string;
    timeToMake: number;
    categoryId: number;
}

interface cartProduct {
    product: Product,
    quality: number,
}

interface Cart {
    products: cartProduct[],
    total: number,
}

interface CartState {
    cart: Cart
}

const Cart = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const cart = useSelector((state: CartState) => state.cart);

  const onRemove = (productId: number) => {
    console.log(productId);
    console.log(cart.products);
    dispatch(
        removeFromCart(
            {
              productId: productId,
            },
        ),
    );
  };
  const goBackClick = () => {
    navigation.goBack();
  };

  useEffect(() => {
    dispatch(
        totalCalculator(),
    );
  }, [cart]);

  const header = (
    <View style={styles.flexbox}>
      <TouchableOpacity onPress={goBackClick} style={styles.box1}>
        <Icon
          name="chevron-left"
          type="Feather"
          style={{fontSize: 25, color: '#272D2F'}}
        />
      </TouchableOpacity>
      <Text style={styles.headerText}>Your Cart</Text>
      <TouchableOpacity style={styles.box2}>
        <Icon
          name="user"
          type="Feather"
          style={{fontSize: 20, color: '#FFFFFF'}}
        />
      </TouchableOpacity>
    </View>
  );
  return (
    <SwipeListView
      data={cart.products}
      ListHeaderComponent={header}
      keyExtractor={(item: cartProduct) => item.product.productId + ""}
      renderItem={ (data) => (
        <ProductInCart
          quality={data.item.quality}
          product={data.item.product}
        />
      )}
      renderHiddenItem={ (data) => (
        <View style={styles.rowBack}>
          <TouchableOpacity
            style={[styles.backRightBtn, styles.backRightBtnRight]}
            onPress={() => onRemove(data.item.product.productId)}
          >
            <Icon type="Feather" name="trash"/>
          </TouchableOpacity>
        </View>

      )}
      rightOpenValue={-75}
    />
  );
};

const styles = StyleSheet.create({
  rowBack: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
  },
  backRightBtnRight: {
    right: 10,
  },
  flexbox: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 20,
    marginBottom: 10,
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  box1: {
    borderColor: '#272D2F',
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
  headerText: {
    paddingTop: 5,
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default Cart;
