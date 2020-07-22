/* eslint-disable require-jsdoc */
// import React, {Component} from 'react';
// eslint-disable-next-line no-unused-vars
import {View, Image, StyleSheet, Text, ImageProps} from 'react-native';
import React, {Component} from 'react';

export default class FavouriteFood extends Component<{
  productImage: String;
  productName: String;
  description: String;
  price: String;
}> {
  render() {
    return (
      <View style={{height: 130}}>
        <View style={styles.product}>
          <View >
            <Image style={styles.productImage} source={{uri: 'data:image/jpeg;base64,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'}} />
          </View>
          <View style={{paddingLeft: 20}}>
            <Text style={{marginTop: 10, fontSize: 19, fontWeight: 'bold'}}>
              {this.props.productName.length > 15 ? this.props.productName.substring(0, 15) + '...' : this.props.productName}
            </Text>
            <Text style={{marginTop: 5, fontSize: 15, color: '#c9c9c9'}}>
              {this.props.description.length > 55 ? this.props.description.substring(0, 25) + '...' : this.props.description}
            </Text>
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
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
    height: 100,
    width: 100,
    margin: 10,
    borderRadius: 400,
  },
  product: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#ffffff',
    marginLeft: 20,
    marginRight: 20,
    height: 130,
    borderColor: '#D7D7D7',
    borderWidth: 1.5,
    borderRadius: 30,
  },
});
