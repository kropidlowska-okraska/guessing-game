import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";

export default function Game() {
	return (
		<View style={styles.container}>
			<TextInput />
			<Pressable>
				<Text>Submit</Text>
			</Pressable>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
