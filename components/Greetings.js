import React, { Component } from "react";
import { StyleSheet, View, Image, Text, Dimensions } from "react-native";
import { auth } from "../firebase";
import { totalDB } from "../firebase";
import Gradient from "../components/GradientText";

class Greetings extends Component {
  constructor() {
    super();
    this.state = {
      hour: null,
      username: [],
    };
  }

  componentDidMount() {
    this.getHour();
    this.getUserName();
  }

  async componentWillUnmount() {
    this.getUsername = false;
  }

  getHour = () => {
    const date = new Date();
    const hour = date.getHours();
    this.setState({ hour });
  };

  async getUserName() {
    const snapshot = await totalDB.collection("users").where("email", "==", auth.currentUser?.email).get();
    const username = snapshot.docs.map((doc) => doc.data());
    this.setState({ username });
  }

  render() {
    const { hour } = this.state;

    if (hour === 0 || hour < 6) {
      return (
        <View style={styles.container}>
          {/* <Image source={require('../assets/pictures/dawn.png')} style={ styles.image }/> */}
          {this.state.username.map((info, i) => (
            <View key={i}>
            <Text style={styles.text}>
              Hi, {info.name}
            </Text>
              <Gradient text="Good morning!" style={styles.greet}/>
            </View>
          ))}
        </View>
      );
    } else if (hour === 1 || hour < 12) {
      return (
        <View style={styles.container}>
          {/* <Image source={require('../assets/pictures/morning.png')} style={ styles.image }/> */}
          {this.state.username.map((info, i) => (
            <View key={i}>
            <Text style={styles.text}>
              Hi, {info.name}
            </Text>
              <Gradient text="Good morning!" style={styles.greet}/>
            </View>
          ))}
        </View>
      );
    } else if (hour === 2 || hour < 18) {
      return (
        <View style={styles.container}>
          {/* <Image source={require('../assets/pictures/afternoon.png')} style={ styles.image }/> */}
          {this.state.username.map((info, i) => (
            <View key={i}>
            <Text style={styles.text}>
              Hi, {info.name}
            </Text>
              <Gradient text="Good afternoon!" style={styles.greet}/>
              </View>
          ))}
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          {/* <Image source={require('../assets/pictures/night.png')} style={ styles.image }/> */}
          {this.state.username.map((info, i) => (
            <View key={i}>
            <Text style={styles.text}>
              Hi, {info.name}
            </Text>
              <Gradient text="Good evening!" style={styles.greet}/>
              </View>
          ))}
        </View>
      );
    }
  }
}
export default Greetings;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: 100,
    paddingLeft: 30,
    // alignItems: "center",
    justifyContent: 'center',
  },
  image: {
    width: "100%",
    height: 100,
    zIndex: 0,
    position: "absolute",
    opacity: 0.75,
    borderRadius: 5,
  },
  greet: {
    color: "white",
    fontFamily: "Poppins-Bold",
    fontSize: 24,
    lineHeight: 28,
  },
  text: {
    color: "white",
    fontFamily: "Poppins-Regular",
    fontSize: 18,
  }
});
