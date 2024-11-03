import { ColorValue, GestureResponderEvent, Pressable, Text, View } from "react-native";

export interface BaseButtonProps {
	text: string;
	onPress?: (event: GestureResponderEvent) => void;
	className?: string;
	disabled?: boolean;
	textColor?: ColorValue;
	bgColor?: ColorValue;
	border?: number;
	borderColor?: ColorValue;
}

export default function BaseButton(props: BaseButtonProps) {
	props.textColor ?? "#000000";
	
	return (
		<Pressable onPress={props.onPress} disabled={props.disabled}>
			<View style={{ alignSelf: 'center', backgroundColor: props.bgColor, paddingVertical: 12, paddingHorizontal: 30, borderRadius: 10, borderWidth: props.border, borderColor: props.borderColor }} className={`justify-center items-center ${props.className}`}>
				<Text style={{ fontFamily: "Inter", color: props.textColor }} className={`text-xl font-semibold`}>{props.text}</Text>
			</View>
		</Pressable>
	);
}