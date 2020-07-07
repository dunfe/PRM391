/* eslint-disable require-jsdoc */
import React, {Component} from 'react';
// eslint-disable-next-line no-unused-vars
import {View, Image, Text, StyleSheet, ImageProps} from 'react-native';

export default class Category extends Component<{
  imgUri: ImageProps;
  productName: String ;
  description: String;
  calories: String;
  price: String;
}> {
  render() {
    return (
      <View style={styles.product}>
        <Image style={styles.productImage} source={this.props.imgUri} />
        <Text style={{marginTop: 10, fontSize: 19, fontWeight: 'bold'}}>
          {this.props.productName}
        </Text>
        <Text style={{marginTop: 5, fontSize: 15, color: '#c9c9c9'}}>
          {this.props.description}
        </Text>
        <View style={{marginTop: 5, flex: 1, flexDirection: 'row'}}>
          <Image
            style={styles.fireImgage}
            source={require('../images/fire.png')}
          />
          <Text style={styles.calories}>{this.props.calories} Calories</Text>
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
          <Text style={styles.price}>{this.props.price}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  price: {
    fontSize: 40,
    fontWeight: 'bold',
    paddingLeft: 10,
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
  },
  product: {
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 4,
    // },
    // shadowOpacity: 0.3,
    // shadowRadius: 4.65,

    // elevation: 20,
    alignItems: 'center',
    marginLeft: 20,
    height: 300,
    width: 200,
    borderColor: '#D7D7D7',
    borderWidth: 1.5,
    borderRadius: 30,
  },
});
