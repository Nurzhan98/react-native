import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const NavBar = props => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        height: 70,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#3949ab',
        paddingBottom: 10,
    },
    text: {
        color: '#fff',
        fontSize: 20,

    }
});