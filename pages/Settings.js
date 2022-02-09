import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

import About from '../components/About';
class Settings extends Component {
  render() {
  return (
    <ScrollView style={ styles.container }>
    <View style={ styles.box }><Text style={ styles.text }>Reading Preferences</Text></View>
    <View style={ styles.box }><Text style={ styles.text }>Dark Mode</Text></View>
    <View style={ styles.box }><Text style={ styles.logout }>Log out</Text></View>
    <View style={ styles.header }>
      <Text style={ styles.headtext }>About the app</Text>
      <About />
    </View>
    </ScrollView>
  );
  }
}
export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  header: {
    paddingTop: 15,
    paddingBottom: 5,
    paddingHorizontal: 10,
    borderBottomColor:'#e0e0e0',
    borderBottomWidth: 1,
    flex: 1,
  },
  scroll: {
    flex: 3,
  },
  box: {
    padding: 20,
    borderColor: '#e0e0e0',
    borderBottomWidth: 1,
  },
  header: {
    paddingVertical: 20,
  },
  headtext: {
    fontSize: 18,
    fontWeight: '700',
  },
  text: {
    fontSize: 16,
  },
  logout: {
    fontSize: 16,
    color: 'red',
  },
});