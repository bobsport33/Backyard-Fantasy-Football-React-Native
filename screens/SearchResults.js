import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import LoadingSpinner from "../components/LoadingSpinner";
import DataCard from "../components/DataCard";
import TargetShareData from "../store/TargetShareData";
import Colors from "../constants/colors";

export default function SearchResults({ route, navigation }) {
    const [spinnerVisibile, setSpinnerVisible] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        (async () => {
            if (!data[0]) {
                const result = await TargetShareData(
                    route.params.year,
                    route.params.week
                );
                setData(result);
                setSpinnerVisible(false);
                // console.log("result", result);
            }
        })();
    }, [data, TargetShareData]);

    // console.log("data", data);
    return (
        <ScrollView style={styles.rootContainer}>
            <Text style={styles.title}>
                Results: {route.params.year} Season
            </Text>
            {route.params.week && (
                <Text style={styles.title}>Week {route.params.week}</Text>
            )}
            {data.length < 1 && <LoadingSpinner visible={spinnerVisibile} />}
            {data.length > 0 && (
                <>
                    {data.map((player) => {
                        let passAtt;
                        let teamAtt;
                        let season;
                        if (route.params.week) {
                            passAtt = player["Player-Pass Attempt"];
                            teamAtt = player["Team-Pass Attmept"];
                            season = false;
                        } else {
                            passAtt = player["Player Pass Attempt- Season"];
                            teamAtt = player["Team Pass Attmept- Season"];
                            season = true;
                        }

                        return (
                            <DataCard
                                name={player["Player Name"]}
                                playerPassAttempt={passAtt}
                                targetShare={player["Target Share"]}
                                team={player["Team"]}
                                teamPassAttempt={teamAtt}
                                season={season}
                            />
                        );
                    })}
                </>
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        backgroundColor: Colors.primary,
    },
    title: {
        color: Colors.gray,
        textAlign: "center",
        fontSize: 30,
    },
});
