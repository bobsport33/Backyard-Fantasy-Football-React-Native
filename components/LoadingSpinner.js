import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AnimatedLoader from "react-native-animated-loader";

export default function LoadingSpinner(props) {
    return (
        <View>
            <AnimatedLoader
                visible={props.visible}
                overlayColor="rgba(255,255,255,0.75)"
                animationStyle={styles.lottie}
                speed={1}
            >
                <Text>Doing something...</Text>
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
