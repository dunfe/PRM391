import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Home from "./src/screen/ScreenHome";
import {Provider} from 'react-redux';
import store from "./src/redux/store";
// @TODO: This is to hide a Warning
//  caused by NativeBase after upgrading to RN 0.62
import {YellowBox} from 'react-native';
import Auth from "./src/screen/Auth";
import Detail from "./src/screen/Detail";
// import TabBar from './src/components/TopTabbar';

YellowBox.ignoreWarnings([
  'Animated: `useNativeDriver` was not specified. ' +
  'This is a required option and must be explicitly set to `true` or `false`',
]);
const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Auth" component={Auth}/>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Detail" component={Detail}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
