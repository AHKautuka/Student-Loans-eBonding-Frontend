import { Text } from "react-native";
import DetailNameText from "./DetailNameText";
import DetailValueText from "./DetailValueText";

interface DetailTextProps {
	detailName: string;
	detailValue?: string | number;
}

export default function DetailText(props: DetailTextProps) {
	return (
		<Text className="flex">
			<DetailNameText>{props.detailName}</DetailNameText>
			<DetailValueText>{props.detailValue}</DetailValueText>
		</Text>
	);
}