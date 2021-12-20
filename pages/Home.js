import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Search from './Search';
import Collection from './Collection';
import Notes from './Notes';
import Settings from './Settings';

import GroupedCards from '../components/GroupedCards';

const Tab = createBottomTabNavigator();

class Content extends Component {
  render() {
    return (
      <GroupedCards />
    );
}}

class HomeTitle extends Component {
  render() {
    return (
      <Image
        style={{ width: 150, height: 40 }}
        source={require('../assets/logo.png')}
      />
    );
  }
}

class Home extends Component {
  render() {
  return (
      <NavigationContainer independent={ true }>
        <Tab.Navigator
        // tabBarOptions={{ showLabel: false }}
        screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'ios-search' : 'ios-search-outline';
            } else if (route.name === 'Collection') {
              iconName = focused ? 'ios-book' : 'ios-book-outline';
            } else if (route.name === 'Notes') {
              iconName = focused ? 'ios-create' : 'ios-create-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-settings' : 'ios-settings-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#57A7FF',
          tabBarInactiveTintColor: 'gray',
        })}
        >
            <Tab.Screen name="Home" component={Content} 
              options={{
              headerTitle: '',
              headerLeft: props => <HomeTitle {...props} />,
              }}/>
          <Tab.Screen name="Search" component={Search} />
          <Tab.Screen name="Collection" component={Collection} />
          <Tab.Screen name="Notes" component={Notes} />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
      </NavigationContainer>
  );
  }
}
export default Home;

const styles = StyleSheet.create({
  header: {
    paddingTop: 15,
    paddingBottom: 5,
    paddingHorizontal: 10,
    borderBottomColor:'#e0e0e0',
    borderBottomWidth: 1,
    flex: 1,
  },
});