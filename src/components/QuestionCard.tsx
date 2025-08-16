import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AnswerOption from './AnswerOption';
import { Question } from '../types';
import Card from './Card';

type QuestionCardProps = {
    question: Question
}

const QuestionCard = ({ question }: QuestionCardProps) => {
    useEffect(() => {

    }, [])

    return (
        <Card title={question.title}>
            <View style={{ gap: 20 }}>
                {question.options.map(option => (
                    <AnswerOption
                        key={option}
                        option={option}
                    />
                ))}
            </View>
        </Card>
    );
};

export default QuestionCard;