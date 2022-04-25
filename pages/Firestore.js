import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { LogBox } from 'react-native';

// import firestore
import { doc, getDoc } from 'firebase/firestore';
import { db, getAllBooks, totalBooks } from '../firebase';

class Firestore extends Component {
    constructor() {
        super();
        this.state = {
        books: []
        }
    }

    async getBooks() {
        const snapshot = await totalBooks.collection("books").get()
        const books = snapshot.docs.map(doc => doc.data());

        this.setState({ books });
    }

    async componentDidMount() {
        this.getBooks();
    }

    render() {
        return(
            <ScrollView>
                { this.state.books.map(book => (
                    <View>
                        <View>
                            <Text>{ book.author }</Text>
                        </View>
                        <View>
                            <Text>{ book.title }</Text>
                        </View>
                    </View>
                )) }
            </ScrollView>
        );
    }
}

export default Firestore;