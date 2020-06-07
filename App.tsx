import React from 'react';
import HelloWorld from './src/containers/HelloWorldContainer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Hello World" component={HelloWorld}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
