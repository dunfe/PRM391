import React from 'react';
import Auth from './src/screen/Auth';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Auth" component={Auth}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
