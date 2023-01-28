import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import EnergyPattern from '../EnergyPattern';
import data from '../EnergyPattern/data.json';


function MainPage() {
    return(
        <View style={styles.container}>
            <ScrollView style={styles.scroll_container} horizontal showsHorizontalScrollIndicator={false}>
                <EnergyPattern unitName="300kW/h" />
                <EnergyPattern unitName="360kw/h"/>
                <EnergyPattern unitName="250kW/h"/>
                <EnergyPattern unitName="200kW/h"/>
                <EnergyPattern unitName="150kW/h"/>
            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    scroll_container: {
        margin: 15,
    },
});


export default MainPage;