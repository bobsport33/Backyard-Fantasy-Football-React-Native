import React from "react";
import Colors from "../constants/colors";

import { StyleSheet, View, Text, TextInput, Button } from "react-native";

export default function Login() {
    const emailInputHandler = () => {};

    const passwordInputHandler = () => {};

    return (
        <View style={styles.rootContainer}>
            <Text style={styles.title}>Backyard Fantasy Football</Text>
            <View style={styles.formContainer}>
                <View>
                    <Text>Email</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={emailInputHandler}
                        placeholder="Email Address"
                    />
                </View>
                <View>
                    <Text>Password</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={passwordInputHandler}
                        placeholder="Password"
                    />
                </View>
                <Button title="login" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: Colors.navy,
        alignItems: "center",
    },
    title: {
        color: Colors.gray,
        fontSize: 36,
        textAlign: "center",
        marginTop: 64,
    },
    formContainer: {
        width: "80%",
        backgroundColor: Colors.gray,
        borderRadius: 8,
        padding: 8,
        marginTop: 36,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});
