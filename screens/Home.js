import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TextInput,
    ImageBackground,
    Image,
} from "react-native";
import ImageCluster from "../components/ImageCluster";
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

                <View style={styles.formContainer}>
                    <Text style={styles.formTitle}>Sign Up</Text>
                    <View>
                        <Text style={styles.formText}>Name</Text>
                        <TextInput style={styles.input} />
                    </View>
                    <View>
                        <Text style={styles.formText}>Email</Text>
                        <TextInput style={styles.input} />
                    </View>
                    <View>
                        <Text style={styles.formText}>Password</Text>
                        <TextInput style={styles.input} />
                    </View>
                    <ColorButton
                        style={styles.formButton}
                        title="Sign Up"
                        backgroundColor={Colors.green}
                        borderColor={Colors.green}
                        textColor={Colors.dark}
                        onPress={submitFormHandler}
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
    },
    text: {
        fontSize: 20,
        color: Colors.dark,
        marginVertical: 12,
        marginHorizontal: 24,
    },
    formContainer: {
        width: "80%",
        alignSelf: "center",
        backgroundColor: Colors.dark,
        borderRadius: 8,
        padding: 8,
        marginTop: 36,
        marginBottom: 24,
    },
    formTitle: {
        fontSize: 24,
        textAlign: "center",
        color: Colors.blue,
    },
    formText: {
        fontSize: 16,
        color: Colors.blue,
        marginLeft: 12,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        color: Colors.green,
        borderColor: Colors.green,
    },
    formButton: {
        marginVertical: 12,
        width: "60%",
        alignSelf: "center",
    },
});
