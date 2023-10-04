import { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import ColorButton from "../components/ColorButton";
import Colors from "../constants/colors";

export default function Search({ navigation }) {
    const submitHandler = () => {
        const year = value;
        const week = valueWeek;
        navigation.navigate("SearchResults", { year: year, week: week });
    };

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([]);

    useEffect(() => {
        const year = new Date().getFullYear();
        const yearsArray = [];

        for (let i = year; i >= 2000; i--) {
            yearsArray.push({ label: `${i}`, value: i });
        }

        // Set the state with the created array of years in reverse order
        setItems(yearsArray);
    }, []);

    const [openWeek, setOpenWeek] = useState(false);
    const [valueWeek, setValueWeek] = useState(null);
    const [itemsWeek, setItemsWeek] = useState([
        { label: "Week 1", value: 1 },
        { label: "Week 2", value: 2 },
        { label: "Week 3", value: 3 },
        { label: "Week 4", value: 4 },
        { label: "Week 5", value: 5 },
        { label: "Week 6", value: 6 },
        { label: "Week 7", value: 7 },
        { label: "Week 8", value: 8 },
        { label: "Week 9", value: 9 },
        { label: "Week 10", value: 10 },
        { label: "Week 11", value: 11 },
        { label: "Week 12", value: 12 },
        { label: "Week 13", value: 13 },
        { label: "Week 14", value: 14 },
        { label: "Week 15", value: 15 },
        { label: "Week 16", value: 16 },
        { label: "Week 17", value: 17 },
    ]);
    return (
        <View style={styles.rootContainer}>
            <Text style={styles.title}>Search Target Share Data</Text>
            <Text style={styles.description}>
                Use the dropdown menu below to get the target share data for a
                particular season, or to filter to a specific week in that
                season.
            </Text>
            <View style={styles.selectorContainer}>
                <View style={styles.selectorRow}>
                    <Text style={styles.selectorText}>Season:</Text>
                    <View style={styles.pickerContainer}>
                        <DropDownPicker
                            style={styles.picker}
                            theme="DARK"
                            zIndex={3000}
                            zIndexInverse={1000}
                            open={open}
                            value={value}
                            items={items}
                            setOpen={setOpen}
                            setValue={setValue}
                            setItems={setItems}
                        />
                    </View>
                </View>
                {value && (
                    <View style={styles.selectorRow}>
                        <Text style={styles.selectorText}>Week:</Text>
                        <View style={styles.pickerContainer}>
                            <DropDownPicker
                                zIndex={2000}
                                theme="DARK"
                                zIndexInverse={2000}
                                style={styles.picker}
                                open={openWeek}
                                value={valueWeek}
                                items={itemsWeek}
                                setOpen={setOpenWeek}
                                setValue={setValueWeek}
                                setItems={setItemsWeek}
                            />
                        </View>
                    </View>
                )}
                {value && (
                    <ColorButton
                        style={styles.submitButton}
                        title="Submit"
                        backgroundColor={Colors.dark}
                        textColor={Colors.green}
                        borderColor={Colors.green}
                        onPress={submitHandler}
                    />
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        view: 1,
        // paddingHorizontal: 15,
    },
    title: {
        fontSize: 36,
        textAlign: "center",
        marginTop: 12,
        paddingHorizontal: 15,
    },
    description: {
        fontSize: 16,
        textAlign: "center",
        marginTop: 12,
        paddingHorizontal: 15,
    },
    selectorContainer: {
        backgroundColor: Colors.dark,
        marginHorizontal: 15,
        marginTop: 20,
        borderRadius: 15,
        borderColor: Colors.green,
        borderWidth: 2,
        paddingHorizontal: 10,
        paddingVertical: 30,
    },
    selectorText: {
        color: Colors.green,
        fontSize: 16,
    },
    selectorRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 20,
    },
    pickerContainer: {
        width: "60%",
    },
    picker: {
        alignSelf: "center",
        // backgroundColor: Colors.dark,
        // color: Colors.green,
        // borderColor: Colors.green,
    },
    submitButton: {
        fontSize: 16,
        width: "40%",
        alignSelf: "center",
        marginVertical: 24,
    },
});
