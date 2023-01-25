import React from 'react';
import { View, TextInput, Text } from 'react-native';
import styles from './Input.style';

function Input({lable, placeholder, onChangeTest}) {
    return (
        <View style={styles.container}>
            <Text style={styles.lable}>{lable}</Text>
            <View style={styles.input_container}>
                <TextInput placeholder={placeholder} onChangeText={onChangeTest} />
            </View>
        </View>
    );
}

export default Input;