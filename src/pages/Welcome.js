import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';

function Welcome({navigation}) {

    function goToMemberSign(){
        navigation.navigate('MemberSignScreen');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Kebab Fitness</Text>
            <Button text="Click to Sign In" onPress={goToMemberSign} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    header: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        margin: 5,
    },
});

export default Welcome;