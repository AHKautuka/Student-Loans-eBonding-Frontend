import AppText, { fontWeight } from "./AppText";

interface DetailNameTextProps {
	children?: any;
}

export default function DetailNameText(props: DetailNameTextProps) {
	return (
		<AppText fontSize={16} lineHeight={19} fontWeight={fontWeight.semibold}>{props.children}</AppText>
	);
};