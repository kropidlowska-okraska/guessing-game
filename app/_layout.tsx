import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native";

export default function RootLayout() {
    useFonts({
		"open-sans": require("../assets/fonts/OpenSans-Regular.ttf"),
		"open-sans-bold": require("../assets/fonts/OpenSans-Bold.ttf"),
	}); 

	return (
		<LinearGradient colors={["#4e0329", "#ddb52f"]} style={{ flex: 1 }}>
			<SafeAreaView style={{ flex: 1 }}>
				<Stack
					screenOptions={{
						headerShown: false,
						contentStyle: { backgroundColor: "transparent" },
					}}
				>
					<Stack.Screen name="index" />
					<Stack.Screen name="game" />
					<Stack.Screen name="game-over" />
				</Stack>
			</SafeAreaView>
		</LinearGradient>
	);
}
