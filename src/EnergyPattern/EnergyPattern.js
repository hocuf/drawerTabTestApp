import React from 'react';
import { View, Text, Image } from 'react-native';
import Button from '../components/Button';
import styles from './EnergyPattern.style';
import data from './data.json';


function EnergyPattern({unitName}){

    const [id, setId] = React.useState('');
    function point(){
        setId(id+1);
    }

    return(
        <View style={styles.normal_container}>
            <View  style={styles.container}>
                {
                    data.map(data_images => (
                    <Image style={styles.image_container} source={{uri: data_images.imageUrl}}/>
                    ))}
                <Text style={styles.text_container}>{unitName}</Text>
            </View>
            <View>
                <Button text="buy it" />
            </View>
        </View>
    );
}

export default EnergyPattern;