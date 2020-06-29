import React, {useState} from 'react';
import { StyleSheet, View, TextInput, Button, Alert } from 'react-native';

export const AddTodo = ({ onSubmit }) => {
    const [value, setValue] = useState('')


    const pressHandler = () => {
        if(value.trim()) {
            onSubmit(value)
            setValue('')
        } else {
            Alert.alert('Название дело не можеть быть пустым')
        }
        
    }

    return (
        <View style={styles.block}>
            <TextInput 
            style={styles.input}
            onChangeText={text => setValue(text)}
            value={value}
            placeholder='Введите назвнание дело'
            autoCorrect={false}
            />
            <Button  title='Добавить' onPress={pressHandler} />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        width: '70%',
        borderBottomColor: '#3949ab',
        borderStyle: 'solid',
        borderBottomWidth: 2,
        padding: 10
    },
    block: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})