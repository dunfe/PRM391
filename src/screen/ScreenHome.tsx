/* eslint-disable react/prop-types */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator}
  from '@react-navigation/material-bottom-tabs';
import {View, Text} from 'react-native';
import ProductList from './ProductList';
// import {Icon} from 'native-base';
// import MaterialCommunityIcons from 'react-native-vector-icons'
import Icon from 'react-native-vector-icons/Feather';
import CartScreen from '../screen/Cart';

const ProductListDis = () => {
  return (
    <View>
      <ProductList />
    </View>
  );
};

const Feed = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Feed!</Text>
    </View>
  );
};

const Remark = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Remark!</Text>
    </View>
  );
};

const Cart = () => {
  return (
    <View>
      <CartScreen />
    </View>
  );
};

const Notification = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Notification!</Text>
    </View>
  );
};

const Tab = createMaterialBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName='ProductListDis'
      activeColor='#FFC529'
      inactiveColor='#D7D7D7'
      // style={{backgroundColor: '#ffffff'}}>
      barStyle={{backgroundColor: '#ffffff'}}>
      <Tab.Screen
        name="ProductListDis"
        component={ProductListDis}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#ffffff',
          // eslint-disable-next-line react/display-name
          tabBarIcon: ({color}) => (
            // <Feather name='home'/>
            <Icon name='home'
              style={{fontSize: 20, color: color}}/>
            // <MaterialCommunityIcons name="home" size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Menu"
        component={Feed}
        options={{
          tabBarLabel: 'Menu',
          tabBarColor: '#ffffff',
          // eslint-disable-next-line react/display-name
          tabBarIcon: ({color}) => (
            <Icon name='book-open'
              style={{fontSize: 20, color: color}}/>
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: 'Cart',
          tabBarColor: '#ffffff',
          // eslint-disable-next-line react/display-name
          tabBarIcon: ({color}) => (
            <Icon name='shopping-bag'
              style={{fontSize: 20, color: color}}/>
          ),
        }}
      />
      <Tab.Screen
        name="Remark"
        component={Remark}
        options={{
          tabBarLabel: 'Remark',
          tabBarColor: '#ffffff',
          // eslint-disable-next-line react/display-name
          tabBarIcon: ({color}) => (
            <Icon name='bookmark'
              style={{fontSize: 20, color: color}}/>
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarLabel: 'Notification',
          tabBarColor: '#ffffff',
          // eslint-disable-next-line react/display-name
          tabBarIcon: ({color}) => (
            <Icon name='bell'
              style={{fontSize: 20, color: color}}/>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer independent={true}>
      <MyTabs />
    </NavigationContainer>
  );
};

export default App;
