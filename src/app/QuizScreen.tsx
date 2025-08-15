import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Pressable } from 'react-native';
import QuestionCard from '../components/QuestionCard';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import questions from '../questions';
import Card from '../components/Card';
import CustomButton from '../components/CustomButton';

const question = questions[0]

const QuizScreen = () => {
    return (
        <SafeAreaView style={styles.page}>
            <View style={styles.container}>
                {/* Header */}
                <View>
                    <Text style={styles.title}>Question 1/5</Text>
                </View>

                {/* Body */}
                {question ? (<View>
                    <QuestionCard question={question} />
                    <Text style={styles.time}>20 seconds</Text>
                </View>) : (
                    <Card title='Well done'>
                        <Text>Correct answers: 3/5</Text>
                        <Text>Best score: 10</Text>
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
                    onPress={() => console.warn('custom button pressed')}
                    onLongPress={() => console.warn('custom longp ressed')}
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