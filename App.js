import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Button, StyleSheet } from "react-native";
import ColorButton from "./components/ColorButton";
import Colors from "./constants/colors";

import Home from "./screens/Home";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Search from "./screens/Search";
import SearchResults from "./screens/SearchResults";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerTintColor: Colors.gray,
                    headerStyle: {
                        backgroundColor: Colors.navy,
                    },
                    statusBar: {
                        backgroundColor: "#fff",
                    },
                }}
            >
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={({ navigation }) => ({
                        headerRight: () => (
                            <ColorButton
                                onPress={() => navigation.navigate("Login")}
                                title="Login"
                                textColor={Colors.navy}
                                backgroundColor={Colors.gray}
                            />
                        ),
                    })}
                />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="Search" component={Search} />
                <Stack.Screen name="SearchResults" component={SearchResults} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
