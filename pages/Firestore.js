import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, Image } from 'react-native';
import { LogBox } from 'react-native';

// import firestore
import { doc, getDoc } from 'firebase/firestore';
import { db, getAllBooks, totalBooks } from '../firebase';
import { TouchableOpacity } from 'react-native-gesture-handler';

class Firestore extends Component {
    constructor() {
        super();
        this.state = {
        bsis: [],
        bab: [],
        url: "",
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
        // this.setState({ url: doc.thumbnail });

        this.setState({ philPsy });
    }


    async componentDidMount() {
        this.getGen();
        this.getPhilPsy();
    }

    async componentWillUnmount() {
        this.getGen = false;
        this.getPhilPsy = false;
    }

    render() {
        return(
            <View>
                <ScrollView>
                <Text style={{fontSize: 24, fontWeight: "bold"}}>BSIS</Text>
                { this.state.bsis.map(book => (
                    <TouchableOpacity style={styles.bookContainer}> 
                    <View style={styles.imgContainer}>

                    </View>
                    <View style={styles.textContainer}>
                        <Text>{ book.title }</Text>
                        <Text>{ book.author }</Text>
                        <Text>{ book.category }</Text>
                    </View>
                </TouchableOpacity>
                )) }
            </ScrollView>
            <ScrollView>
                <Text style={{fontSize: 24, fontWeight: "bold"}}>BAB</Text>
                { this.state.bab.map(book => (
                    <TouchableOpacity style={styles.bookContainer}> 
                        <View style={styles.imgContainer}>
                            
                        </View>
                        <View style={styles.textContainer}>
                            <Text>{ book.title }</Text>
                            <Text>{ book.author }</Text>
                            <Text>{ book.category }</Text>
                        </View>
                    </TouchableOpacity>
                )) }
            </ScrollView>
            </View>
        );
    }
}

export default Firestore;

const styles = StyleSheet.create({
    bookContainer: {
     borderBottomWidth:30,
     borderBottomColor:"blue",
     backgroundColor: 'yellow',
    },
    img: {
        width: 100,
    }
})