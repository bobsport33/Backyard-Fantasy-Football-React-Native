import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    ImageBackground,
    Image,
} from "react-native";

import Colors from "../constants/colors";
import ColorButton from "../components/ColorButton";

export default function Home({ navigation }) {
    const submitFormHandler = () => {
        navigation.navigate("Search");
    };
    return (
        <ScrollView style={styles.rootContainer}>
            <ImageBackground
                source={require("../assets/assets/field-4.jpg")}
                style={styles.backgroundImage}
            >
                <Image
                    style={styles.logo}
                    source={require("../assets/assets/logo-white.png")}
                />

                {/* <ImageCluster /> */}
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        Want to win your fantasy football championships? Then
                        you need Backyard Fantasy Football. A subscription to
                        BFF will give you access to all the data and analytics
                        that lead to fantasy success. Sign up now to take the
                        next step towards winning!
                    </Text>
                </View>
                <View style={styles.linkContainer}>
                    <Text style={styles.subtitle}>Fantasy Data</Text>
                    <ColorButton
                        title="Target Share Percentage"
                        backgroundColor={Colors.gray}
                        textColor={Colors.dark}
                        onPress={submitFormHandler}
                        borderColor={Colors.dark}
                        style={styles.formButton}
                    />
                </View>
            </ImageBackground>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "center",
    },

    logo: {
        height: 250,
        width: "70%",
        alignSelf: "center",
        marginVertical: 30,
        borderRadius: 150,
    },

    textContainer: {
        backgroundColor: Colors.gray,
        opacity: 0.7,
        width: "80%",
        alignSelf: "center",
        borderRadius: 15,
        marginBottom: 30,
        elevation: 2,
        shadowColor: "black",
        shadowOpacity: 0.15,
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 2,
    },
    text: {
        fontSize: 20,
        color: Colors.dark,
        marginVertical: 12,
        marginHorizontal: 24,
    },
    subtitle: {
        fontSize: 30,
        marginTop: 8,
        color: Colors.gray,
    },

    formButton: {
        marginVertical: 12,
        width: "60%",
    },
    linkContainer: {
        backgroundColor: Colors.dark,
        opacity: 0.7,
        width: "80%",
        alignSelf: "center",
        borderRadius: 15,
        marginBottom: 30,
        elevation: 2,
        shadowColor: "black",
        shadowOpacity: 0.15,
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 2,
        alignItems: "center",
    },
});
