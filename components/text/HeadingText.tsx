import AppText, { fontWeight } from "./AppText";

interface HeadingTextProps {
	children?: any;
}

export default function HeadingText(props: HeadingTextProps) {
	return (
		<AppText fontSize={30} lineHeight={36} fontWeight={fontWeight.semibold} style={{ marginBottom: 32 }}>{props.children}</AppText>
	);
};