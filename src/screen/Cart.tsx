import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import ProductInCart from '../components/ProductInCart';
import {Icon} from 'native-base';

const CartScreen = () => {
  return (
    <View>
      <View style={styles.flexbox}>
        <View style={styles.box1}>
          <Icon
            name="chevron-left"
            type="Feather"
            style={{fontSize: 25, color: '#272D2F'}}
          />
        </View>
        <View>
          <Text style={styles.headerText}>Cart Food</Text>
        </View>
        <View style={styles.box2}>
          <Icon
            name="user"
            type="Feather"
            style={{fontSize: 20, color: '#FFFFFF'}}
          />
        </View>
      </View>
      <View style={{marginTop: 150, marginBottom: 60}}>
        <ScrollView>
          <ProductInCart
            productName="Fried Chicken"
            description="Spicy fried chicken"
            price="9.80"
            imgUri={require('../images/fried-chicken.png')}
          />
          <ProductInCart
            productName="Fried Chicken"
            description="Spicy fried chicken"
            price="9.80"
            imgUri={require('../images/fried-chicken.png')}
          />
          <ProductInCart
            productName="Fried Chicken"
            description="Spicy fried chicken"
            price="9.80"
            imgUri={require('../images/fried-chicken.png')}
          />
          <ProductInCart
            productName="Fried Chicken"
            description="Spicy fried chicken"
            price="9.80"
            imgUri={require('../images/fried-chicken.png')}
          />
          <ProductInCart
            productName="Fried Chicken"
            description="Spicy fried chicken"
            price="9.80"
            imgUri={require('../images/fried-chicken.png')}
          />
          <ProductInCart
            productName="Fried Chicken"
            description="Spicy fried chicken"
            price="9.80"
            imgUri={require('../images/fried-chicken.png')}
          />
          <ProductInCart
            productName="Fried Chicken"
            description="Spicy fried chicken"
            price="9.80"
            imgUri={require('../images/fried-chicken.png')}
          />
          <ProductInCart
            productName="Fried Chicken"
            description="Spicy fried chicken"
            price="9.80"
            imgUri={require('../images/fried-chicken.png')}
          />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flexbox: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  box1: {
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
    // alignItems: 'center',
    // justifyContent: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default CartScreen;
