import React, { Component } from 'react';
import { View, Text } from 'react-native';

import firestore from '@react-native-firebase/firestore';

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