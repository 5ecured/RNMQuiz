import React from 'react';
import { View, Text, StyleSheet, Pressable, PressableProps } from 'react-native';

type CustomButtonProps = {
    title: string,
    rightIcon?: React.ReactNode,
} & PressableProps //so customerbutton also extends/inherits the props of Pressable

// } & ComponentProps<typeof Pressable>  ===> this does the same thing as above,
// but not tied to Pressable, can be any component

const CustomButton = ({ title, rightIcon, ...pressableProps }: CustomButtonProps) => {
    return (
        <Pressable
            style={styles.button}
            // onPress={pressableProps.onPress}
            // onLongPress={pressableProps.onLongPress}

            // these two props above can be simplified to below, plus everytime the parent
            // passes a prop to CustomButton, you wont have to add it here manually, like we did
            // to the two props above
            {...pressableProps}
        >
            <Text style={styles.buttonText}>{title}</Text>

            <View style={styles.rightIcon}>
                {rightIcon}
            </View>
        </Pressable>
    );
};

export default CustomButton;

const styles = StyleSheet.create({
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
    rightIcon: {
        position: 'absolute',
        right: 20
    }
});