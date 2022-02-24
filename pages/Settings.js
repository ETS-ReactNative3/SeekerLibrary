import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { Button } from 'react-native-elements/dist/buttons/Button';

import About from '../components/About';
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/native';

class Settings extends Component {

  navigation = useNavigation

  handSignout = () => {
    auth
    .signOut()
    .then(() => {
      console.log('Signed out')
      
    })
    .catch(error => alert(error.message))
  }

  render() {
  return (
    <ScrollView style={ styles.container }>
    <View style={ styles.box }><Text style={ styles.text }>Reading Preferences</Text></View>
    <View style={ styles.box }><Text style={ styles.text }>Dark Mode</Text></View>
    <View style={ styles.header }>
      <Text style={ styles.headtext }>About the app</Text>
      <About />
    </View>

    <View style={ styles.header }>
      <Text style={ styles.headtext }>Account</Text>
    </View>

    <View style={ styles.box }>
      <Text style={ styles.text }>Email: {auth.currentUser?.email}</Text>
    </View>

    <TouchableOpacity
      onPress={this.handSignout}
    >
      <View style={ styles.box }><Text style={ styles.logout }>Log out</Text></View>
    </TouchableOpacity>
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