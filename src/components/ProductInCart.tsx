import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight, TouchableOpacity,
} from 'react-native';
import React from 'react';
import InputSpinner from 'react-native-input-spinner';
import {useDispatch} from "react-redux";
import {changeQuality} from "../redux/cart";
import {useNavigation} from '@react-navigation/native';

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

interface IProps {
  product: Product;
  quality: number;
}
const ProductInCart = (props: IProps) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const onChange = (id: number, value: number) => {
    dispatch(
        changeQuality({
          id: id,
          quality: value,
        }),
    );
  };

  const detailClick = () => {
    navigation.navigate('Detail', {
      productId: props.product.productId,
    });
  };

  return (
    <TouchableOpacity onPress={detailClick}
      style={{height: 130, marginBottom: 10}}>
      <View style={styles.product}>
        <Image style={styles.productImage}
          resizeMode={"cover"}
          source={{uri: props.product.productImage}}/>
        <View style={{paddingLeft: 10, flex: 1}}>
          <Text numberOfLines={1} style={{paddingTop: 10, marginRight: 10,
            fontSize: 19, flexWrap: "wrap",
            fontWeight: 'bold'}}>
            {props.product.productName}
          </Text>
          <Text
            numberOfLines={2}
            style={{
              flexWrap: "wrap",
              textAlign: "left",
              paddingTop: 5,
              fontSize: 15,
              color: '#c9c9c9'}}>
            {props.product.shortDescription}
          </Text>
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
            {props.quality > 0 ?
            <View style={styles.inputSpinner}>
              <InputSpinner
                inputStyle={{width: 30}}
                max={100}
                min={1}
                onChange={(value) => onChange(props.product.productId, value)}
                value={props.quality}
                step={1}
                width={110}
                height={37}
                fontSize={13}
                buttonTextColor={'#272D2F'}
                buttonFontSize={15}
                color={'#FFC529'}
              />
            </View> :
                <Text/>}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconStyle: {
    color: '#FFC529',
    paddingTop: 10,
    fontSize: 25,
  },
  inputSpinner: {
    borderRadius: 20,
    marginLeft: 30,
    backgroundColor: '#FFC529',
  },
  price: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  coinImg: {
    height: 20,
    width: 20,
  },
  productImage: {
    margin: 10,
    height: 100,
    width: 100,
    borderRadius: 100,
  },
  product: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#ffffff',
    marginLeft: 20,
    marginRight: 20,
    maxHeight: 130,
    borderColor: '#D7D7D7',
    borderRadius: 10,
  },
});

export default ProductInCart;
