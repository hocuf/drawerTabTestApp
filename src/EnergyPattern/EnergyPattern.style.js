import { StyleSheet, Dimensions } from 'react-native';


export default StyleSheet.create({
    normal_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        borderWidth: 1,
        backgroundColor: 'white',
        width: 300,
        borderRadius: 19,
        height: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 69,
    },
    image_container: {
        height: Dimensions.get('window').height/3,
        width: Dimensions.get('window').width/2,
        margin: 3,
    },
    text_container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    button_cont: {
        margin: 75,
    },
});