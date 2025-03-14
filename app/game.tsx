import { View, Text, StyleSheet } from "react-native";
import Title from "../components/ui/Title";
import { useState } from "react";
import { useStore } from "../store";
import NumberContainer from "../components/game/NumberContainer";

function generateRandomBetween(min: number, max: number, exclude: number) {
	const rndNum = Math.floor(Math.random() * (max - min)) + min;

	if (rndNum === exclude) {
		return generateRandomBetween(min, max, exclude);
	}
	return rndNum;
}

function GameScreen() {
	const chosenNumber = useStore((state) => state.chosenNumber);
	const initialState = generateRandomBetween(1, 100, chosenNumber);
	const [currentGuess, setCurrentGuess] = useState(initialState);

	return (
		<View style={styles.screen}>
			<Title>Opponent's Guess</Title>
			<NumberContainer>{currentGuess}</NumberContainer>
			<View>
				<Text>Higher or lower?</Text>
				{/* + - */}
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
});
