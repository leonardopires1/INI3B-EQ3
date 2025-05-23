import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';

export default function CadastrarMoradia() {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#1E7EFF" />
            <View style={styles.header} />
            <View style={styles.card}>
                <Text style={styles.title}>Cadastrar Moradia</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                    style={styles.input}
                    placeholder="nome da república"
                    placeholderTextColor="#999"
                />
                    <TextInput
                        style={styles.input}
                        placeholder="CEP"
                        placeholderTextColor="#999"
                    />
                </View>

                <TouchableOpacity style={styles.button} disabled={true}>
                    <Text style={styles.buttonText}>criar moradia</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E7EFF',
        justifyContent: 'flex-start',
    },
    header: {
        height: 250,
        backgroundColor: '#1E7EFF',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    card: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 30,
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1E7EFF',
        marginBottom: 40,
    },
    input: {
        width: '100%',
        backgroundColor: '#eee',
        borderRadius: 8,
        padding: 15,
        marginBottom: 20,
        color: '#333',
    },
    button: {
        width: '100%',
        backgroundColor: '#dcdcdc',
        borderRadius: 12,
        paddingVertical: 15,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    inputContainer: {
        width: '100%',
        marginBottom: 250,
    },
});
