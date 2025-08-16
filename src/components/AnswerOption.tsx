import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';
import { useQuizContext } from '../providers/QuizProvider';

type AnswerOptionProps = {
    option: string,
}

const AnswerOption = ({ option }: AnswerOptionProps) => {
    const { selectedOption, setSelectedOption } = useQuizContext()

    const isSelected = selectedOption === option

    return (
        <Pressable
            style={[styles.container, { backgroundColor: isSelected ? '#E1F396' : 'white' }]}
            onPress={() => setSelectedOption(option)}
        >
            <Text>{option}</Text>
        </Pressable>
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