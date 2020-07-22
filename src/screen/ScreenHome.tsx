import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text} from 'react-native';
import ProductList from './ProductList';
import CartScreen from '../screen/Cart';
import User from "./User";
import TabBarIconHome from "../components/TabBarIcon/TabBarIconHome";
import TabBarIconMenu from "../components/TabBarIcon/TabBarIconMenu";
import TabBarIconCart from "../components/TabBarIcon/TabBarIconCart";
import TabBarIconNotification from "../components/TabBarIcon/TabBarIconNotification";
import TabBarIconUser from "../components/TabBarIcon/TabBarIconUser";
import Search from "./Search";

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

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName='ProductListDis'
      tabBarOptions={{
        activeTintColor: '#FFC529',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="ProductListDis"
        component={ProductList}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: TabBarIconHome,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: TabBarIconMenu,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: TabBarIconCart,
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarLabel: 'Notification',
          tabBarIcon: TabBarIconNotification,
        }}
      />
      <Tab.Screen
        name="User"
        component={User}
        options={{
          tabBarLabel: 'User',
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
