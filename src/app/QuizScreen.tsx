import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Pressable } from 'react-native';
import QuestionCard from '../components/QuestionCard';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import Card from '../components/Card';
import CustomButton from '../components/CustomButton';
import { useQuizContext } from '../providers/QuizProvider';

const QuizScreen = () => {
    const { question, questionIndex, onNext, score, totalQuestions, bestScore } = useQuizContext()
    const [time, setTime] = useState(20)

    useEffect(() => {
        setTime(20)

        // setInterval is an example where we create something that must be cleaned afterwards
        // therefore we put it in a variable, then use clearInterval
        const interval = setInterval(() => {
            setTime(t => t - 1)
        }, 1000)

        // This is the cleanup function
        return () => {
            clearInterval(interval)
        }
    }, [question])

    useEffect(() => {
        if (time <= 0) {
            onNext()
        }
    }, [time])

    return (
        <SafeAreaView style={styles.page}>
            <View style={styles.container}>
                {/* Header */}
                <View>
                    <Text style={styles.title}>Question {questionIndex + 1}/{totalQuestions}</Text>
                </View>

                {/* Body */}
                {question ? (<View>
                    <QuestionCard question={question} />
                    <Text style={styles.time}>{time} seconds</Text>
                </View>) : (
                    <Card title='Well done'>
                        <Text>Correct answers: {score}/{totalQuestions}</Text>
                        <Text>Best score: {bestScore}</Text>
                    </Card>
                )}

                {/* Footer */}
                <CustomButton
                    title='Next'
                    rightIcon={
                        <FontAwesome6
                            name='arrow-right-long'
                            size={16}
                            color='white'
                        />
                    }
                    onPress={onNext}
                />
            </View>
        </SafeAreaView>
    );
};

export default QuizScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        padding: 20,
    },
    page: {
        flex: 1,
        backgroundColor: '#FDFEF4',
    },
    title: {
        textAlign: 'center',
        color: '#005055'
    },
    time: {
        textAlign: 'center',
        marginTop: 15,
        color: '#005055',
        fontWeight: 'bold'
    }
});