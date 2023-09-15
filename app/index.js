import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Login from './Login';
import Data from './Data';
import About from './about';

const Index = () => {
  const Stack = createNativeStackNavigator();

  return (

      
        <NavigationContainer independent={true}>
          <Stack.Navigator initialRouteName="login">
            <Stack.Screen name="login" component={Data} />
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="Data" component={Data} />
            <Stack.Screen name="about" component={About} />
          </Stack.Navigator>
        </NavigationContainer>

  
  );
};

export default Index;
