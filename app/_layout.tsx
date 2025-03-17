import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native";
import { useCallback, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

// Set the animation options. This is optional.
SplashScreen.setOptions({
  duration: 1000,
  fade: true,
});



export default function RootLayout() {
    // useFonts({
	// 	"open-sans": require("../assets/fonts/OpenSans-Regular.ttf"),
	// 	"open-sans-bold": require("../assets/fonts/OpenSans-Bold.ttf"),
	// }); 


	const [appIsReady, setAppIsReady] = useState(false);
	useEffect(() => {
		async function prepare() {
		  try {
			// Pre-load fonts, make any API calls you need to do here
			await Font.loadAsync(Entypo.font);
			// Artificially delay for two seconds to simulate a slow loading
			// experience. Remove this if you copy and paste the code!
			await new Promise(resolve => setTimeout(resolve, 1000));
		  } catch (e) {
			console.warn(e);
		  } finally {
			// Tell the application to render
			setAppIsReady(true);
		  }
		}
	
		prepare();
	  }, []);

	  const onLayoutRootView = useCallback(() => {
		if (appIsReady) {
		  // This tells the splash screen to hide immediately! If we call this after
		  // `setAppIsReady`, then we may see a blank screen while the app is
		  // loading its initial state and rendering its first pixels. So instead,
		  // we hide the splash screen once we know the root view has already
		  // performed layout.
		  console.log("Hiding splash screen");
		  SplashScreen.hide();
		}
	  }, [appIsReady]);
	
	  if (!appIsReady) {
		return null;
	  }
	

	return (
		<LinearGradient colors={["#4e0329", "#ddb52f"]} style={{ flex: 1 }}>
			<SafeAreaView onLayout={onLayoutRootView} style={{ flex: 1 }}>
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
