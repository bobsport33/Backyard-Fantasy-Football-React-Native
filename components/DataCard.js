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
            <View style={styles.bigCol}>
                <Text style={{ color: colors[colorIndex] }}>
                    Player: {name}
                </Text>
                <Text style={{ color: colors[colorIndex] }}>Team:{team}</Text>
                <Text style={{ color: colors[colorIndex] }}>
                    Player Pass Attempt:
                    {playerPassAttempt}
                </Text>

                <Text style={{ color: colors[colorIndex] }}>
                    Team Pass Attempt: {teamPassAttempt}
                </Text>
            </View>
            <View
                style={[
                    { backgroundColor: colors[colorIndex] },
                    styles.smallCol,
                ]}
            >
                <Text style={styles.smallColText}>Target Share:</Text>
                <Text style={styles.smallColData}>{targetShare}%</Text>
            </View>
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
        overflow: "hidden",
        borderWidth: 2,
        flexDirection: "row",
        elevation: 2,
        shadowColor: "black",
        shadowOpacity: 0.15,
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 2,
    },
    bigCol: {
        width: "70%",
        padding: 6,
        backgroundColor: Colors.grey,
        justifyContent: "space-between",
    },
    smallCol: {
        width: "30%",
        padding: 8,
    },
    smallColText: {
        color: Colors.dark,
        fontSize: 20,
        textAlign: "center",
    },
    smallColData: {
        color: Colors.gray,
        fontSize: 30,
        textAlign: "center",
    },
});
