import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";

import Colors from "./constants/colors";

import Home from "./screens/Home";
import Signup from "./screens/Signup";
import Search from "./screens/Search";
import SearchResults from "./screens/SearchResults";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar style="light" />
            <Stack.Navigator
                screenOptions={{
                    headerTintColor: Colors.gray,
                    headerStyle: {
                        backgroundColor: Colors.dark,
                    },
                }}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="Search" component={Search} />
                <Stack.Screen
                    name="SearchResults"
                    component={SearchResults}
                    options={{
                        title: "Search Results",
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
