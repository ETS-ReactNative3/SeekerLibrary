import React, { Component } from "react";
import { StyleSheet, View, Text, Image, StatusBar } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { doc, setDoc, collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase";

class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      note: ""
    };
    this.demoInitialize();
  }

  // CRUD Functions
  create = () => {
    const docRef = addDoc(collection(db, "notes"), {
      title: this.state.name,
      note: this.state.note,
      email: auth.currentUser?.email,
      created_at: firebase.database.ServerValue.TIMESTAMP,
    });
  };

  // read = () => {
  //   const querySnapshot = getDocs(collection(db, "notes"));
  //   querySnapshot.forEach((doc) => {
  //     console.log(doc.id, " => ", doc.data());
  //     // return tas view para auto display na
  //   });
  // };

   demoInitialize = async (db) => {
  const snapshot = await db.collection('cities').get();

  // Print the ID and contents of each document
  snapshot.forEach(doc => {
    console.log(doc.id, ' => ', doc.data());
  });
  // [END demo_initialize]
}

  update = (value, merge) => {
    const myDoc = doc(db, "MyCollection", "MyDocument");

    // If you set merge true then it will merge with existing doc otherwise it will be a fresh one
    setDoc(myDoc, value, { merge: merge })
      // Handling Promises
      .then(() => {
        // MARK: Success
        alert("Updated Successfully!");
        setText("");
      })
      .catch((error) => {
        // MARK: Failure
        alert(error.message);
      });
  };

  deleteNote = () => {
    // MARK: Deleting Doc
    const myDoc = doc(db, "MyCollection", "MyDocument");

    deleteDoc(myDoc)
      // Handling Promises
      .then(() => {
        // MARK: Success
        alert("Deleted Successfully!");
      })
      .catch((error) => {
        // MARK: Failure
        alert(error.message);
      });
  };

  render() {
    return(
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.add}>
        <Ionicons name="ios-add-circle" size={75} color={"#57A7FF"}/>  
      </TouchableOpacity>
    </ScrollView>
    )
  }
}
export default Notes;

const styles = StyleSheet.create({
  container:{
    display: 'flex',
    // backgroundColor: 'blue',
  },
  add: {
    position: 'absolute',
    alignSelf: 'flex-end',
    backgroundColor: 'yellow'
  }
});
