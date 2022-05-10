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
            gen: [],
            philPsy: [],
            rel: [],
            SocSci: [],
            Lang: [],
            NatSci: [],
            AppSci: [],
            ArtsRec: [],
            Lit: [],
            GeoHis: [],
        }
    }

    async getGen() {
        const snapshot = await totalBooks.collection("books").where("category", "==", "Generalities").get()
        const gen = snapshot.docs.map(doc => doc.data());

        this.setState({ gen });
    }

    async getPhilPsy() {
        const snapshot = await totalBooks.collection("books").where("category", "==", "Philosophy & Psychology").get()
        const philPsy = snapshot.docs.map(doc => doc.data());

        this.setState({ philPsy });
    }

    async getRel() {
        const snapshot = await totalBooks.collection("books").where("category", "==", "Religion").get()
        const rel = snapshot.docs.map(doc => doc.data());

        this.setState({ rel });
    }


    async componentDidMount() {
        this.getGen();
        this.getPhilPsy();
        this.getRel();
    }

    async componentWillUnmount() {
        this.getGen = false;
        this.getPhilPsy = false;
        this.getRel = false;
    }

    render() {
        return(
            <ScrollView style={{marginBottom:25}}>
                <View>
                    <Text style={{fontSize:30, fontWeight:"bold"}}>General Categories</Text>
                    <Text style={{fontSize:25}}>Generalities</Text>
                    { this.state.gen.map(book => (
                        <View style={{marginBottom:20}}> 
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
                </View>

                <View>
                    <Text style={{fontSize:25}}>Philosophy & Psychology</Text>
                    { this.state.philPsy.map(book => (
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
                </View>

                <View>
                    <Text style={{fontSize:25}}>Religion</Text>
                    { this.state.rel.map(book => (
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
                </View>

            </ScrollView>
        );
    }
}

export default Firestore;