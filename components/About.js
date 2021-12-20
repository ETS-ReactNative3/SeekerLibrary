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
        <Text style={ styles.justified, styles.text }>The SeekerLibrary is created to </Text>
    </View>
  );
  }
}
export default About;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
  container: {
    paddingTop: 10,
    alignItems: 'center',
  },
  justified: {
    textAlign: 'justify',
  },
});