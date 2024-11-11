import { DimensionValue, Image, ImageStyle, StyleProp } from "react-native";

interface LogoProps {
	width: number;
	height: number;
	center?: boolean;
	padding?: DimensionValue;
	margin?: DimensionValue;
}

export default function Logo(props: LogoProps) {
	let style : StyleProp<ImageStyle> = {
		width: props.width,
		height: props.height,
		padding: props.padding,
		margin: props.margin
	};
	
	if (props.center) {
		style = { alignSelf: "center", ...style};
	}
	
	return (
		<Image style={{ ...style }} source={require('@/assets/images/heslgb-logo.png')} />
	);
}