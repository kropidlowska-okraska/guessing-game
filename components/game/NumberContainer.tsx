import { View, Text, StyleSheet, Dimensions } from "react-native";

import Colors from "../../constants/colors";

type Props = {
	children: React.ReactNode;
};

function NumberContainer({ children }: Props) {
	return (
		<View style={styles.container}>
			<Text style={styles.numberText}>{children}</Text>
		</View>
	);
}

export default NumberContainer;

const deviceWidth = Dimensions.get("screen").width;
const isSmallDevice = deviceWidth < 380;

const styles = StyleSheet.create({
	container: {
		borderWidth: 4,
		borderColor: Colors.accent500,
		padding: isSmallDevice ? 12 : 24,
		margin: isSmallDevice ? 12 : 24,
		borderRadius: 8,
		alignItems: "center",
		justifyContent: "center",
	},
	numberText: {
		color: Colors.accent500,
		fontSize: 36,
		fontFamily: "open-sans-bold",
	},
});
