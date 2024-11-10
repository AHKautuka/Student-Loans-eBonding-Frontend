import { Text, View } from "react-native";
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
			<View style={{ justifyContent: "center", width: 198, aspectRatio: 1, borderRadius: 9999 }} className="justify-center items-center self-center bg-[#C9C9C9]"><Text>Image Placeholder</Text></View>
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