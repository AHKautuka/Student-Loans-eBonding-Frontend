import DetailsCard from "./DetailsCard";
import AppText, { fontWeight } from "../text/AppText";
import DetailNameText from "../text/DetailNameText";
import { Text } from "react-native";
import DetailValueText from "../text/DetailValueText";
import SecondaryButton from "../buttons/SecondaryButton";

interface GuardianDetailsCardProps {
	
}

export default function GuardianDetailsCard(props : GuardianDetailsCardProps) {
	return (
		<DetailsCard style={{ gap: 6 }}>
			<AppText style={{ paddingBottom: 12 }} fontSize={20} lineHeight={24} fontWeight={fontWeight.semibold}>Parent/Guardian Details</AppText>
			
			<Text>
				<DetailNameText>Full Name:</DetailNameText>
				<DetailValueText></DetailValueText>
			</Text>
			<Text>
				<DetailNameText>Postal Address:</DetailNameText>
				<DetailValueText></DetailValueText>
			</Text>
			<Text>
				<DetailNameText>Physical Address:</DetailNameText>
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
				<DetailNameText>Occupation:</DetailNameText>
				<DetailValueText></DetailValueText>
			</Text>
			<SecondaryButton text="Edit" />
		</DetailsCard>
	);
}