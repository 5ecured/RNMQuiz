import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type CardProps = {
    title: string,
    children: React.ReactNode
}

const Card = ({ title, children }: CardProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            {children}
        </View>
    );
};

export default Card;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        paddingVertical: 40,
        gap: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0, height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    title: {
        fontSize: 24,
        fontWeight: '500'
    }
});