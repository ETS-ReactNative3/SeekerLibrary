import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

class Collection extends Component {
  render() {
  return (
    <View style={ styles.container }>
    
    </View>
  );
  }
}
export default Collection;

const styles = StyleSheet.create({
  container: {
    flex: 1
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
  }

});