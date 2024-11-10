import SecondaryButton from "@/components/buttons/SecondaryButton";
import AccountDetailsCard from "@/components/cards/AccountDetailsCard";
import HeadingText from "@/components/text/HeadingText";
import AuthenticationContext from "@/contexts/AuthenticationContext";
import { logOut } from "@/utils/handleJWT";
import { router } from "expo-router";
import { useContext } from "react";
import { ScrollView } from "react-native";

export default function HomePage() {
	const { claims } = useContext(AuthenticationContext);
	
	function getUserEmail(): string {
		return claims.filter(x => x.name === "email")[0]?.value;
	}
	
	return (
		<ScrollView style={{ flexDirection: "column", gap: 20, padding: 32, backgroundColor: "#F6F6F6" }}>
			<HeadingText>Home</HeadingText>
			
			<AccountDetailsCard userEmail={getUserEmail()} />
			
			<SecondaryButton text="Log Out" onPress={() => {
				logOut();
				router.push("/");
				router.dismissAll();
			}} />
		</ScrollView>
	);
}