import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet, FlatList } from "react-native";
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
        <View style={styles.rootContainer}>
            <Text style={styles.title}>
                Results: {route.params.year} Season
            </Text>
            {route.params.week && (
                <Text style={styles.title}>Week {route.params.week}</Text>
            )}
            {data.length < 1 && <LoadingSpinner visible={spinnerVisibile} />}
            {data.length > 0 && (
                <FlatList
                    data={data}
                    renderItem={({ item, index }) => {
                        return (
                            <DataCard
                                name={item["Player Name"]}
                                playerPassAttempt={
                                    route.params.week
                                        ? item["Player-Pass Attempt"]
                                        : item["Player Pass Attempt- Season"]
                                }
                                targetShare={item["Target Share"]}
                                team={item["Team"]}
                                teamPassAttempt={
                                    route.params.week
                                        ? item["Team-Pass Attmept"]
                                        : item["Team Pass Attmept- Season"]
                                }
                                season={route.params.week ? true : false}
                            />
                        );
                    }}
                />
            )}
        </View>
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
