import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import SearchNav from "./Search";
import Collection from "./Collection";
import Notes from "./Notes";
import Settings from "./Settings";
import Greetings from "../components/Greetings";
import Gradient from "../components/GradientText";
import Firestore from "./Firestore";
import PDFViewer from "../components/PDFViewer";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

class Navigation extends Component {
  render(){
    return(
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Firestore">
      <Stack.Screen
        name="Firestore"
        component={Firestore}
      />
      <Stack.Screen
        name="PDFViewer"
        component={PDFViewer}
      />
    </Stack.Navigator>
    );
  }
}

class Books extends Component {
  render(){
    return(
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Firestore">
      <Stack.Screen
        name="Collection"
        component={Collection}
      />
      <Stack.Screen
        name="PDFViewer"
        component={PDFViewer}
      />
    </Stack.Navigator>
    );
  }
}

class HomeTitle extends Component {
  render() {
    return (
      <View style={styles.logo}>
        <StatusBar
            backgroundColor="#57A7FF"
            barStyle="dark-content"
            hidden={false}
            translucent={false}
          />
        <Gradient text="SEEKER" style={styles.title} />
        <Text style={styles.lib}>LIBRARY</Text>
      </View>
    );
  }
}

class Home extends Component {
  render() {
    return (
      <Tab.Navigator
        // tabBarOptions={{ showLabel: false }}
        screenOptions={({ route }) => ({
          tabBarStyle: {backgroundColor: "#57A7FF"},
          headerStyle: {
            backgroundColor: "#57A7FF",
          },
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "ios-home" : "ios-home-outline";
            } else if (route.name === "Search") {
              iconName = focused ? "ios-search" : "ios-search-outline";
            } else if (route.name === "Books") {
              iconName = focused ? "ios-book" : "ios-book-outline";
            } else if (route.name === "Notes") {
              iconName = focused ? "ios-create" : "ios-create-outline";
            } else if (route.name === "Settings") {
              iconName = focused ? "ios-settings" : "ios-settings-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "#3d3d3d",
        })}
      >
        <Tab.Screen
          name="Home"
          component={Navigation}
          options={{
            headerTitle: "",
            headerLeft: (props) => <HomeTitle {...props} />,
          }}
        />
        <Tab.Screen name="Search" component={SearchNav} />
        <Tab.Screen name="Books" component={Books} />
        <Tab.Screen name="Notes" component={Notes} />
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
  title: {
    fontFamily: "Major-Mono",
    fontSize: 25,
    lineHeight: 25,
    color: "#ffffff",
  },
  lib: {
    fontFamily: "Poppins-Regular",
    letterSpacing: 5,
    color: "white",
    fontSize: 10,
  },
  logo: {
    alignItems: "center",
    marginLeft: 25,
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
});
