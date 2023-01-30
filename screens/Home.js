import { View, Text, StyleSheet, ScrollView, TextInput } from "react-native";
import ImageCluster from "../components/ImageCluster";
import Colors from "../constants/colors";
import ColorButton from "../components/ColorButton";

export default function Home({ navigation }) {
    const submitFormHandler = () => {
        navigation.navigate("Search");
    };
    return (
        <ScrollView style={styles.rootContainer}>
            <Text style={styles.title}>Backyard Fantasy Football</Text>
            <ImageCluster />
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    How do you win fantasy football championships? Luck? Grit?
                    Determination? Unfortunately, we cannot rely on any of those
                    for consistent fantasy numbers.
                </Text>
                <Text style={styles.text}>
                    That is where Backyard Fantasy Football comes into play. A
                    subscription to BFF will give you access to all the data and
                    analytics that lead to fantasy success. Sign up now to take
                    the next step towards winning!
                </Text>
            </View>
            <View style={styles.formContainer}>
                <Text style={styles.formTitle}>Sign Up</Text>
                <View>
                    <Text>Name</Text>
                    <TextInput style={styles.input} />
                </View>
                <View>
                    <Text>Email</Text>
                    <TextInput style={styles.input} />
                </View>
                <View>
                    <Text>Password</Text>
                    <TextInput style={styles.input} />
                </View>
                <ColorButton
                    style={styles.formButton}
                    title="Sign Up"
                    backgroundColor={Colors.navy}
                    textColor={Colors.primary}
                    onPress={submitFormHandler}
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: Colors.primary,
    },
    title: {
        fontSize: 36,
        color: Colors.navy,
        textAlign: "center",
        marginTop: 32,
    },
    textContainer: {
        marginTop: 12,
    },
    text: {
        fontSize: 20,
        color: Colors.navy,
        marginVertical: 12,
        marginHorizontal: 24,
    },
    formContainer: {
        width: "80%",
        alignSelf: "center",
        backgroundColor: Colors.gray,
        borderRadius: 8,
        padding: 8,
        marginTop: 36,
        marginBottom: 24,
    },
    formTitle: {
        fontSize: 24,
        textAlign: "center",
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    formButton: {
        marginVertical: 12,
        width: "60%",
        alignSelf: "center",
    },
});
