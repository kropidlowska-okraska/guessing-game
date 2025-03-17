import {
	StyleSheet,
	View,
	TextInput,
	ImageBackground,
	Alert,
	useWindowDimensions,
} from "react-native";
import { useRouter } from "expo-router";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/colors";
import { useStore } from "../store";

const isValidNumber = (number: string) => {
	const chosenNumber = Number.parseInt(number);
	return !Number.isNaN(chosenNumber) && chosenNumber >= 1 && chosenNumber <= 99;
};

export default function App() {
	const router = useRouter();
	const [number, setNumber] = useState("");
	const updateChosenNumber = useStore((state) => state.updateChosenNumber);
	const { height } = useWindowDimensions();

	const onConfirm = () => {
		if (!isValidNumber(number)) {
			Alert.alert("Invalid number", "Number has to be between 1 and 99", [
				{ text: "Okay", style: "destructive", onPress: () => setNumber("") },
			]);
			return;
		}
		updateChosenNumber(Number.parseInt(number));
		router.navigate("/game");
	};

	const marginTopDistance = height < 600 ? 20 : 100;

	return (
		<ImageBackground
			source={require("../assets/images/background.png")}
			style={styles.backgroundImage}
			resizeMode="cover"
			imageStyle={{ opacity: 0.15 }}
		>
			<View style={[styles.inputContainer, { margin: marginTopDistance }]}>
				<TextInput
					style={styles.numberInput}
					maxLength={2}
					keyboardType="number-pad"
					value={number}
					onChangeText={(text) => setNumber(text)}
				/>
				<View style={styles.buttonsConatiner}>
					<PrimaryButton onPress={() => setNumber("")}>Reset</PrimaryButton>
					<PrimaryButton onPress={onConfirm}>Confirm</PrimaryButton>
				</View>
			</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	backgroundImage: {
		flex: 1,
		width: "100%",
	},
	inputContainer: {
		justifyContent: "center",
		alignItems: "center",
		marginHorizontal: 24,
		padding: 16,
		backgroundColor: Colors.primary800,
		borderRadius: 8,
		elevation: 4,
		shadowColor: "black",
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 6,
		shadowOpacity: 0.25,
	},
	numberInput: {
		height: 50,
		width: 50,
		fontSize: 32,
		borderBottomColor: "#ddb52f",
		borderBottomWidth: 2,
		color: "#ddb52f",
		marginVertical: 8,
		fontWeight: "bold",
		textAlign: "center",
	},
	buttonsConatiner: {
		flexDirection: "row",
		justifyContent: "space-between",
		width: "100%",
		paddingHorizontal: 15,
	},
});
