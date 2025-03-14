import { View, Text, StyleSheet, Alert } from "react-native";
import Title from "../components/ui/Title";
import { useState } from "react";
import { useStore } from "../store";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

function generateRandomBetween(min: number, max: number, exclude: number) {
	const rndNum = Math.floor(Math.random() * (max - min)) + min;

	if (rndNum === exclude) {
		return generateRandomBetween(min, max, exclude);
	}
	return rndNum;
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen() {
	const chosenNumber = useStore((state) => state.chosenNumber);
	const initialState = generateRandomBetween(1, 100, chosenNumber);
	const [currentGuess, setCurrentGuess] = useState(initialState);

	const nextGuessHandler = (direction: "lower" | "greater") => {
		if (direction === "lower") {
			maxBoundary = currentGuess;
		} else {
			minBoundary = currentGuess + 1;
		}

		const newGuess = generateRandomBetween(
			minBoundary,
			maxBoundary,
			currentGuess,
		);

		if (newGuess === chosenNumber) {
			router.push("/game-over");
		}

		setCurrentGuess(newGuess);
	};

	return (
		<View style={styles.screen}>
			<Title>Opponent's Guess</Title>
			<NumberContainer>{currentGuess}</NumberContainer>
			<View>
				<Text>Higher or lower?</Text>
				<View style={styles.buttonsConatiner}>
					<PrimaryButton onPress={() => nextGuessHandler("lower")}>
						<Ionicons name="remove" size={24} color="white" />
					</PrimaryButton>
					<PrimaryButton onPress={() => nextGuessHandler("greater")}>
						<Ionicons name="add" size={24} color="white" />
					</PrimaryButton>
				</View>
			</View>
			{/* <View>LOG ROUNDS</View> */}
		</View>
	);
}

export default GameScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 24,
	},
	buttonsConatiner: {
		flexDirection: "row",
		justifyContent: "space-between",
		width: "100%",
		paddingHorizontal: 15,
	},
});
