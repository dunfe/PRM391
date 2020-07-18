import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import IconAwesome from "react-native-vector-icons/FontAwesome5";
import {Item} from "native-base";

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

const ProductInSearch = (props: IProps) => {
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
        <View style={{padding: 5, alignItems: 'center'}}>
          <Text numberOfLines={1}
            style={{fontSize: 19, fontWeight: 'bold'}}>
            {props.product.productName}
          </Text>
          <Text numberOfLines={2}
            style={{fontSize: 15, color: '#c9c9c9', textAlign: 'center'}}>
            {props.product.shortDescription}
          </Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Image
            style={styles.fireImgage}
            source={require('../images/fire.png')}
          />
          <Text style={styles.calories}>{props.product.calories} Calories</Text>
        </View>
        <Item>
          <IconAwesome name="dollar-sign"
            color="#FFC529" size={20}/>
          <Text style={styles.price}>{props.product.price}</Text>
        </Item>
      </View>
    </TouchableOpacity>
  );
};

export default ProductInSearch;

const styles = StyleSheet.create({
  price: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingLeft: 5,
  },
  coinImg: {
    position: "absolute",
    left: -20,
    top: 12,
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
    height: 150,
    width: "100%",
    borderRadius: 30,
  },
  product: {
    backgroundColor: 'white',
    alignItems: 'center',
    marginLeft: 5,
    marginBottom: 10,
    height: 300,
    width: 180,
    borderRadius: 30,
  },
});
