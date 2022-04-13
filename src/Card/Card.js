import { SafeAreaView, View, Text, Image } from 'react-native';
import React from 'react';
import styles from './Card.style';

const Card = ({ product }) => {
    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.imgCard}>
                <Image style={styles.image} source={{ uri: product.imgURL }} />
            </View>
            <View style={styles.productCard}>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.price}>{product.price}</Text>
                <Text style={styles.inStock}>{product.inStock === true ? '' : 'Stokta Yok'}</Text>
            </View>
        </SafeAreaView>
    )
};

export default Card;