import * as React from 'react';
import {Container, Content} from 'native-base';
import {View} from 'react-native';
import {StyleSheet} from 'react-native';
import ProductInCart from '../components/ProductInCart';
import {useSelector} from "react-redux";
// import {useEffect, useState} from "react";

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
const TopTab = () => {
  const cart = useSelector((state: CartState) => state.cart);

  const displayArray = cart.products.map((item) => (
    <View key={item.product.productId} style={{marginTop: 20}}>
      <ProductInCart
        quality={item.quality}
        productName={item.product.productName}
        description={item.product.shortDescription}
        price={item.product.price}
        imgUri={item.product.productImage}
      />
    </View>
  ));
  return (
    <Container style={styles.container}>
      <Content style={styles.content}>
        {displayArray}
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {},
  content: {},
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  tab: {},
  tabUnderStyle: {
    borderRadius: 10,
    backgroundColor: '#FFC529',
    width: 100,
    marginHorizontal: 18,
  },
});

export default TopTab;
