import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Search from "./Search";
import Collection from "./Collection";
import Notes from "./Notes";
import Settings from "./Settings";
import Greetings from "../components/Greetings";
import Gradient from "../components/GradientText";
import PDFReader from "rn-pdf-reader-js";
import Firestore from "./Firestore";

const Tab = createBottomTabNavigator();

class Content extends Component {

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#ffff"
          barStyle="dark-content"
          hidden={false}
          translucent={false}
        />
        <Greetings />
        <View style={styles.categContainer}>
          <Firestore />
        </View>
      
        {/* <PDFReader
          source={{uri: "http://www.africau.edu/images/default/sample.pdf"}}
        /> */}

      </View>
    );
  }
}

class HomeTitle extends Component {
  render() {
    return (
      <View style={styles.logo}>
        <Gradient text="SEEKER" style={styles.title} />
        <Text style={styles.lib}>LIBRARY</Text>
      </View>
    );
  }
}



class AddNoteButton extends Component {
  constructor(props) {
    super(props)
 }

  navigation = useNavigation;
  render() {
    return (
      <TouchableOpacity style={styles.addnote} onPress={() =>  this.props.navigation.navigate("AddNote")}>
        <Text>Create</Text>
      </TouchableOpacity>
    );
  }
}

class Home extends Component {
  render() {
    return (
      <Tab.Navigator
        // tabBarOptions={{ showLabel: false }}
        screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "ios-home" : "ios-home-outline";
            } else if (route.name === "Search") {
              iconName = focused ? "ios-search" : "ios-search-outline";
            } else if (route.name === "Collection") {
              iconName = focused ? "ios-book" : "ios-book-outline";
            } else if (route.name === "Notes") {
              iconName = focused ? "ios-create" : "ios-create-outline";
            } else if (route.name === "Settings") {
              iconName = focused ? "ios-settings" : "ios-settings-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#57A7FF",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          name="Home"
          component={Content}
          options={{
            headerTitle: "",
            headerLeft: (props) => <HomeTitle {...props} />,
          }}
        />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Collection" component={Collection} />
        <Tab.Screen name="Notes" component={Notes} 
          options={{
            headerTitle: "Notes",
            headerRight: (props) => <AddNoteButton {...props} />,

        }}/>
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    );
  }
}
export default Home;

const styles = StyleSheet.create({
  header: {
    paddingTop: 15,
    paddingBottom: 5,
    paddingHorizontal: 10,
    borderBottomColor: "#e0e0e0",
    borderBottomWidth: 1,
    flex: 1,
  },
  container: {
    backgroundColor: "white",
    height: Dimensions.get("window").height,
    paddingTop: 10,
    paddingBottom: 100,
  },
  title: {
    fontFamily: "Major-Mono",
    fontSize: 25,
    lineHeight: 25,
    color: "#ffffff",
  },
  lib: {
    fontFamily: "Poppins-Regular",
    letterSpacing: 5,
    color: "black",
    fontSize: 10,
  },
  logo: {
    alignItems: "center",
    marginLeft: 10,
  },
  imageContainer: {
    width: 90,
    height: 90,
    margin: 5,
    padding: 5,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  categName: {
    textAlign: "center",
    fontSize: 11,
    fontFamily: "Poppins-Regular",
  },
  category: {
    fontFamily: "Poppins-Bold",
    fontSize: 16,
  },
  categContainer: {
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  addnote:{
    marginRight: 25,
    backgroundColor: '#57A7FF',
    padding: 10,
    borderRadius: 5,
    color: 'white',
  }
});
