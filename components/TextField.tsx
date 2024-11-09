import { NativeSyntheticEvent, TextInput, TextInputFocusEventData } from "react-native";

interface TextFieldProps {
	placeholder?: string;
	onChangeText?: (text: string) => void;
	onBlur?: ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void);
	value?: string;
	editable?: boolean;
	secureTextEntry?: boolean;
}

export default function TextField(props: TextFieldProps) {
	return (
		<TextInput placeholder={props.placeholder} onBlur={props.onBlur} onChangeText={props.onChangeText} value={props.value} editable={props.editable} secureTextEntry={props.secureTextEntry} style={{ backgroundColor: "#D9D9D9", color: "#454545", paddingVertical: 12, paddingHorizontal: 30, fontFamily: "Inter" }} className="text-lg font-semibold" />
	);
}