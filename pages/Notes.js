// import { useNavigation } from '@react-navigation/native';
import React, { Component } from "react";
import { StyleSheet, View, Text, Image, StatusBar, TextInput } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { doc, setDoc, collection, addDoc, orderBy, getDocs } from "firebase/firestore";
import { db, totalDB } from "../firebase";
import { createStackNavigator } from '@react-navigation/stack';
import { auth } from "../firebase";
import { EventRegister } from 'react-native-event-listeners'

const Stack = createStackNavigator();

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      email: auth.currentUser?.email,
    };
  }

  async componentDidMount(){
    this.update();
    this.getNotes();
  }


  async getNotes() {
    const snapshot = await totalDB.collection("notes")
    .where("email", "==", this.state.email)
    .get()
    const notes = snapshot.docs.map(doc => doc.data());
    
    this.setState({ notes });
  }

  update() {
    this.listener = EventRegister.addEventListener('makeNote', (data) => {
      this.getNotes();
    })
  }

  async componentWillUnmount() {
    this.getNotes = false;
    this.update = false;
  }

  render() {
    return(
    <View style={styles.container}>
      {/* <ReadNote style={styles.list}/> */}
      <ScrollView style={styles.list} showsVerticalScrollIndicator={false}>
      { this.state.notes.map((note, i) => (
          <TouchableOpacity
            key={i}
            style={styles.noteContainer}
            onPress={()=>{this.props.navigation.navigate('UpdateNote', {
                title: note.title,
                note: note.note,
                id: note.id,
            })}}> 
          <View style={styles.textContainer}>
              <Text style={styles.listTitle}>{ note.title }</Text>
              <Text style={styles.listNote}>{ note.note }</Text>
              <Text style={styles.listDate}>{ note.created_at }</Text>
          </View>
      </TouchableOpacity>
      )) }
      </ScrollView>

      <View style={styles.touch}>
        <TouchableOpacity style={styles.add}
          onPress={()=>{this.props.navigation.navigate('CreateNote')}}> 
          <Text style={styles.icon}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
    )
  }
}

class CreateNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      note: "",
      currentDate: "",
      id: ""
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

  componentDidMount() {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds

    this.setState({
      currentDate: month + '/' + date + '/'+ year 
      + ' ' + hours + ':' + min + ':' + sec,
    });
  }

  // CRUD Functions
  create = () => {
    const docRef = addDoc(collection(db, "notes"), {
      title: this.state.title,
      note: this.state.note,
      email: auth.currentUser?.email,
      created_at: this.state.currentDate,
      id: this.state.id
    });
    this.props.navigation.navigate("NotesListings");
    EventRegister.emit('makeNote', 'it works!!!');
    console.log("create record");
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
          <TouchableOpacity 
            style={styles.button}
            onPress={this.create}
          >
            <Text style={styles.textButton}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

class UpdateNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      note: "",
      currentDate: "",
      id: ""
    };
  }

  componentDidMount() {
    var note = "";
    var title = "";
    var id = "";

    if (this.props.route.params && this.props.route.params.id) {
      id = this.props.route.params.id;
      title = this.props.route.params.title;
      note = this.props.route.params.note;
    }

    this.setState({
      id, note, title
    });
  }

  update = () => {
    if (this.props.route.params && this.props.route.params.id) {
      console.log("update record");
      // update
    }
  }

  render() {
    return(
      <View style={styles.notesContainer}>
        <View style={styles.title}>
        <TextInput
          value={this.state.title}
          style={styles.inputTitle}
          placeholder="Title"
          onChangeText={(text) => this.setState({ title: text })}
        />
        </View>
        <View style={styles.note}>
        <TextInput
          value={this.state.note}
          style={styles.inputNote}
          placeholder="Start Typing"
          multiline={true}
          onChangeText={(text) => this.setState({ note: text })}
        />
        </View>
        <View>
          <TouchableOpacity 
            style={styles.button}
            onPress={this.update}
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
      <Stack.Screen
        name="UpdateNote"
        component={UpdateNote}
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
    padding: 15,
    backgroundColor: '#F6F6F6',
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
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginVertical: 2.5,
  },
  listTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
  },
  listNote: {
    fontFamily: 'Poppins-Regular',
    color: '#4d4d4d',
  },
  listDate: {
    fontFamily: 'Poppins-Regular',
    color: '#c0c0c0',
  },
});
