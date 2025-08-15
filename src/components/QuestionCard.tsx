import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AnswerOption from './AnswerOption';

const QuestionCard = () => {
    return (
        <View style={styles.questionCard}>
            <Text style={styles.question}>What is React native?</Text>

            <View style={{ gap: 20 }}>
                <AnswerOption />
                <AnswerOption />
                <AnswerOption />
                <AnswerOption />
            </View>
        </View>
    );
};

export default QuestionCard;

const styles = StyleSheet.create({
    questionCard: {
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
    question: {
        fontSize: 24,
        fontWeight: '500'
    }
});