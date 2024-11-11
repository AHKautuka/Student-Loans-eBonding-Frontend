import { Image, Text, View } from "react-native";
import DetailsCard from "./DetailsCard";
import DetailNameText from "../text/DetailNameText";
import DetailValueText from "../text/DetailValueText";

interface AccountDetailsCardProps {
	userEmail?: string;
	role?: string;
	className?: string;
}

export default function AccountDetailsCard(props : AccountDetailsCardProps) {
	return (
		<DetailsCard>
			<Text className="text-xl font-semibold">Account Details</Text>
			<Image style={{ alignSelf: "center", width: 198, height: 198 }} source={require('@/assets/images/default-user-profile-picture.png')} />
			<View style={{gap: 6}}>
				<Text className="flex">
					<DetailNameText>Email:</DetailNameText>
					<DetailValueText>{props.userEmail}</DetailValueText>
				</Text>
				<Text className="flex">
					<DetailNameText>Role:</DetailNameText>
					<DetailValueText>{props.role}</DetailValueText>
				</Text>
			</View>
		</DetailsCard>
	);
}