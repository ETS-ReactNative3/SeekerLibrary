import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

class BookCard extends Component {
    render() {
        return(
            <View style={ styles.container }>
                <View style={ styles.left }>
                    <Image source={this.props.url} style = {{width: 110, height : 150}}/>
                </View>
                <View style={ styles.right }>
                    <Text style={ styles.title }>{this.props.title}</Text>
                    <Text>{this.props.author}</Text>
                    <Text style={ styles.desc }>{this.props.desc}</Text>
                </View>  
            </View>
        );
    }
}

export default BookCard;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 1,
        margin: 3,
        borderRadius: 5,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#e0e0e0',
        flex: 1,
        flexDirection: 'row',
        width: 350,
        height: 200,
    },
    left: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    right: {
        flex: 1.5,
        alignItems: 'center',
        padding: 10,
    },  
    title: {
        fontSize: 18,
        fontWeight: "bold",
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    horizontal: {
        flex: 1,
        flexDirection: 'row',
    },
    desc: {
        marginTop: 10,
        textAlign: 'justify',
    }
});