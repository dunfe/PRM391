import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaView} from 'react-native';
import ProductList from './ProductList';
import User from "./User";
import Cart from "./Cart";
import TabBarIconHome from "../components/TabBarIcon/TabBarIconHome";
import TabBarIconMenu from "../components/TabBarIcon/TabBarIconMenu";
import TabBarIconCart from "../components/TabBarIcon/TabBarIconCart";
import TabBarIconCheckout
  from "../components/TabBarIcon/TabBarIconCheckout";
import TabBarIconUser from "../components/TabBarIcon/TabBarIconUser";
import Search from "./Search";
<<<<<<< HEAD
import Radio from '../screen/Confirm';
// import { RadioButton } from 'react-native-paper';
=======
import Checkout from "./Checkout";
>>>>>>> e7fd94a5edbf94d97d748b65b82acd78b8a13fc8

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
        name="Checkout"
        component={Checkout}
        options={{
          tabBarLabel: 'Checkout',
          tabBarIcon: TabBarIconCheckout,
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
    <SafeAreaView style={{flex: 1}}>
      <MyTabs />
    </SafeAreaView>
  );
};

export default ScreenHome;
