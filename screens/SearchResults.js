import React from "react";
import { View, Text } from "react-native";
import LoadingSpinner from "../components/LoadingSpinner";

import TargetShareData from "../store/TargetShareData";

export default function SearchResults({ route, navigation }) {
    let data;

    data = TargetShareData(route.params.year, route.params.week);
    console.log(data);
    return (
        <View>
            <Text>Search Results</Text>
            {!data && <LoadingSpinner />}
            {data && <Text>Data Loaded</Text>}
        </View>
    );
}
