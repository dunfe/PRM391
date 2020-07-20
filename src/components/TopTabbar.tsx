import * as React from 'react';
// import {View, Text} from 'native-base';
import {Container, Tab, Tabs, Content} from 'native-base';
import {KeyboardAvoidingView, View} from 'react-native';
import {StyleSheet} from 'react-native';
import ProductInCart from '../components/ProductInCart';
import AddFoodScreen from '../screen/AddFoodScreen';
import ScreenTracking from '../screen/ScreenTracking';

const arrayProductInCart = [
  {
    id: 1,
    productName: 'Fried Chicken',
    description: 'Spicy fried chicken',
    price: '9.80',
    imgUri: '../images/fried-chicken.png',
  },
  {
    id: 2,
    productName: 'Fried Chicken',
    description: 'Spicy fried chicken',
    price: '9.80',
    imgUri: '../images/fried-chicken.png',
  },
  {
    id: 3,
    productName: 'Fried Chicken',
    description: 'Spicy fried chicken',
    price: '9.80',
    imgUri: '../images/fried-chicken.png',
  },
];

const displayArray = arrayProductInCart.map((item) => (
  <View key={item.id} style={{marginTop: 20}}>
    <ProductInCart
      productName={item.productName}
      description={item.description}
      price={item.price}
      imgUri={require('../images/fried-chicken.png')}
    />
  </View>
));

const TopTab = () => {
  return (
    <KeyboardAvoidingView behavior="height" style={{flex: 1}}>
      <Container style={styles.container}>
        <Content style={styles.content}>
          <Tabs
            tabBarUnderlineStyle={styles.tabUnderStyle}
            initialPage={1}
            locked={false}>
            <Tab
              heading="Add Food"
              activeTextStyle={{color: '#FFC529', fontWeight: 'bold'}}
              textStyle={{color: '#272D2F', fontSize: 15}}
              tabStyle={{backgroundColor: 'white'}}
              activeTabStyle={{backgroundColor: 'white'}}>
              {<AddFoodScreen />}
            </Tab>
            <Tab
              // key={1}
              heading="Tracking Order"
              activeTextStyle={{color: '#FFC529', fontWeight: 'bold'}}
              textStyle={{color: '#272D2F', fontSize: 15}}
              tabStyle={{backgroundColor: 'white'}}
              activeTabStyle={{backgroundColor: 'white'}}>
              {<ScreenTracking />}
            </Tab>
            <Tab
              heading="Done Order"
              activeTextStyle={{color: '#FFC529', fontWeight: 'bold'}}
              textStyle={{color: '#272D2F', fontSize: 15}}
              tabStyle={{backgroundColor: 'white'}}
              activeTabStyle={{backgroundColor: 'white'}}>
              {displayArray}
            </Tab>
          </Tabs>
        </Content>
      </Container>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {},
  content: {},
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  tab: {},
  tabUnderStyle: {
    borderRadius: 10,
    backgroundColor: '#FFC529',
    width: 100,
    marginHorizontal: 18,
  },
});

export default TopTab;
