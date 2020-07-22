/* eslint-disable require-jsdoc */
// import React, {Component} from 'react';
// eslint-disable-next-line no-unused-vars
import {
  View,
  Image,
  StyleSheet,
  Text,
  ImageProps,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import InputSpinner from 'react-native-input-spinner';
import {Icon} from 'native-base';

export default class ProductInCart extends Component<{
  imgUri: string;
  productName: string;
  description: string;
  price: number;
  quality: number;
}> {
  // eslint-disable-next-line require-jsdoc
  render() {
    return (
      <View style={{height: 130}}>
        <View style={styles.product}>
          <View>
            <Image style={styles.productImage}
              source={{uri: this.props.imgUri}} />
          </View>
          <View style={{paddingLeft: 10}}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{marginTop: 10, fontSize: 19, fontWeight: 'bold'}}>
                {this.props.productName}
              </Text>
              <TouchableOpacity>
                <Icon style={styles.iconStyle} name="trash-2" type="Feather"/>
              </TouchableOpacity>
            </View>
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
                  inputStyle={{width: 30}}
                  max={100}
                  min={1}
                  value={this.props.quality}
                  step={1}
                  width={110}
                  height={37}
                  fontSize={13}
                  // background={'#FFC529'}
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
