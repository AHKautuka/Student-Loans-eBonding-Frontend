import { Stack } from "expo-router";
import "../global.css";
import { useEffect, useState } from "react";
import { claim } from "@/dtos/authentication";
import AuthenticationContext from "@/contexts/AuthenticationContext";
import { getClaims } from "@/utils/handleJWT";
import Logo from "@/components/Logo";
import configureInterceptor from "@/utils/httpInterceptors";

configureInterceptor();

export default function RootLayout() {
	const [claims, setClaims] = useState<claim[]>([]);
	
	useEffect(() => {
		onRerender();
	}, []);
	
	async function onRerender() {
		setClaims(await getClaims());
	}
	
	return (
		<AuthenticationContext.Provider value={{claims, update: setClaims}}>
			<Stack screenOptions={{
			headerStyle: { height: 76 }, // Ignore error (does not seem to appear when ran)
			headerTitle: "",
			headerLeft: () => <Logo width={36} height={36} margin={24}/>
			}}>
				<Stack.Screen name="index" />
				<Stack.Screen name="sign-in" options={{ headerShown: false }} />
				<Stack.Screen name="sign-up" options={{ headerShown: false }} />
				<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
			</Stack>
		</AuthenticationContext.Provider>
	);
}
