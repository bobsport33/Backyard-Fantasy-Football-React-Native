import { View, Image, StyleSheet } from "react-native";
import Colors from "../constants/colors";

export default function ImageCluster() {
    return (
        <View style={styles.imageContainer}>
            <Image
                style={styles.image1}
                source={require("../assets/assets/field-3.jpg")}
            />
            <Image
                style={styles.image2}
                source={require("../assets/assets/goalpost-1.jpg")}
            />
            <Image
                style={styles.image3}
                source={require("../assets/assets/pablo2.jpg")}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    imageContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 30,
    },
    image1: {
        height: 90,
        width: "50%",
        position: "relative",
        left: 70,
        borderColor: Colors.gray,
        borderWidth: 2,
    },
    image2: {
        height: 90,
        width: "50%",
        position: "relative",
        marginTop: 50,
        right: 40,
        borderColor: Colors.gray,
        borderWidth: 2,
    },
    image3: {
        height: 90,
        width: "50%",
        position: "relative",
        left: 30,
        marginTop: -20,
        borderColor: Colors.gray,
        borderWidth: 2,
    },
});
