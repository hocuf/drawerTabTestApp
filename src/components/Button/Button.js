import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './Button.style';

function Button({text, onPress}) {
    return(
        <View>
            <TouchableOpacity style={styles.container} onPress={onPress}>
                <Text style={styles.text}>{text}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Button;