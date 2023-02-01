import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

export default function DataCard({
    index,
    name,
    playerPassAttempt,
    targetShare,
    team,
    teamPassAttempt,
    season,
}) {
    let colors = [Colors.green, Colors.blue, Colors.red];

    let colorIndex = index % 3;
    return (
        <View style={[{ borderColor: colors[colorIndex] }, styles.card]}>
            <View style={styles.row}>
                <Text style={{ color: colors[colorIndex] }}>
                    Player: {name}
                </Text>
                <Text style={{ color: colors[colorIndex] }}>
                    Player Pass Attempt:
                    {playerPassAttempt}
                </Text>
            </View>
            <View style={styles.row}>
                <Text style={{ color: colors[colorIndex] }}>Team:{team}</Text>
                <Text style={{ color: colors[colorIndex] }}>
                    Team Pass Attempt: {teamPassAttempt}
                </Text>
            </View>
            <Text style={{ color: colors[colorIndex] }}>
                Target Share: {targetShare}%
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        marginVertical: 12,
        backgroundColor: Colors.dark,
        color: Colors.navy,
        borderRadius: 15,
        width: "80%",
        alignSelf: "center",
        padding: 6,
        borderWidth: 2,
        // borderColor: Colors.green,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
});
