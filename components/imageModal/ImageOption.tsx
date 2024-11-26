import { TouchableOpacity, View } from "react-native";
import AppText, { fontWeight } from "../text/AppText";
import { ReactNode } from "react";

interface ImageModalProps {
	label: string;
	labelColor?: string;
	icon: ReactNode;
	onOptionPress: () => void;
}

export default function ImageOption(props: ImageModalProps) {
	return (
		<View style={{ flexDirection: "column", gap: 8 }}>
			<TouchableOpacity onPress={props.onOptionPress} style={{ justifyContent: "center", alignItems: "center", borderWidth: 2, borderColor: "#D7D7D7", backgroundColor: "#EFEFEF", borderRadius: 10, width: 64, height: 64 }}>
				{props.icon}
			</TouchableOpacity>
			<AppText fontSize={16} lineHeight={19} fontWeight={fontWeight.regular} color={props.labelColor} style={{ alignSelf: "center"}}>
				{props.label}
			</AppText>
		</View>
	);
}