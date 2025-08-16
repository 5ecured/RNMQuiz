import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AnswerOption from './AnswerOption';
import { Question } from '../types';
import Card from './Card';
import { useQuizContext } from '../providers/QuizProvider';

type QuestionCardProps = {
    question: Question
}

const QuestionCard = ({ question }: QuestionCardProps) => {
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