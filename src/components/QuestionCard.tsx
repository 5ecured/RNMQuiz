import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AnswerOption from './AnswerOption';
import { Question } from '../types';

type QuestionCardProps = {
    question: Question
}

const QuestionCard = ({ question }: QuestionCardProps) => {
    const selectedOption = question.options[0]

    const onOptionSelected = (option: string) => {
        console.warn(option)
    }

    return (
        <View style={styles.questionCard}>
            <Text style={styles.question}>
                {question.title}
            </Text>
            <View style={{ gap: 20 }}>
                {question.options.map(option => (
                    <AnswerOption
                        key={option}
                        option={option}
                        isSelected={option === selectedOption}
                        onPress={() => onOptionSelected(option)}
                    />
                ))}
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