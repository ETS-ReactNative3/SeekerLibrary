import { useNavigation } from '@react-navigation/native';
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { auth } from '../firebase';

class Register extends Component {
   constructor() {
      super();
      this.state = {
      email: "",
      password: ""
      }
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
   }

    render() {
   return (
      <View>
         <TextInput 
            placeholder='email'
            onChangeText={(text) => this.setState({ email:text })}
         />
         <TextInput 
            placeholder='password'
            onChangeText={(text) => this.setState({ password:text })}
         />
         <TouchableOpacity
            onPress={this.handleSignup}
            >
            <Text>
               Sign Up
            </Text>
         </TouchableOpacity>
      </View>
      );
   }
}

export default Register;