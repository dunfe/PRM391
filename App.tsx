import React from 'react';
import Auth from './src/screen/Auth';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Login from './src/screen/Login';
import Register from './src/screen/Register';
import Secured from './src/screen/Secured';
const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Auth}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="Secured" component={Secured}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
