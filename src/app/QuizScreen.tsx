import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import QuestionCard from '../components/QuestionCard';

const QuizScreen = () => {
    return (
        <View style={styles.container}>
            <QuestionCard />
        </View>
    );
};

export default QuizScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FDFEF4',
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
});