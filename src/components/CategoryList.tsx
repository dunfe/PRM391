/* eslint-disable require-jsdoc */
import React, {Component} from 'react';
// eslint-disable-next-line no-unused-vars
import {View, Image, Text, StyleSheet, ImageProps} from 'react-native';

// eslint-disable-next-line max-len
export default class Category extends Component<{
  imgUri: ImageProps;
  name: String;
}> {
  render() {
    return (
      <View style={styles.categoryStyle}>
        <View style={styles.ViewImage}>
          <Image source={this.props.imgUri} style={styles.ImageCategoryStyle} />
        </View>
        <View style={styles.TextCategory}>
          <Text>{this.props.name}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  categoryStyle: {
    marginLeft: 20,
    borderWidth: 1,
    borderColor: '#FFC529',
    // width: null,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
  },
  ViewImage: {
    flex: 1,
    width: 45,
    height: 45,
  },
  ImageCategoryStyle: {
    // flex: 1,
    margin: 10,
    height: 25,
    width: 25,
  },
  TextCategory: {
    // width: null,
    marginRight: 10,
  },
});
