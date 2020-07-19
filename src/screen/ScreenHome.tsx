import React from 'react';
import {createMaterialBottomTabNavigator}
  from '@react-navigation/material-bottom-tabs';
import {View, Text} from 'react-native';
import ProductList from './ProductList';
import {Icon} from 'native-base';
import CartScreen from '../screen/Cart';
import User from "./User";
import TabBarIconHome from "../components/TabBarIcon/TabBarIconHome";
import TabBarIconMenu from "../components/TabBarIcon/TabBarIconMenu";
import TabBarIconCart from "../components/TabBarIcon/TabBarIconCart";
import TabBarIconNotification from "../components/TabBarIcon/TabBarIconNotification";
import TabBarIconUser from "../components/TabBarIcon/TabBarIconUser";
import Search from "./Search";

const ProductListDis = () => {
  return (
    <View>
      <ProductList />
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
      barStyle={{backgroundColor: '#ffffff'}}>
      <Tab.Screen
        name="ProductListDis"
        component={ProductListDis}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#ffffff',
          tabBarIcon: TabBarIconHome,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarColor: '#ffffff',
          tabBarIcon: TabBarIconMenu,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: 'Cart',
          tabBarColor: '#ffffff',
          tabBarIcon: TabBarIconCart,
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarLabel: 'Notification',
          tabBarColor: '#ffffff',
          tabBarIcon: TabBarIconNotification,
        }}
      />
      <Tab.Screen
        name="User"
        component={User}
        options={{
          tabBarLabel: 'User',
          tabBarColor: '#ffffff',
          tabBarIcon: TabBarIconUser,
        }}
      />
    </Tab.Navigator>
  );
};

const ScreenHome = () => {
  return (
    <MyTabs />
  );
};

export default ScreenHome;
