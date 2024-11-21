import DetailsCard from "./DetailsCard";
import AppText, { fontWeight } from "../text/AppText";
import DetailNameText from "../text/DetailNameText";
import { Text } from "react-native";
import DetailValueText from "../text/DetailValueText";
import SecondaryButton from "../buttons/SecondaryButton";
import { router } from "expo-router";

interface StudentStudyDetailsCardProps {
	
}

export default function StudentStudyDetailsCard(props : StudentStudyDetailsCardProps) {
	return (
		<DetailsCard style={{ gap: 6 }}>
			<AppText style={{ paddingBottom: 12 }} fontSize={20} lineHeight={24} fontWeight={fontWeight.semibold}>Student Study Details</AppText>
			
			<Text>
				<DetailNameText>Name of Institution:</DetailNameText>
				<DetailValueText></DetailValueText>
			</Text>
			<Text>
				<DetailNameText>Programme of Study:</DetailNameText>
				<DetailValueText></DetailValueText>
			</Text>
			<Text>
				<DetailNameText>Registration Number:</DetailNameText>
				<DetailValueText></DetailValueText>
			</Text>
			<Text>
				<DetailNameText>Academic Year:</DetailNameText>
				<DetailValueText></DetailValueText>
			</Text>
			<Text>
				<DetailNameText>Year of Study:</DetailNameText>
				<DetailValueText></DetailValueText>
			</Text>
		<SecondaryButton onPress={() => router.navigate({pathname: '/(tabs)profilestudent-study-details'})} text="Edit" />
		</DetailsCard>
	);
}