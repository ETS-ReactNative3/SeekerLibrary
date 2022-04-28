import React, { Component } from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';


class Notes extends Component {

  render() {
  return (
    <View style={ styles.container }>
      <ScrollView style={ styles.scroll }></ScrollView>
      <View style={ styles.add }>
        <Ionicons name='ios-add' size={40} color={ 'gray' } style={ styles.icon }/>
      </View>
    </View>
  );
  }
}
export default Notes;

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
  },
  add: {
    width: 75,
    height: 75,
    borderRadius: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    margin: 20,
  }
});