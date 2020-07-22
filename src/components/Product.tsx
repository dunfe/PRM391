import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

interface IProps {
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
    }
}

const product = (props: IProps) => {
  const navigation = useNavigation();
  const detailClick = () => {
    navigation.navigate('Detail', {
      product: props.product,
    });
  };
  return (
    <TouchableOpacity onPress={detailClick}>
      <View style={styles.product}>
        <Image style={styles.productImage}
          source={{uri: props.product.productImage}} />
        <Text numberOfLines={1}
          style={{marginTop: 10, fontSize: 19, fontWeight: 'bold'}}>
          {props.product.productName}
        </Text>
        <Text numberOfLines={1}
          style={{marginTop: 5, fontSize: 15, color: '#c9c9c9'}}>
          {props.product.shortDescription}
        </Text>
        <View style={{marginTop: 5, flex: 1, flexDirection: 'row'}}>
          <Image
            style={styles.fireImgage}
            source={require('../images/fire.png')}
          />
          <Text style={styles.calories}>{props.product.calories} Calories</Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            style={styles.coinImg}
            source={require('../images/money.png')}
          />
          <Text style={styles.price}>{props.product.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default product;

const styles = StyleSheet.create({
  price: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  coinImg: {
    height: 20,
    width: 20,
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
    borderRadius: 400,
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
  },
});
