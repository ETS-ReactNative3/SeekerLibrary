import React, { Component } from "react";
import { StyleSheet, View, Image, Text, Dimensions } from "react-native";

class Greetings extends Component {
  constructor() {
    super();
    this.state = {
      hour: null,
    };
  }

  componentDidMount() {
    this.getHour();
  }

  getHour = () => {
    const date = new Date();
    const hour = date.getHours();
    this.setState({ hour });
  };

  render() {
    const { hour } = this.state;
    
    if (hour === 0 || hour < 6){
        return(
            <View style={ styles.container }>
              <Image source={require('../assets/pictures/dawn.png')} style={ styles.image }/>
              <Text style={ styles.text }>Good Morning!</Text>
            </View>
        );
    } else if (hour === 1 || hour < 12){
        return (
            <View style={ styles.container }>
              <Image source={require('../assets/pictures/morning.png')} style={ styles.image }/>
              <Text style={ styles.text }>Good Morning!</Text>
            </View>
          );
    } else if (hour === 2 || hour < 18){
        return (
            <View style={ styles.container }>
              <Image source={require('../assets/pictures/afternoon.png')} style={ styles.image }/>
              <Text style={ styles.text }>Good Afternoon!</Text>
            </View>
          );
    } else {
        return (
            <View style={ styles.container }>
              <Image source={require('../assets/pictures/night.png')} style={ styles.image }/>
              <Text style={ styles.text }>Good Evening!</Text>
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
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: 100,
        zIndex: 0,
        position: 'absolute',
        opacity: 0.75,
        borderRadius: 5,
    },
    text: {
        top: 0,
        zIndex: 1,
        color: 'black',
        fontFamily: 'Poppins-Bold',
        fontSize: 24,
    },
});
