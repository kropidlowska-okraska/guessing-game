import { View, Text, StyleSheet, Pressable } from "react-native";

type Props = {
	children: React.ReactNode;
	onPress: () => void;
};

function PrimaryButton({ children, onPress }: Props) {
	return (
		<View style={styles.buttonOuterContainer}>
			<Pressable
				style={({ pressed }) => [
					styles.buttonInnerContainer,
					pressed && styles.pressed,
				]}
				onPress={onPress}
				android_ripple={{ color: "#640233" }}
			>
				<Text style={styles.buttonText}>{children}</Text>
			</Pressable>
		</View>
	);
}

export default PrimaryButton;

const styles = StyleSheet.create({
	buttonOuterContainer: {
		borderRadius: 28,
		margin: 4,
		overflow: "hidden",
        flex: 1,
	},
	buttonInnerContainer: {
		backgroundColor: "#72063c",
		paddingVertical: 8,
		paddingHorizontal: 16,
		elevation: 2,
	},
	buttonText: {
		color: "white",
		textAlign: "center",
	},
	pressed: {
		opacity: 0.75,
	},
});
