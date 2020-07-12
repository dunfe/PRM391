import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
// import Secured from './src/screen/Secured';
// import Search from "./src/screen/Search";
import Home from "./src/screen/ScreenHome";
import Secured from './src/screen/Secured';
import Search from "./src/screen/Search";
import Detail from "./src/screen/Detail";

// @TODO: This is to hide a Warning
//  caused by NativeBase after upgrading to RN 0.62
import {YellowBox} from 'react-native';
// import TabBar from './src/components/TopTabbar';

YellowBox.ignoreWarnings([
  'Animated: `useNativeDriver` was not specified. ' +
  'This is a required option and must be explicitly set to `true` or `false`',
]);
// ------- END OF WARNING SUPPRESSION

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Search" component={Home}/>
        <Stack.Screen name="Detail" component={Detail}/>
        <Stack.Screen name="Secured" component={Secured}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
