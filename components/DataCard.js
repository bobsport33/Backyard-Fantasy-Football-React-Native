import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

export default function DataCard({
    name,
    playerPassAttempt,
    targetShare,
    team,
    teamPassAttempt,
    season,
}) {
    return (
        <View style={styles.card}>
            <View style={styles.row}>
                <Text>Player: {name}</Text>
                <Text>
                    Player Pass Attempt:
                    {playerPassAttempt}
                </Text>
            </View>
            <View style={styles.row}>
                <Text>Team:{team}</Text>
                <Text>Team Pass Attempt: {teamPassAttempt}</Text>
            </View>
            <Text>Target Share: {targetShare}%</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        marginVertical: 12,
        backgroundColor: Colors.gray,
        color: Colors.navy,
        borderRadius: 15,
        width: "80%",
        alignSelf: "center",
        padding: 6,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
});
