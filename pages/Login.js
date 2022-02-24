import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Button, TextInput, View, Image } from 'react-native';
import { auth } from '../firebase';

class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  navigation = useNavigation

  handleSignup = () => {
    auth
    .createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then(UserCredentials => {
      const user = UserCredentials.user;
      console.log('Registered with:', user.email);
    })
    .catch(error => alert(error.message))
  }

  handleLogin = () => {
    auth
    .signInWithEmailAndPassword(this.state.email, this.state.password)
    .then(UserCredentials => {
      const user = UserCredentials.user;
      console.log('Logged in with:', user.email);

        const unsubscribe = auth.onAuthStateChanged(user => {
          if (user) {
            this.props.navigation.navigate('Home')
          }
        })
        return unsubscribe
    })
    .catch(error => alert(error.message))
  }


  /*encrypt_password = () => {
    var temp = Base64.encode(this.state.Password_Holder);
    this.setState({ update_data: temp });
  }
  decrypt_password = () => {
    var temp2 = Base64.decode(this.state.update_data);
    this.setState({ update_data: temp2 });
  }*/

  
  render() {
    return (
      <View style={styles.container}>
        <StatusBar  
            backgroundColor = "#b3e6ff"  
            barStyle = "dark-content"   
            hidden = {false}    
            translucent = {false}  
        />
        <View>
          <Image 
            source={require('../assets/logo.png')}
            style={{ width: 300, height: 100 }}
          />
        </View>
        
        <View style={ styles.inputContainer }>
          <TextInput
            style={ styles.input }
            placeholder="Email"
            onChangeText={text => this.setState({ email: text })}
          />
        </View>
          
        <View style={ styles.inputContainer }>
          <TextInput
            style={ styles.input }
            placeholder="Password"
            onChangeText={text => this.setState({ password: text })}
            underlineColorAndroid="transparent"
            secureTextEntry={true}
          />
        </View>
        
        <View style={ styles.buttonContainer }>
        <Button
          title="Log In"
          onPress= {this.handleLogin}
        />
        </View>

        <View style={ styles.buttonContainer }>
        <Button
          title="Register"
          onPress= {this.handleSignup}
        />
        </View>
      </View>
    );
  }
}
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    height: 40,
    width: 300,
    paddingHorizontal: 10,
    borderColor: '#e0e0e0',
    borderWidth: 1,
    borderRadius: 5,
  },
  inputContainer:{
    marginVertical: 5,
  },
  buttonContainer:{
    marginVertical: 20,
    color: '#007aff',
    width: 150,
    borderRadius: 5,
  }
});

