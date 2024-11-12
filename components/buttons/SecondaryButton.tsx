import { GestureResponderEvent } from "react-native";
import BaseButton from "./BaseButton";

interface SecondaryButtonProps {
	text: string;
	onPress?: (event: GestureResponderEvent) => void;
	disabled?: boolean;
}

export default function SecondaryButton(props: SecondaryButtonProps) {
	return (
		<BaseButton text={props.text} onPress={props.onPress} disabled={props.disabled} bgColor="white" textColor="#BF9A3B" border={3} borderColor="#BF9A3B" />
	);
}