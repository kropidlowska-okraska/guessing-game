import { Text, StyleSheet, Platform } from "react-native";
import Colors from "../../constants/colors";

type Props = {
	children: React.ReactNode;
};

function Title({ children }: Props) {
	return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
	title: {
		fontFamily: 'open-sans-bold',
		fontSize: 24,
		color: Colors.accent500,
		textAlign: "center",
		borderWidth: Platform.OS === 'android' ? 3 : 0,
		borderColor: Colors.accent500,
		padding: 12,
		maxWidth: '80%',
		width: 300
	},
});
