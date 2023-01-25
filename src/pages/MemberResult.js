import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function MemberResult({route}) {

    const  {user} =route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.lable}>Member Name: {user.userName}</Text>
            <Text style={styles.lable}>Member Last Name: {user.userSurName}</Text>
            <Text style={styles.lable}>Member nickname: {user.userNickName}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    lable: {
        fontSize: 15,
        fontWeight: 'bold',
    },
});

export default MemberResult;
