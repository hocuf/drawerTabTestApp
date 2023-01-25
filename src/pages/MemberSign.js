import React, {useState} from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import Button from '../components/Button';
import Input from '../components/Input';

function MemberSign({navigation}) {

    const [userName, setUserName] = React.useState(null);
    const [userSurName, setUserSurName] = React.useState(null);
    const [userNickName, setUserNickName] = React.useState(null);

    function handleSubmit() {
        if(!userName || !userSurName || !userNickName) {
            Alert.alert("Kebab Fitness","Please Check Empty Fields");
            return;
        }
        const user = {
            userName,
            userSurName,
            userNickName,
        };
        navigation.navigate("MemberResultScreen", {user});
    }

    return (
        <View style={styles.container}>
            <Input 
                placeholder="Enter Your Name"  
                lable="Name" 
                onChangeTest={setUserName}
            />
            <Input 
                placeholder="Enter Your Last Name"  
                lable="Last Name" 
                onChangeTest={setUserSurName}
            />
            <Input 
                placeholder="Enter Your nickname"  
                lable="nickname" 
                onChangeTest={setUserNickName}
            />
            <Button 
            text="Complete Registration" 
            onPress={handleSubmit}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
});


export default MemberSign;