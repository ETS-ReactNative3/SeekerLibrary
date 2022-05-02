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
        bsis: [],
        bab: []
        }
    }

    async getBsis() {
        const snapshot = await totalBooks.collection("books").where("category", "==", "BSIS").get()
        const bsis = snapshot.docs.map(doc => doc.data());

        this.setState({ bsis });
    }

    async getBab() {
        const snapshot = await totalBooks.collection("books").where("category", "==", "BAB").get()
        const bab = snapshot.docs.map(doc => doc.data());

        this.setState({ bab });
    }

    async componentDidMount() {
        this.getBsis();
        this.getBab();
    }

    async componentWillUnmount() {
        this.getBsis = false;
        this.getBab = false;
    }

    render() {
        return(
            <View>
                <ScrollView>
                <Text style={{fontSize:30, fontStyle:"bold"}}>BSIS</Text>
                { this.state.bsis.map(book => (
                    <View style={{borderBottomWidth:30, borderBottomColor:"white"}}> 
                        <View>
                            <Text>{ book.author }</Text>
                        </View>
                        <View>
                            <Text>{ book.title }</Text>
                        </View>
                        <View>
                            <Text>{ book.category }</Text>
                        </View>
                    </View>
                )) }
            </ScrollView>
            <ScrollView>
                <Text style={{fontSize:30, fontStyle:"bold"}}>BAB</Text>
                { this.state.bab.map(book => (
                    <View style={{borderBottomWidth:30, borderBottomColor:"white"}}> 
                        <View>
                            <Text>{ book.author }</Text>
                        </View>
                        <View>
                            <Text>{ book.title }</Text>
                        </View>
                        <View>
                            <Text>{ book.category }</Text>
                        </View>
                    </View>
                )) }
            </ScrollView>
            </View>
        );
    }
}

export default Firestore;