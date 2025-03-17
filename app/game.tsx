import { View, Text, StyleSheet, Alert } from "react-native";
import Title from "../components/ui/Title";
import { useEffect, useState } from "react";
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
	const updateRoundsNumber = useStore((state) => state.updateRoundsNumber);
	const roundsNumber = useStore((state) => state.roundsNumber);
	const initialGuess = generateRandomBetween(1, 100, chosenNumber);
	const [currentGuess, setCurrentGuess] = useState(initialGuess);

	useEffect(() => {
		if (currentGuess === chosenNumber) {
			router.push("/game-over");
		}
	}, [currentGuess, chosenNumber]);

	useEffect(() => {
		minBoundary = 1;
		maxBoundary = 100;
	  }, []);

	function nextGuessHandler(direction: "lower" | "greater") {
		if (
			(direction === "lower" && currentGuess < chosenNumber) ||
			(direction === "greater" && currentGuess > chosenNumber)
		) {
			Alert.alert("Don't lie!", "You know that this is wrong...", [
				{ text: "Sorry!", style: "cancel" },
			]);
			return;
		}

		if (direction === "lower") {
			maxBoundary = currentGuess;
		} else {
			minBoundary = currentGuess + 1;
		}

		const newRndNumber = generateRandomBetween(
			minBoundary,
			maxBoundary,
			currentGuess,
		);
		setCurrentGuess(newRndNumber);
	}

	return (
		<View style={styles.screen}>
			<Title>Opponent's Guess</Title>
			<NumberContainer>{currentGuess}</NumberContainer>
			<View>
				<Text>Higher or lower?</Text>
				<View style={styles.buttonsConatiner}>
					<PrimaryButton
						onPress={() => {
							nextGuessHandler("lower");
							updateRoundsNumber();
						}}
					>
						<Ionicons name="remove" size={24} color="white" />
					</PrimaryButton>
					<PrimaryButton
						onPress={() => {
							nextGuessHandler("greater");
							updateRoundsNumber();
						}}
					>
						<Ionicons name="add" size={24} color="white" />
					</PrimaryButton>
				</View>
			</View>
			<View>
				<Text>{roundsNumber} ROUND</Text>
			</View>
		</View>
	);
}

export default GameScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 24,
		alignItems: "center",
	},
	buttonsConatiner: {
		flexDirection: "row",
		justifyContent: "space-between",
		width: "100%",
		paddingHorizontal: 15,
	},
});
