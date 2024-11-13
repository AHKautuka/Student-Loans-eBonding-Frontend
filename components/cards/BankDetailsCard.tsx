import DetailsCard from "./DetailsCard";
import AppText, { fontWeight } from "../text/AppText";
import DetailNameText from "../text/DetailNameText";
import { Text } from "react-native";
import DetailValueText from "../text/DetailValueText";
import SecondaryButton from "../buttons/SecondaryButton";
import { router } from "expo-router";

interface BankDetailsCardProps {
	
}

export default function BankDetailsCard(props : BankDetailsCardProps) {
	return (
		<DetailsCard style={{ gap: 6 }}>
			<AppText style={{ paddingBottom: 12 }} fontSize={20} lineHeight={24} fontWeight={fontWeight.semibold}>Bank Details</AppText>
			
			<Text>
				<DetailNameText>Bank Name:</DetailNameText>
				<DetailValueText></DetailValueText>
			</Text>
			<Text>
				<DetailNameText>Branch Name:</DetailNameText>
				<DetailValueText></DetailValueText>
			</Text>
			<Text>
				<DetailNameText>Account Name:</DetailNameText>
				<DetailValueText></DetailValueText>
			</Text>
			<Text>
				<DetailNameText>Account Number:</DetailNameText>
				<DetailValueText></DetailValueText>
			</Text>
			<SecondaryButton onPress={() => router.navigate("/profile/bank-details")} text="Edit" />
		</DetailsCard>
	);
}