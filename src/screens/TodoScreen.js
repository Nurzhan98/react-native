import React from 'react';
import { StyleSheet,View, Text, Button } from 'react-native';

export const TodoSrcreen = ({goBack, todo}) => {
    return (
        <View style={{padding: 20}}>
            <Text>{todo.title}</Text>
            <Button title='Назад' onPress={goBack} />
        </View>
    )
}

const styles = StyleSheet.create({
    
})