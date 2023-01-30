import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

export default function ColorButton({
    title,
    backgroundColor,
    textColor,
    onPress,
    style,
}) {
    return (
        <Pressable
            style={({ pressed }) => [
                style,
                styles.button,
                { backgroundColor: backgroundColor },
                pressed && styles.pressed,
            ]}
            onPress={onPress}
        >
            <Text style={[styles.text, { color: textColor }]}>{title}</Text>
        </Pressable>
    );
}
const styles = StyleSheet.create({
    button: {
        elevation: 2,
        shadowColor: "black",
        shadowOpacity: 0.15,
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 2,
        borderRadius: 4,

        marginRight: 16,
    },
    pressed: {
        opacity: 0.7,
    },
    text: {
        textAlign: "center",
        justifyContent: "center",
        paddingVertical: 4,
        paddingHorizontal: 8,
        fontSize: 16,
    },
});
