import React, { Component } from 'react';
import { FlatList, Text, View, TouchableOpacity, Button, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import * as SQLite from 'expo-sqlite';
const DB = SQLite.openDatabase('db.db');

export default class NoteLists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    if (!this.state.items.length) {
      this.fetchData();
    }
  }

  componentDidUpdate() {
    let params = this.props.route.params;
    if (params && params['update']) {
      this.fetchData();
    }
  }

  fetchData() {
    DB.transaction(tx => {
      tx.executeSql('select * from items', [], (tx, { rows }) => {
        rows = rows._array ? rows._array : rows;
        this.setState({items: rows});
      });
    });
  }

  deleteItem(id) {
    Alert.alert("Delete Item", "Are you sure you want to delete this item?", 
      [
        {
          text: "Cancel",
          onPress: () => {},
          style: "cancel"
        },
        { text: "OK", onPress: () => {
          DB.transaction(tx => {
            tx.executeSql('delete from items where id = ?', [id], (tx) => {
              this.fetchData();
            });
          });
        }}
      ],
      { cancelable: false }
    );
  }

  render() {
    return (
      <View style={Style.container}>
      <StatusBar style="auto" barStyle="light-content"/>
        <View style={Style.actions}>
          <Text>Item List</Text>
          <Button title="Add Note" onPress={() => this.props.navigation.navigate('AddNote')}/>
        </View>
        
        <FlatList
          style={Style.list}
          data={this.state.items}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return (
              <View style={Style.item}>
                <Text style={Style.name}>{item.name}</Text>
                <TouchableOpacity style={[Style.btnEdit, Style.btn]} onPress={() => this.props.navigation.navigate('AddNote', item)}>
                  <Text style={Style.btnTxt}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[Style.btnDelete, Style.btn]} onPress={() => this.deleteItem(item.id)}>
                  <Text style={Style.btnTxt}>Delete</Text>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    );
  }
}

const Style = {
  container: {
    flex: 1,
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginTop: 20
  },
  actions: {
    flexDirection: 'row', 
    justifyContent: 'space-between'
  },
  list: {
    flex: 1,
    marginTop: 10
  },
  item: {
    background: '#f8f9fa',
    marginBottom: 5,
    padding: 10,
    flexDirection: 'row'
  },
  name: {
    flex:3
  },
  btn: {
    flex: 1,
    padding: 5,
    borderRadius: 5,
  },
  btnTxt: {
    textAlign:'center',
    color: '#fff'
  },
  btnEdit: {
    backgroundColor:'#ffc107',
  },
  btnDelete: {
    backgroundColor:'#dc3545',
  }
}