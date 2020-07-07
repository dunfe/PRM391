/* eslint-disable require-jsdoc */
// import React, {Component} from 'react';
// eslint-disable-next-line no-unused-vars
import {View, Image, StyleSheet, Text, ImageProps} from 'react-native';
import React, {Component} from 'react';
import InputSpinner from 'react-native-input-spinner';

export default class Category extends Component<{
  imgUri: ImageProps;
  productName: String;
  description: String;
  price: String;
}> {
  // eslint-disable-next-line require-jsdoc
  render() {
    return (
      <View style={{height: 130, marginBottom: 20}}>
        <View style={styles.product}>
          <View>
            <Image style={styles.productImage} source={this.props.imgUri} />
          </View>
          <View style={{paddingLeft: 10}}>
            <Text style={{marginTop: 10, fontSize: 19, fontWeight: 'bold'}}>
              {this.props.productName}
            </Text>
            <Text style={{marginTop: 5, fontSize: 15, color: '#c9c9c9'}}>
              {this.props.description}
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
              <View style={styles.inputSpinner}>
                <InputSpinner
                  max={100}
                  min={1}
                  step={1}
                  width={100}
                  height={40}
                  fontSize={15}
                  background={'#FFC529'}
                  buttonTextColor={'#272D2F'}
                  buttonFontSize={15}
                  color={'#FFC529'}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
    height: 100,
    width: 100,
    margin: 10,
  },
  product: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#ffffff',
    // alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
    height: 130,
    borderColor: '#D7D7D7',
    borderWidth: 1.5,
    borderRadius: 30,
  },
});
