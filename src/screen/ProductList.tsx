import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Category from '../components/CategoryList';
import Product from '../components/Product';
import {Icon} from 'native-base';

const arrayProduct = [
  {
    id: 1,
    productName: 'Fried Chicken',
    description: 'Spicy fried chicken',
    price: '9.80',
    calories: '78',
    imgUri: '../images/fried-chicken.png',
  },
  {
    id: 2,
    productName: 'Fried Chicken',
    description: 'Spicy fried chicken',
    price: '9.80',
    calories: '78',
    imgUri: '../images/fried-chicken.png',
  },
  {
    id: 3,
    productName: 'Fried Chicken',
    description: 'Spicy fried chicken',
    price: '9.80',
    calories: '78',
    imgUri: '../images/fried-chicken.png',
  },
];

const displayArray = arrayProduct.map((item) => (
  <View key={item.id}>
    <Product
      productName={item.productName}
      description={item.description}
      price={item.price}
      calories={item.calories}
      imgUri={require('../images/fried-chicken.png')}
    />
  </View>
));

const ProductListScreen = () => {
  const clickHandler = () => {
    // function to handle click on floating Action Button
    Alert.alert('Floating Button Clicked');
  };
  return (
    // Try setting `justifyContent` to `center`.
    // Try setting `flexDirection` to `row`.
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}>
      <View style={styles.flexbox}>
        <TouchableOpacity style={styles.box1}>
          <Icon
            name="align-left"
            type="Feather"
            style={{fontSize: 20, color: '#272D2F'}}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.box2}>
          <Icon
            name="user"
            type="Feather"
            style={{fontSize: 20, color: '#FFFFFF'}}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: 35,
        }}>
        <Text style={styles.topText}>Lets eat</Text>
        <Text style={styles.topText}>Quality food 😋</Text>
      </View>
      <View style={styles.flex}>
        <View style={styles.SectionStyle}>
          <Image
            source={require('../images/search.png')}
            style={styles.ImageStyle}
          />
          <TextInput
            placeholder="Search food"
            style={styles.textInput}></TextInput>
        </View>
        <TouchableOpacity style={styles.searchOption}>
          <Icon
            name="sliders"
            type="Feather"
            style={{fontSize: 20, color: '#272D2F'}}
          />
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 20, marginRight: 20}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Category
            imgUri={require('../images/fast-food.png')}
            name="Fast food"
          />
          <Category imgUri={require('../images/bread.png')} name="Bread" />
          <Category
            imgUri={require('../images/vegetable.png')}
            name="Vegetable"
          />
          <Category imgUri={require('../images/fruit.png')} name="Fruit" />
        </ScrollView>
      </View>
      <View style={{marginTop: 15, marginRight: 20}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {displayArray}
          {/* <Product
            productName="Fried Chicken"
            description="Spicy fried chicken"
            price="9.80"
            calories="78"
            imgUri={require('../images/fried-chicken.png')}
          />
          <Product
            productName="Hot dog"
            description="Spicy hot dog"
            price="7.0"
            calories="69"
            imgUri={require('../images/hotdog.png')}
          />
          <Product
            productName="Pizza"
            description="Sea food pizza"
            price="10.0"
            calories="100"
            imgUri={require('../images/pizza.png')}
          /> */}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  box1: {
    borderRadius: 10,
    width: 50,
    height: 50,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box2: {
    borderRadius: 10,
    width: 50,
    height: 50,
    backgroundColor: '#FFC529',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    flex: 1,
    height: 55,
    width: 250,
    borderRadius: 15,
    backgroundColor: '#e3e3e3',
  },
  searchOption: {
    marginRight: 40,
    borderRadius: 15,
    width: 55,
    height: 55,
    backgroundColor: '#FFC529',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flex: {
    marginLeft: 20,
    marginTop: 30,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flexbox: {
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topText: {
    fontSize: 35,
    paddingLeft: 20,
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },

  SectionStyle: {
    width: 275,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e3e3e3',
    // borderWidth: 1,
    // borderColor: 'red',
    height: 55,
    borderRadius: 15,
  },
  ImageStyle: {
    padding: 10,
    marginLeft: 15,
    marginRight: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },

  categoryStyle: {
    borderWidth: 1,
    borderColor: '#FFC529',
    width: 125,
    height: 55,
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
  },
});

export default ProductListScreen;
