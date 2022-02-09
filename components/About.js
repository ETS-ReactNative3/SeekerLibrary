import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';


class About extends Component {
  render() {
  return (
    <View style={styles.container}>
        <Image 
            source={require('../assets/logo.png')}
            style={{ width: 200, height: 50 }}
          />
        <Text style={ styles.text }>
          {"\r"} The SeekerLibrary is created to give a better
          experience for students and also teachers that 
          loves reading. The developers came to the idea 
          of creating an app that will be in the benefit 
          of the school. Upon observation, the LVCC Library 
          is what they've decided to create. The purpose of 
          this app is to be able to connect with the students,
          may it be online or offline. And the developers 
          believe there are students out there who want to
          seek knowledge just like what is written in:
        </Text>
        <Text style={ styles.italic }>
          "The heart of the prudent getteth knowledge; and the ear of the wise seeketh knowledge."{"\n"} Proverbs 18:15 (KJV)
        </Text>
        <View style={ styles.linkCont }>
          <Text style={ styles.linktext }>For inquiries:</Text>
          <View style={ styles.links }>
            <Ionicons name='logo-facebook' size={28} color={ 'gray' }/>
            <Text>facebook.com/LVCCLibrary</Text>
          </View>
          <View style={ styles.links }>
            <Ionicons name='ios-mail' size={30} color={ 'gray' }/>
            <Text>library.apalit@laverdad.edu.ph</Text>
          </View>
        </View>
        
    </View>
  );
  }
}
export default About;

const styles = StyleSheet.create({
  text: {
    lineHeight: 28,
    fontSize: 16,
    textAlign: 'justify',
    marginHorizontal: 10,
  },
  container: {
    paddingTop: 10,
    alignItems: 'center',
  },
  italic: {
    fontStyle: 'italic',
    lineHeight: 28,
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
  },
  links: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 230,
  },
  linkCont: {
    marginTop: 20,
    flex: 1,
    justifyContent: 'space-between',
  },
  linktext:{
    lineHeight: 28,
    fontSize: 16,
    textAlign: 'center',
  },
});