import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AnswerOption = () => {
    return (
        <View style={styles.container}>
            <Text>AnswerOption</Text>
        </View>
    );
};

export default AnswerOption;

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 100,
        padding: 20,
        borderColor: 'lightgray'
    },
});