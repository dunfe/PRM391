import {Container} from 'native-base';
import * as React from 'react';
import {Alert, TouchableOpacity} from 'react-native';
import {StyleSheet, View, Image} from 'react-native';
import ProductInCart from '../components/ProductInCart';

const arrayProductInCart = [
  {
    id: 1,
    productName: 'Fried Chicken',
    description: 'Spicy fried chicken',
    price: '9.80',
    imgUri: '../images/fried-chicken.png',
  },
  {
    id: 2,
    productName: 'Fried Chicken',
    description: 'Spicy fried chicken',
    price: '9.80',
    imgUri: '../images/fried-chicken.png',
  },
  {
    id: 3,
    productName: 'Fried Chicken',
    description: 'Spicy fried chicken',
    price: '9.80',
    imgUri: '../images/fried-chicken.png',
  },
  {
    id: 4,
    productName: 'Fried Chicken',
    description: 'Spicy fried chicken',
    price: '9.80',
    imgUri: '../images/fried-chicken.png',
  },
];

const displayArray = arrayProductInCart.map((item) => (
  <View key={item.id} style={{marginTop: 20}}>
    <ProductInCart
      productName={item.productName}
      description={item.description}
      price={item.price}
      imgUri={require('../images/fried-chicken.png')}
    />
  </View>
));

const Apps = () => {
  const clickHandler = () => {
    // function to handle click on floating Action Button
    Alert.alert('Floating Button Clicked');
  };
  return (
    <Container>
      <View>{displayArray}</View>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={clickHandler}
        style={styles.TouchableOpacityStyle}>
        <View style={styles.ViewFloatingIcon}>
          <Image
            source={require('../images/location.png')}
            style={styles.FloatingButtonStyle}
          />
        </View>
      </TouchableOpacity>
    </Container>
  );
};

const styles = StyleSheet.create({
  TouchableOpacityStyle: {
    opacity: 0.8,
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 180,
    bottom: 150,
    shadowColor: '#FFC529',
    shadowOpacity: 0.3,
    shadowOffset: {height: 10, width: 10},
  },

  FloatingButtonStyle: {
    height: 30,
    width: 30,
  },
  ViewFloatingIcon: {
    width: 60,
    height: 60,
    padding: 13.5,
    backgroundColor: '#FFC529',
    borderRadius: 50,
    borderColor: 'white',
    borderWidth: 2,
  },
});

export default Apps;
