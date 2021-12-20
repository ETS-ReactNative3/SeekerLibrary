import { AuditOutlined } from '@ant-design/icons/lib/icons';
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import Card from './Card';
import BookCard from './BookCard';

const religion = require('../assets/religion.png')
const socsci = require('../assets/socsci.png')
const language = require('../assets/language.png')

const bsa = require('../assets/bsa.png')
const bab = require('../assets/bab.png')
const bsis = require('../assets/bsis.png')

const pdf1 = require('../assets/pdf-1.png')
const pdf2 = require('../assets/pdf-2.png')
const pdf3 = require('../assets/pdf-3.png')

class GroupedCards extends Component {
render() {
    return(
        <ScrollView>
            <View style={ styles.container }>
            <Text style={ styles.title }>General Category</Text>
            <ScrollView style={ styles.scroll } horizontal={ true }>
            <Card title='Religion' url={ religion }/>
            <Card title='Social Sciences' url={ socsci }/>
            <Card title='Languages' url={ language }/>
            </ScrollView>
            </View>

            <View style={ styles.container }>
            <Text style={ styles.title }>Special Category</Text>
            <ScrollView style={ styles.scroll } horizontal={ true }>
            <Card title='BSA' url={ bsa }/>
            <Card title='BAB' url={ bab }/>
            <Card title='BSIS' url={ bsis }/>
            </ScrollView>
            </View>

            <View style={ styles.container }>
            <Text style={ styles.title }>My Collection</Text>
            <ScrollView style={ styles.scroll } horizontal={ true }>
            <BookCard
                title='A First Look at Communication Theory'
                author='Em Griffin' url={ pdf1 }
                desc='Risus feugiat in ante metus dictum at tempor commodo ullamcorper'
                />
            <BookCard 
                title='Accounting and Finance: An Introduction'
                author='Eddie McLaney & Peter Atrill' url={ pdf2 }
                desc='Risus feugiat in ante metus dictum at tempor commodo ullamcorper'
                />
            <BookCard 
                title='Project Management: The Managerial Process' 
                author='Erik Larson & Clifford Gray' url={ pdf3 }
                desc='Risus feugiat in ante metus dictum at tempor commodo ullamcorper'
            />
            </ScrollView>
            </View>

            <View style={ styles.container }>
            <Text style={ styles.title }>Suggested Books</Text>
            <ScrollView style={ styles.scroll } horizontal={ true }>
            <BookCard
                title='A First Look at Communication Theory'
                author='Em Griffin' url={ pdf1 }
                desc='Risus feugiat in ante metus dictum at tempor commodo ullamcorper'
                />
            <BookCard 
                title='Accounting and Finance: An Introduction'
                author='Eddie McLaney & Peter Atrill' url={ pdf2 }
                desc='Risus feugiat in ante metus dictum at tempor commodo ullamcorper'
                />
            <BookCard 
                title='Project Management: The Managerial Process' 
                author='Erik Larson & Clifford Gray' url={ pdf3 }
                desc='Risus feugiat in ante metus dictum at tempor commodo ullamcorper'
            />
            </ScrollView>
            </View>
        </ScrollView>
    );
}}
export default GroupedCards;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        paddingLeft: 10,
        height: 'auto',
    },
    scroll: {
        flex: 1,
        flexDirection: 'row',
        },
        title: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 5,
        marginBottom: 5,
    },
    });