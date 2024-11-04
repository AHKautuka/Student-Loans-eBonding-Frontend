import { Stack } from "expo-router";
import "../global.css";
import { useEffect, useState } from "react";
import { claim } from "@/dtos/authentication";
import AuthenticationContext from "@/contexts/AuthenticationContext";
import { getClaims } from "@/utils/handleJWT";

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
			<Stack>
				<Stack.Screen name="index" />
			</Stack>
		</AuthenticationContext.Provider>
	);
}
