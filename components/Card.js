import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class Card extends Component {
    render() {
        return(
            <View style={ styles.container }>
                <View style={ styles.left }>
                    <Text style={ styles.title }>{this.props.title}</Text>
                </View>
                <View style={ styles.right }>
                    <Image source={this.props.url} style = {{width: 130, height : 70}}/>
                </View>  
            </View>
        );
    }
}

export default Card;

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
        width: 275,
        height: 100,
    },
    left: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    right: {
        flex: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
    },  
    title: {
        fontSize: 18,
        fontWeight: "bold",
        alignItems: 'center',
        justifyContent: 'center',
    },
    horizontal: {
        flex: 1,
        flexDirection: 'row',
    },
});