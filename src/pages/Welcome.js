import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import Button from '../components/Button';


function Welcome({navigation}) {

    function upToMemberSign(){
        navigation.navigate("MemberSignScreen");
    }

    return(
        <View style={styles.container}>
            <View style={styles.textFull}>
                <Text style={styles.textContainer1}>welcome</Text>
                <Text style={styles.textContainer2}>baby</Text>
                <Text style={styles.textContainer3}>you ready?</Text>
            </View>
            <Button text="ok, let's try!" onPress={upToMemberSign} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textFull: {
        alignItems: 'flex-start',
        marginBottom: 75,
    },
    textContainer1: {
        color: 'white',
        fontSize: 60,
    },
    textContainer2: {
        color: 'white',
        fontSize: 45,
    },
    textContainer3: {
        color: 'white',
        fontSize: 25,
    },
});

export default Welcome;