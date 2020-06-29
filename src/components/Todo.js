import React from 'react';
import { StyleSheet, View,Text, TouchableOpacity } from 'react-native';

export const Todo = ({todo, onRemove, onOpen}) => {

    // const longPressHandler = () => {
    //     onRemove(todo.id)
    // }

    return (
        <TouchableOpacity 
            activeOpacity={0.7} 
            onPress={ () => onOpen(todo.id)}
            // onLongPress={ () => onRemove(todo.id)}
            onLongPress={onRemove.bind(null, todo.id)}
        >
            <View style={styles.todo} >
                <Text> {todo.title} </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderColor: '#eee',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10
    }
})