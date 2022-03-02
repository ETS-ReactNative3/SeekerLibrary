import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';


class Book extends Component {
    render() {
        return(
            <View style={ styles.container }>
                <View style={ styles.top }>
                    <Image source={this.props.url} style = {{width: 110, height : 150}}/>
                </View>
                <View style={ styles.bottom }>
                    <Text style={ styles.title }>{this.props.title}</Text>
                </View>  
            </View>
        );
    }
}

export default Book;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 0.5,
        margin: 3,
        borderRadius: 5,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#e0e0e0',
        flex: 1,
        flexDirection: 'column',
        width: 140,
        height: 230,
        alignItems: 'center',
        justifyContent: 'center',
    },
    top: {
        marginTop: 1,
    },
    bottom: {
        marginTop: 1,
    }, 
    title: {
        fontWeight: "bold",
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
});