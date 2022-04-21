import React, { Component } from 'react';
import { View, StyleSheet, Button, Text, FlatList } from 'react-native';
import { LogBox } from 'react-native';

// import firestore
import { doc, getDoc } from 'firebase/firestore';
import { db, getAllBooks } from '../firebase';

class Firestore extends Component {
    constructor() {
        super();
        this.state = {
        book: "",
        all_books: []
        }
    }

    Read = async () => {
        const books = doc(db, "books", "0dx2hRB9SonkETleQAfa");

        await getDoc(books)
        .then((snapshot) => {
            if (snapshot.exists){
                this.setState({ book: snapshot.data() })
            }
            else{
                alert("No book found")
            }
        })
        .catch((error) => {
            alert(error.message)
        })
    }

    render() {
        return(
            <View>
                <Button
                    title='Books'
                    onPress={this.Read}
                ></Button>
                {
                    <View>
                        <Text>{this.state.book.author}</Text>
                    </View>
                }
            </View>
        );
    }
}

export default Firestore;