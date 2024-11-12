import { GestureResponderEvent } from "react-native";
import BaseButton from "./BaseButton";

interface PrimaryButtonProps {
	text: string;
	onPress?: (event: GestureResponderEvent) => void;
	disabled?: boolean;
}

export default function PrimaryButton(props: PrimaryButtonProps) {
	return (
		<BaseButton text={props.text} onPress={props.onPress} disabled={props.disabled} bgColor="#BF9A3B" />
	);
}