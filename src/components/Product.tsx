/* eslint-disable require-jsdoc */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { View, Image, Text, StyleSheet } from 'react-native';

interface IProps {
  imgUri: string;
  productName: string;
  description: string;
  calories: number;
  price: number;
}

const product = (props: IProps) => {
  return (
    <View style={styles.product}>
      <Image style={styles.productImage}
        source={{ uri: props.imgUri }} />
      <Text numberOfLines={1} style={{ marginTop: 10, fontSize: 19, fontWeight: 'bold' }}>
        {props.productName}
      </Text>
      <Text numberOfLines={1} style={{ marginTop: 5, fontSize: 15, color: '#c9c9c9' }}>
        {props.description}
      </Text>
      <View style={{ marginTop: 5, flex: 1, flexDirection: 'row' }}>
        <Image
          style={styles.fireImgage}
          source={require('../images/fire.png')}
        />
        <Text style={styles.calories}>{props.calories} Calories</Text>
      </View>
      <View
        style={{
          marginBottom: 15,
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
          style={styles.coinImg}
          source={require('../images/money.png')}
        />
        <Text style={styles.price}>{props.price}</Text>
      </View>
    </View>
  );
};

export default product;

const styles = StyleSheet.create({
  price: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 5
  },
  coinImg: {
    height: 20,
    width: 20,
    marginRight: 5,
    marginTop: 10
  },
  calories: {
    fontSize: 15,
    paddingLeft: 10,
    color: '#f29e1f',
  },
  fireImgage: {
    height: 20,
    width: 20,
  },
  productImage: {
    marginTop: 10,
    height: 150,
    width: 150,
    borderRadius: 400
  },
  product: {
    backgroundColor: 'white',
    alignItems: 'center',
    marginLeft: 20,
    height: 300,
    width: 200,
    borderColor: '#D7D7D7',
    borderWidth: 1.5,
    borderRadius: 30,
    padding: 5,
    marginTop: 10
  },
});
