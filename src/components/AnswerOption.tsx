import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

type AnswerOptionProps = {
    option: string,
    isSelected?: boolean,
    onPress: () => void
}

const AnswerOption = ({ option, isSelected, onPress }: AnswerOptionProps) => {
    return (
        <Pressable
            style={[styles.container, { backgroundColor: isSelected ? '#E1F396' : 'white' }]}
            onPress={onPress}
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