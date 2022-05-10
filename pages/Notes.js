// import { useNavigation } from '@react-navigation/native';
import React, { Component } from "react";
import { StyleSheet, View, Text, Image, StatusBar, TextInput } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { doc, setDoc, collection, addDoc, getDocs } from "firebase/firestore";
import { db, totalBooks } from "../firebase";
import { createStackNavigator } from '@react-navigation/stack';
import { auth } from "../firebase";

const Stack = createStackNavigator();

class Content extends Component {

  render() {
    return(
    <View style={styles.container}>
      <ReadNote style={styles.list}/>
      <View style={styles.touch}>
        <TouchableOpacity style={styles.add}
          onPress={()=>{this.props.navigation.navigate('CreateNote')}}
        > 
          <Text style={styles.icon}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
    )
  }
}

class ReadNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      email: auth.currentUser?.email,
    };
  }

  async getNotes() {
    const snapshot = await totalBooks.collection("notes").where("email", "==", this.state.email).get()
    const notes = snapshot.docs.map(doc => doc.data());
    
    this.setState({ notes });
}

    async componentDidMount(){
      this.getNotes();
   
     }
   
     async componentWillUnmount() {
       this.getNotes = false;
   }

  render() {
    return(
    <ScrollView style={styles.list}>
      { this.state.notes.map(note => (
          <TouchableOpacity style={styles.noteContainer}> 
          <View style={styles.textContainer}>
              <Text>{ note.title }</Text>
              <Text>{ note.note }</Text>
              <Text>{ note.created_at }</Text>
          </View>
      </TouchableOpacity>
      )) }
      </ScrollView>
    );
}
}
class CreateNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      note: "",
      currentDate: "",
    };
  }

  componentDidMount() {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    this.setState({
      currentDate: month + '/' + date + '/'+ year 
      + ' ' + hours + ':' + min + ':' + sec
    });
  }

  // CRUD Functions
  create = () => {
    const docRef = addDoc(collection(db, "notes"), {
      title: this.state.title,
      note: this.state.note,
      email: auth.currentUser?.email,
      created_at: this.state.currentDate
    });
    this.props.navigation.navigate("NotesListings");
  };
  render() {
    return(
      <View style={styles.notesContainer}>
        <View style={styles.title}>
        <TextInput
          style={styles.inputTitle}
          placeholder="Title"
          onChangeText={(text) => this.setState({ title: text })}
        />
        </View>
        <View style={styles.note}>
        <TextInput
          style={styles.inputNote}
          placeholder="Start Typing"
          multiline={true}
          onChangeText={(text) => this.setState({ note: text })}
        />
        </View>
        <View>
          <TouchableOpacity style={styles.button}
            onPress={this.create}
          >
            <Text style={styles.textButton}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

class Notes extends Component {
  render(){
    return(
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="NotesListings"
        component={Content}
      />
      <Stack.Screen
        name="CreateNote"
        component={CreateNote}
      />
    </Stack.Navigator>

    );
  }
}
export default Notes;

const styles = StyleSheet.create({
  container:{
    display: 'flex',
    flex: 1,
  },
  touch: {
    justifyContent: 'flex-end',
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  list: {
    flex: 1,
  },
  add: {
    backgroundColor: '#57A7FF',
    width: 75,
    height: 75,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    zIndex: 1000,
  },
  icon: {
    fontSize: 50,
    color: 'white',
  },
  notesContainer: {
    // backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  title: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderTopStartRadius: 5,
    borderTopEndRadius: 5,
  },
  note: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 15,
    flex: 1,
    borderBottomStartRadius: 5,
    borderBottomEndRadius: 5,
  },
  inputTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    borderColor: '#bbbbbb',
    borderBottomWidth: 1.5,
  },
  inputNote: {
    fontSize: 16,
  },
  button: {
    backgroundColor: '#57A7FF',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: 45,
    width: 200,
    margin: 15,
    borderRadius: 5,
  },
  textButton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white'
  },
  noteContainer: {
    borderWidth: 1,
    borderColor: '#bbbbbb',
    margin: 5,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  }
});
