import { View } from "react-native";

interface DetailsCardProps {
	className?: string;
	children: React.ReactNode;
}

export default function DetailsCard(props : DetailsCardProps) {
	return (
		<View style={{ alignSelf: "center", padding: 20, borderWidth: 1, borderRadius: 30, gap: 20 }} className="w-[21.75rem] h-fit bg-white border-[#959595]">
			{props.children}
		</View>
	);
}