import { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import AnimatedLoader from "react-native-animated-loader";

export default function LoadingSpinner(props) {
    const [spinnerTextIndex, setSpinnerTextIndex] = useState(0);

    const text = ["Downloading All Plays", "Watching Film", "Calculating Data"];

    useEffect(() => {
        setTimeout(() => {
            if (spinnerTextIndex < text.length) {
                let index = spinnerTextIndex;
                setSpinnerTextIndex(index + 1);
            } else {
                let index = 0;
                setSpinnerTextIndex(index);
            }
        }, 5000);
    }, [spinnerTextIndex, text.length]);

    return (
        <View>
            <AnimatedLoader
                visible={props.visible}
                overlayColor="rgba(255,255,255,0.75)"
                animationStyle={styles.lottie}
                source={require("../assets/assets/lf30_l8csvun7.json")}
                speed={1}
            >
                <Text>{text[spinnerTextIndex]}</Text>
            </AnimatedLoader>
        </View>
    );
}

const styles = StyleSheet.create({
    lottie: {
        width: 100,
        height: 100,
    },
});
