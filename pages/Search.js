import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { totalDB } from "../firebase";

class Search extends Component {
  render() {
  return (
    <ScrollView style={ styles.container }>
      <View style={ styles.center }>
        <View style={ styles.search }>
          <TextInput 
            style={ styles.input }
            placeholder="Search a book"
          />
          <Ionicons name='ios-search' size={25} color={ 'gray' } style={ styles.icon }/>
        </View>
      </View> 
      
    </ScrollView>
  );
  }
}
export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
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
  search: {
    height: 40,
    width: 300,
    backgroundColor: '#fff',
    borderColor: '#e0e0e0',
    borderWidth: 1,
    borderRadius: 20,
    justifyContent: 'space-between',
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 5,
  },
  input: {
    padding: 10,
    // flex: 6,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',  
  },
  icon: {
    // flex: 1,
    padding: 5,
  },
});