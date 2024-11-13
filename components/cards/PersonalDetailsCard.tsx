import DetailsCard from "./DetailsCard";
import AppText, { fontWeight } from "../text/AppText";
import DetailNameText from "../text/DetailNameText";
import { Text } from "react-native";
import DetailValueText from "../text/DetailValueText";
import SecondaryButton from "../buttons/SecondaryButton";
import { router } from "expo-router";

interface PersonalDetailsCardProps {
	
}

export default function PersonalDetailsCard(props : PersonalDetailsCardProps) {
	return (
		<DetailsCard style={{ gap: 6 }}>
			<AppText style={{ paddingBottom: 12 }} fontSize={20} lineHeight={24} fontWeight={fontWeight.semibold}>Personal Details</AppText>
			
			<Text>
				<DetailNameText>Full Name:</DetailNameText>
				<DetailValueText></DetailValueText>
			</Text>
			<Text>
				<DetailNameText>Date of Birth:</DetailNameText>
				<DetailValueText></DetailValueText>
			</Text>
			<Text>
				<DetailNameText>Sex:</DetailNameText>
				<DetailValueText></DetailValueText>
			</Text>
			<Text>
				<DetailNameText>Postal Address:</DetailNameText>
				<DetailValueText></DetailValueText>
			</Text>
			<Text>
				<DetailNameText>Home Village:</DetailNameText>
				<DetailValueText></DetailValueText>
			</Text>
			<Text>
				<DetailNameText>Traditional Authority:</DetailNameText>
				<DetailValueText></DetailValueText>
			</Text>
			<Text>
				<DetailNameText>District:</DetailNameText>
				<DetailValueText></DetailValueText>
			</Text>
			<Text>
				<DetailNameText>Phone number:</DetailNameText>
				<DetailValueText></DetailValueText>
			</Text>
			<Text>
				<DetailNameText>National ID Number:</DetailNameText>
				<DetailValueText></DetailValueText>
			</Text>
			<SecondaryButton onPress={() => router.navigate("/profile/personal-details")} text="Edit" />
		</DetailsCard>
	);
}