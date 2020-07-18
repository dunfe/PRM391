/* eslint-disable require-jsdoc */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

interface IProps {
  imgUri: string;
  selectedCategory: number;
  name: string;
  categoryId: number;
  setSelectedCategory: (event: any) => void;
}

// eslint-disable-next-line max-len
const Category = (props: IProps) => {
  const clickHandler = () => {
    if (props.selectedCategory === props.categoryId) {
      props.setSelectedCategory(0);
    } else {
      props.setSelectedCategory(props.categoryId);
    }
  };
  const thisImage =
      props.imgUri ?
          props.imgUri :
          '../images/pizza.png';
  return (
    <TouchableHighlight
      onPress={clickHandler} underlayColor='#F2F2F2'>
      <View style={props.selectedCategory === props.categoryId ?
          styles.selectedCategoryStyle :
          styles.categoryStyle}>
        <View style={styles.ViewImage}>
          <Image source={{uri: thisImage}}
            style={styles.ImageCategoryStyle} />
        </View>
        <View style={styles.TextCategory}>
          <Text>{props.name}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

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
  selectedCategoryStyle: {
    marginLeft: 20,
    borderWidth: 1,
    borderColor: '#FFC529',
    // width: null,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: '#FFC529',
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

export default Category;
