import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AnswerOption from './AnswerOption';
import { Question } from '../types';
import Card from './Card';

type QuestionCardProps = {
    question: Question
}

const QuestionCard = ({ question }: QuestionCardProps) => {
    const selectedOption = question.options[0]

    const onOptionSelected = (option: string) => {
        console.warn(option)
    }

    return (
        <Card title={question.title}>
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
        </Card>
    );
};

export default QuestionCard;