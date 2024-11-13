import { ColorValue } from "react-native";
import AppText, { fontWeight } from "./AppText";

interface ButtonTextProps {
	color: ColorValue;
	children?: any;
}

export default function ButtonText(props: ButtonTextProps) {
	return (
		<AppText fontSize={20} lineHeight={24} fontWeight={fontWeight.semibold} color={props.color}>{props.children}</AppText>
	);
};