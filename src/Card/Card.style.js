import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e0e0e0',
        margin: 10,
        padding: 10,
        borderRadius: 10,
    },
    productCard: {
        padding: 5
    },
    image: {
        height: Dimensions.get('window').height / 4,
        width: '100%',
        resizeMode: 'contain',
    },
    title: {
        fontWeight: '700',
        fontSize: 18,
    },

    imgCard: {
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 10
    },
    inStock: {
        color: 'red',
        marginTop: 3,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 18,
    },
    price: {
        marginTop: 5,
        color: '#333333',
        fontWeight: 'bold',
        fontSize: 17,
    },
});