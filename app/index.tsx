import { StyleSheet, View, TextInput, ImageBackground } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

export default function App() {
	return (
		<ImageBackground source={require("../assets/images/background.png")} style={styles.backgroundImage} resizeMode="cover" imageStyle={{ opacity: 0.15 }}>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.numberInput}
					maxLength={2}
					keyboardType="number-pad"
				/>
				<View style={styles.buttonsConatiner}>
					<PrimaryButton>Reset</PrimaryButton>
					<PrimaryButton>Confirm</PrimaryButton>
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
		alignItems: "center",
		marginTop: 100,
		marginHorizontal: 24,
		padding: 16,
		backgroundColor: "#3b021f",
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
