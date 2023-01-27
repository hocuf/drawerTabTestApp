import React, {useState} from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import Button from '../components/Button';
import Input from '../components/Input';




function MemberSign({navigation}) {


    const[userName, setuserName]= React.useState('');
    const[userEmail, setuserEmail]= React.useState('');
    const[userNickName, setuserNickName]= React.useState('');


    function handleSubmit() {

        if(!userName || !userNickName || !userEmail) {
            Alert.alert("cebimdEnergy", "Please Check Empty Fields");
            return;
        }

        navigation.navigate("MainPageScreen");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text_container}>cebimdEnergy</Text>
            <View style={styles.container_signIn}>
                <Input 
                textName="Name" 
                placeholder="Enter Name"
                onChangeText={setuserName}

            />
             <Input 
                textName="Email"
                placeholder="Enter Email"
                onChangeText={setuserEmail}
            />
             <Input 
                textName="Nickname" 
                placeholder="Enter Nickname"
                onChangeText={setuserNickName}
            />
            </View>
            <View style={styles.button_container}>
                <Button text="sign in" onPress={handleSubmit} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'black',
        alignItems: 'center',
    },
    container_signIn: {
        margin: 5,
    },
    button_container: {
        margin: 5,
        marginTop: 65,
    },
    text_container: {
        color: 'white',
        marginBottom: 55,
        fontSize: 35,
        fontWeight: 'bold',
    },
});


export default MemberSign;