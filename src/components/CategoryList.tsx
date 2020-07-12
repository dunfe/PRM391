/* eslint-disable require-jsdoc */
import React, {Component} from 'react';
// eslint-disable-next-line no-unused-vars
import {
  View,
  Image,
  Text,
  StyleSheet,
  ImageProps,
  TouchableHighlight,
  Alert,
} from 'react-native';

interface IProps {
  imgUri: ImageProps;
  name: String;
}

// eslint-disable-next-line max-len
const Category = (props: IProps) => {
  const clickHandler = () => {
    // function to handle click on floating Action Button
    Alert.alert('Floating Button Clicked');
  };
  return (
    <TouchableHighlight onPress={clickHandler} underlayColor='#F2F2F2'>
      <View style={styles.categoryStyle}>
        <View style={styles.ViewImage}>
          <Image source={props.imgUri} style={styles.ImageCategoryStyle} />
        </View>
        <View style={styles.TextCategory}>
          <Text>{props.name}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default Category;

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
