import React from 'react';
import { TextInput, View, Text } from 'react-native';
import styles from './Input.style';

function Input ({ value, textName, placeholder, keyboardType, onChangeText}){
    return(
        <View>
            <Text style={styles.text_container}>{textName}</Text>
            <TextInput
                placeholderTextColor= 'lightgray'
                style={styles.input_container} 
                placeholder={placeholder}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
                value={value}
            />
        </View>
    );
}

export default Input;