import React, { Component } from "react";
import { StyleSheet, View, Text, Image, StatusBar } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
// import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import NoteLists from "../components/NoteLists";
import AddNote from "../components/AddNote";
import * as SQLite from "expo-sqlite";

const DB = SQLite.openDatabase("db.db");
const RootStack = createStackNavigator();

class Notes extends Component {
  constructor(props) {
    super(props);
    this.dbInit();
    this.state = {
      items: [],
    };
  }

  dbInit() {
    DB.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, description TEXT);"
      );
    });
  }

  render() {
    return (
      <NoteLists/>
    );
  }
}
export default Notes;
