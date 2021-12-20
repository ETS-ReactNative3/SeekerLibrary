import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

import Book from '../components/Book';

const pdf1 = require('../assets/pdf-1.png')
const pdf2 = require('../assets/pdf-2.png')
const pdf3 = require('../assets/pdf-3.png')

class Collection extends Component {
  render() {
  return (
    <View style={ styles.container }>
      <ScrollView style={ styles.scroll }>
      <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', flex: 1}}>
          <Book
            title='A First Look at Communication Theory'
            author='Em Griffin' url={ pdf1 }
            desc='Risus feugiat in ante metus dictum at tempor commodo ullamcorper'
            />
          <Book
              title='Accounting and Finance: An Introduction'
              author='Eddie McLaney & Peter Atrill' url={ pdf2 }
              desc='Risus feugiat in ante metus dictum at tempor commodo ullamcorper'
              />
          <Book
              title='Project Management: The Managerial Process' 
              author='Erik Larson & Clifford Gray' url={ pdf3 }
              desc='Risus feugiat in ante metus dictum at tempor commodo ullamcorper'
          />
        </View>
      </ScrollView>
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