import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './pages/Home';
import Login from './pages/Login';
import Settings from './pages/Settings';

const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer> 
        <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default App;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});