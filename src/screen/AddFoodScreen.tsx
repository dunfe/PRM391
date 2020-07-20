import {Container} from 'native-base';
import * as React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
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
  return (
    <Container>
      <View>{displayArray}</View>
      <View>
        <TouchableOpacity style={styles.buttonConfirm}>
          <Text style={styles.text}>Confrim</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default Apps;

const styles = StyleSheet.create({
  buttonConfirm: {
    // marginLeft: 50,
    height: 50,
    // width: 300,
    backgroundColor: '#FFC529',
    borderRadius: 20,
    borderColor: '#FFC529',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginRight: 50,
    marginLeft: 50,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
});
