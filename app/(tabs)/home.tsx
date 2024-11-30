import BondingStatus from "@/components/bonding-status";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import BaseAccountDetailsCard from "@/components/cards/BaseAccountDetailsCard";
import HeadingText from "@/components/text/HeadingText";
import AuthenticationContext from "@/contexts/AuthenticationContext";
import { getUserRoles } from "@/utils/authorized";
import { getClaims, logOut } from "@/utils/handleJWT";
import { router } from "expo-router";
import { useContext } from "react";
import { ScrollView } from "react-native";

export default function HomePage() {
	const { claims, update } = useContext(AuthenticationContext);
	
	function getUserEmail(): string {
		return claims.filter(x => x.name === "email")[0]?.value;
	}
	
	return (
		<ScrollView style={{ flexDirection: "column", gap: 20, padding: 32, backgroundColor: "#F6F6F6" }}>
			<HeadingText>Home</HeadingText>
			
			<BaseAccountDetailsCard userEmail={getUserEmail()} roles={getUserRoles(claims)} />
			
			<BondingStatus />
			
			<SecondaryButton text="Log Out" onPress={async () => {
				await logOut();
				update(await getClaims());
				router.replace("/");
			}} />
		</ScrollView>
	);
}