import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Dimensions, TextInput, View, TouchableOpacity, Image, Text, KeyboardAvoidingView, Platform} from 'react-native';
import { auth } from '../firebase';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

import Gradient from '../components/GradientText';
import Svg, { Path } from 'react-native-svg';

let customFonts = {
  'Poppins-Bold': 'https://github.com/AndreaMaurice/SeekerStorage/raw/main/Poppins-Bold.ttf',
  'Poppins-Regular': 'https://github.com/AndreaMaurice/SeekerStorage/raw/main/Poppins-Regular.ttf',
  'Major-Mono': 'https://github.com/googlefonts/majormono/raw/master/fonts/MajorMonoDisplay-Regular.ttf',
};


class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      fontsLoaded: false,
      keyboardStatus: undefined,
    }
  }
  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
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
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    }
    return (
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <View  style={styles.upperContainer}>
          <StatusBar backgroundColor = "#57A7FF" barStyle = "dark-content" hidden = {false} translucent = {false} />
          <Image source={require('../assets/pictures/1.png')} style = { styles.pic }/>
          <Text style={styles.title}>SEEKER</Text>
          <Gradient text='LIBRARY' style={styles.lib}/>
        </View>
        
        <View  style={styles.lowerContainer}>
        <View style={ styles.clickables }>
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
            <TouchableOpacity>
              <Text style={ styles.text }>Forgot Password?</Text>
            </TouchableOpacity>

          <TouchableOpacity
                style={[ styles.buttonContainer, { backgroundColor: '#6eb5ff', marginTop: 20} ]}
                onPress= {this.handleLogin}
            >
              <Text style={ styles.button }>Log In</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={ styles.buttonContainer }
                onPress= {this.handleSignup}
            >
              <Text style={[ styles.button, { color:'#9a9a9a'} ]}>Register</Text>
            </TouchableOpacity>
          </View>
            <Svg
            height="130%"
            width="1000%"
            viewBox="0 0 1440 320"
            style={ styles.svg }
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
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#57A7FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    height: 50,
    width: 300,
    paddingHorizontal: 10,
    borderColor: '#e0e0e0',
    backgroundColor: '#D7EAFF',
    borderWidth: 1,
    borderRadius: 5,
    fontFamily: 'Poppins-Regular',
  },
  inputContainer:{
    marginVertical: 5,
  },
  buttonContainer:{
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 45,
    borderRadius: 5,
  },
  button:{
    fontFamily: 'Poppins-Bold',
    color: 'white',
    fontSize: 16,
  },
  title:{
    fontFamily: 'Major-Mono',
    fontSize: 60,
    lineHeight: 50,
    color: '#ffffff',
  },
  pic: {
    width: 200, 
    height : 130,
  },
  upperContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lowerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  clickables: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    zIndex: 1,
    marginBottom: 30,
  },
  text: {
    fontFamily: 'Poppins-Regular',
    color: '#9a9a9a',
  },
  svg: {
    bottom: 0,
    position: 'absolute',
    width: Dimensions.get('window').width,
    zIndex: 0,
  },
  lib: {
    fontFamily: 'Poppins-Regular',
    letterSpacing: 5,
    color: 'white',
    fontSize: 18,
  },
});

