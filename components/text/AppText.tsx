import { ColorValue, StyleProp, Text, TextStyle } from "react-native";

interface AppTextProps {
	fontSize: number;
	lineHeight: number;
	fontWeight: fontWeight;
	color?: ColorValue;
	style?: StyleProp<TextStyle>;
	children?: any;
}

export enum fontWeight {
	thin = "100",
	extralight = "200",
	light = "300",
	regular = "400",
	medium = "500",
	semibold = "600",
	bold = "700",
	extrabold = "800",
	black = "900",
}

export default function AppText(props: AppTextProps) {
	return (
		<Text style={{ fontFamily: "Inter", fontSize: props.fontSize, lineHeight: props.lineHeight, fontWeight: props.fontWeight, color: props.color, ...(props.style as object) }}>{props.children}</Text>
	);
};