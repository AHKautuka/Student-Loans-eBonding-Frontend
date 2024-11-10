import AppText, { fontWeight } from "./AppText";

interface DetailValueTextProps {
	children?: any;
}

export default function DetailValueText(props: DetailValueTextProps) {
	return (
		<AppText fontSize={16} lineHeight={19} fontWeight={fontWeight.regular} style={{ marginLeft: "auto" }}>{props.children}</AppText>
	);
};