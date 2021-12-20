import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Button, TextInput, View, Image } from 'react-native';
import { Base64 } from 'js-base64';

class Login extends Component {
  constructor() {
    super()
    this.state = {
      Password_Holder: '',
      update_data: '',
    }
  }
  encrypt_password = () => {
    var temp = Base64.encode(this.state.Password_Holder);
    this.setState({ update_data: temp });
  }
  decrypt_password = () => {
    var temp2 = Base64.decode(this.state.update_data);
    this.setState({ update_data: temp2 });
  }
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
          />
        </View>
          
        <View style={ styles.inputContainer }>
          <TextInput
            style={ styles.input }
            placeholder="Password"
            onChangeText={data => this.setState({ Password_Holder: data })}
            underlineColorAndroid="transparent"
            secureTextEntry={true}
          />
        </View>
        
        <View style={ styles.buttonContainer }>
        <Button
          title="Log In"
          onPress= {() => {this.props.navigation.navigate('Home');}}
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

