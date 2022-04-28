import React, { Component } from 'react';
import { ActivityIndicator, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';

import * as SQLite from 'expo-sqlite';
const DB = SQLite.openDatabase('db.db');

export default class AddNote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      name: '',
      description: ''
    }
  }

  componentDidMount() {
    let params = this.props.route.params;
    if (params && this.state.id != params.id) {
      this.setUpdatingData(params);
    }
  }

  setUpdatingData(params) {
    this.setState({
      id: params.id,
      name: params.name,
      description: params.description
    })
  }

  save() {
    if (!this.state.name || !this.state.description) {
      alert("Name and Description are required!");
    } else {
      DB.transaction(
        tx => {
          if (this.state.id) {
            tx.executeSql('UPDATE items SET name = ?, description = ? WHERE id = ?', [this.state.name, this.state.description, this.state.id]);
          } else {
            tx.executeSql('INSERT INTO items (name, description) VALUES (?, ?)', [this.state.name, this.state.description]);
          }
        }, null, () => {
          this.props.navigation.navigate('NoteLists', {update: true});
        }
      );
    }
  }

  render() {
    return (
      <View style={Style.main}>
        <Text style={Style.txt}>Add new item</Text>
        <TextInput 
          style={Style.form} 
          onChangeText={text => this.setState({name: text})} 
          value={this.state.name} 
          placeholder="Item Name"/>
        <TextInput 
          style={Style.form} 
          onChangeText={text => this.setState({description: text})} 
          value={this.state.description} 
          placeholder="Item Description"
          multiline={true}
          numberOfLines={4}/>
        <View style={Style.actions}>
          <TouchableOpacity style={[Style.btnSave, Style.btn]} onPress={() => this.save()}>
            <Text style={Style.btnTxt}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[Style.btnCancel, Style.btn]} onPress={() => this.props.navigation.goBack()}>
            <Text style={Style.btnTxt}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const Style = {
  main: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    padding: 20
  },
  txt: {
    marginBottom: 10,
    fontSize: 20
  },
  form: {
    borderColor: 'gray', 
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  actions: {
    flexDirection: 'row',
  },
  btnTxt: {
    color:'#fff',
    textAlign:'center',
    paddingLeft : 20,
    paddingRight : 20
  },
  btn: {
    marginRight:10,
    marginLeft:10,
    marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  btnSave: {
    backgroundColor:'#1E6738',
  },
  btnCancel: {
    backgroundColor: 'red',
  }
}