import React from "react";
import Colors from "../constants/colors";

import { StyleSheet, View, Text, TextInput, Button } from "react-native";

export default function Login() {
    const emailInputHandler = () => {};

    const passwordInputHandler = () => {};

    return (
        <View style={styles.formContainer}>
            <Text style={styles.formTitle}>Sign Up</Text>
            <View>
                <Text style={styles.formText}>Name</Text>
                <TextInput style={styles.input} />
            </View>
            <View>
                <Text style={styles.formText}>Email</Text>
                <TextInput style={styles.input} />
            </View>
            <View>
                <Text style={styles.formText}>Password</Text>
                <TextInput style={styles.input} />
            </View>
            <ColorButton
                style={styles.formButton}
                title="Sign Up"
                backgroundColor={Colors.green}
                borderColor={Colors.green}
                textColor={Colors.dark}
                onPress={submitFormHandler}
            />
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
