import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  StyleSheet,
  Dimensions,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  Text,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { auth } from "../firebase";
import { doc, setDoc, collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import Gradient from "../components/GradientText";
import Svg, { Path } from "react-native-svg";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      id: this.firestoreAutoId()
    };
  }

  firestoreAutoId = () => {
    const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let autoId = ''
  
    for (let i = 0; i < 20; i++) {
      autoId += CHARS.charAt(
        Math.floor(Math.random() * CHARS.length)
      )
    }
    return autoId
  }

  navigation = useNavigation;

  handleSignup = () => {
    auth
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((UserCredentials) => {
        const user = UserCredentials.user;
        console.log("Registered with: ", user.email);
        this.props.navigation.navigate("Login");
        alert("Account created successfully");
      })
      .catch((error) => alert(error.message));

      const docRef = addDoc(collection(db, "users"), {
        "name": this.state.name,
        "email": this.state.email,
        "password": this.state.password,
        "id": this.state.id,
      });
      console.log("Document written with ID: ", docRef.id);
      };

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.upperContainer}>
          <StatusBar
            backgroundColor="#E4E7FF"
            barStyle="dark-content"
            hidden={false}
            translucent={false}
          />
          <Image
            source={require("../assets/pictures/1.png")}
            style={styles.pic}
          />
          <Text style={styles.title}>SEEKER</Text>
          <Gradient text="LIBRARY" style={styles.lib} />
        </View>

        <View style={styles.lowerContainer}>
          <View style={styles.clickables}>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Name"
                onChangeText={(text) => this.setState({ name: text })}
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={(text) => this.setState({ email: text })}
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Password"
                onChangeText={(text) => this.setState({ password: text })}
                underlineColorAndroid="transparent"
                secureTextEntry={true}
              />
            </View>

            <TouchableOpacity
              style={[
                styles.buttonContainer,
                { backgroundColor: "#8C96F5", marginTop: 20 },
              ]}
              onPress={this.handleSignup}
            >
              <Text style={styles.button}>Register</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => {
                this.props.navigation.navigate("Login");
              }}
            >
              <Text style={[styles.button, { color: "#9a9a9a" }]}>
                Go Back
              </Text>
            </TouchableOpacity>
          </View>
          <Svg
            height="130%"
            width="1000%"
            viewBox="0 0 1440 320"
            style={styles.svg}
          >
            <Path
              fill="#ffffff"
              d="M0,160L26.7,176C53.3,192,107,224,160,229.3C213.3,235,267,213,320,186.7C373.3,160,427,128,480,117.3C533.3,107,587,117,640,106.7C693.3,96,747,64,800,53.3C853.3,43,907,53,960,90.7C1013.3,128,1067,192,1120,208C1173.3,224,1227,192,1280,165.3C1333.3,139,1387,117,1413,106.7L1440,96L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
            />
          </Svg>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8C96F5",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 50,
    width: 300,
    paddingHorizontal: 10,
    borderColor: "#e0e0e0",
    backgroundColor: "#E4E7FF",
    borderWidth: 1,
    borderRadius: 5,
    fontFamily: "Poppins-Regular",
  },
  inputContainer: {
    marginVertical: 5,
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 300,
    height: 45,
    borderRadius: 5,
  },
  button: {
    fontFamily: "Poppins-Bold",
    color: "white",
    fontSize: 16,
  },
  title: {
    fontFamily: "Major-Mono",
    fontSize: 60,
    lineHeight: 50,
    color: "#ffffff",
  },
  pic: {
    width: 200,
    height: 130,
  },
  upperContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  lowerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  clickables: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    zIndex: 1,
    marginBottom: 30,
  },
  text: {
    fontFamily: "Poppins-Regular",
    color: "#9a9a9a",
  },
  svg: {
    bottom: 0,
    position: "absolute",
    width: Dimensions.get("window").width,
    zIndex: 0,
  },
  lib: {
    fontFamily: "Poppins-Regular",
    letterSpacing: 5,
    color: "white",
    fontSize: 18,
  },
});
