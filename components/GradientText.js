import React, { Component } from 'react';
import { Text } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';

class Gradient extends Component {
    render() {
    return (
        <MaskedView maskElement={<Text style={[this.props.style, {backgroundColor: 'transparent'}]}>{this.props.text}</Text>}>
            <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                colors={['#85e3ff', '#ffb5e8', '#fff5ba', '#85e3ff', '#ffb5e8']}
            >
            <Text style={[this.props.style, {opacity: 0}]}>{this.props.text}</Text>
            </LinearGradient>
        </MaskedView>
    );
}
}
export default Gradient;