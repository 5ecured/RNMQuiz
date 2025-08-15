import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Pressable } from 'react-native';
import QuestionCard from '../components/QuestionCard';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import questions from '../questions';

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
                <View>
                    <QuestionCard question={question} />
                    <Text style={styles.time}>20 seconds</Text>
                </View>

                {/* Footer */}
                <Pressable style={styles.button} onPress={() => console.warn('pressed')}>
                    <Text style={styles.buttonText}>Next</Text>
                    <FontAwesome6
                        name='arrow-right-long'
                        size={16}
                        color='white'
                        style={styles.buttonIcon}
                    />
                </Pressable>
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
    },
    button: {
        backgroundColor: '#005055',
        padding: 20,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: 500,
        fontSize: 16,
        letterSpacing: 2
    },
    buttonIcon: {
        position: 'absolute',
        right: 20
    }
});