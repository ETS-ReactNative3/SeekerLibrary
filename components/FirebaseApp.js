import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { initializeApp } from 'firebase/app';
import { getFirestore, setDoc, doc } from 'firebase/firestore';
import firestore from '@react-native-firebase/firestore';
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDsItYPR8hG8XcdiW4-NohaaNCXxVl22es",
    authDomain: "fir-auth-90d10.firebaseapp.com",
    projectId: "fir-auth-90d10",
    storageBucket: "fir-auth-90d10.appspot.com",
    messagingSenderId: "1023001902252",
    appId: "1:1023001902252:web:36d77d8a8e9254227bf309"
  };
firebase.initializeApp(config);

const db = firebase.firestore();
const books = db.collection("books");

class FirebaseApp extends Component {
    state = {
        books: {
            author: ""
        }
    }

    constructor() {
        super();
        this.getUser();
        this.subscriber = firestore().collection('books').doc('0dx2hRB9SonkETleQAfa').onSnapshot(doc => {
            this.setState({
                books: {
                    author: doc.data().author
                }
            })
        })
    }
    getUser = async () => {
        const booksDocument = await firestore().collection('books').doc('0dx2hRB9SonkETleQAfa').get()
        console.log(booksDocument);
    }

    render() {
        return (
            <View>
                <Text> Author: { this.state.books.author } </Text>
            </View>
        )
    }
}

export default FirebaseApp;