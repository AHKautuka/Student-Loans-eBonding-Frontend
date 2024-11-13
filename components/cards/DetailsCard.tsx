import { PropsWithChildren } from "react";
import { StyleProp, View, ViewStyle } from "react-native";

interface DetailsCardProps extends PropsWithChildren {
	style?: StyleProp<ViewStyle>;
}

export default function DetailsCard(props : DetailsCardProps) {
	return (
		<View style={{ alignSelf: "center", width: 348, padding: 20, marginBottom: 32, borderWidth: 1, borderRadius: 30, ...(props.style as object) }} className="h-fit bg-white border-[#959595]">
			{props.children}
		</View>
	);
}
