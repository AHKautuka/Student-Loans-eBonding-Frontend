import { TextInput } from "react-native";

interface TextFieldProps {
	placeholder?: string;
}

export default function TextField(props: TextFieldProps) {
	return (
		<TextInput placeholder={props.placeholder} style={{ backgroundColor: "#D9D9D9", color: "#454545", paddingVertical: 12, paddingHorizontal: 30, fontFamily: "Inter" }} className="text-xl font-semibold" />
	);
}