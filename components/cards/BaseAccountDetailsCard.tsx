import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from "react-native";
import DetailsCard from "./DetailsCard";
import DetailNameText from "../text/DetailNameText";
import DetailValueText from "../text/DetailValueText";
import AppText, { fontWeight } from "../text/AppText";
import { PropsWithChildren, useEffect, useState } from "react";

interface BaseAccountDetailsCardProps extends PropsWithChildren {
	userEmail?: string;
	role?: string;
	profilePictureURL?: string;
	className?: string;
}

const defaultImage: ImageSourcePropType = require('@/assets/images/default-user-profile-picture.png');

export default function BaseAccountDetailsCard(props : BaseAccountDetailsCardProps) {
	const [image, setImage] = useState<ImageSourcePropType>(defaultImage);
	
	useEffect(() => {
		if(props.profilePictureURL) {
			setImage({ uri: props.profilePictureURL });
		}
	}, [props.profilePictureURL]);
	
	function onImagePress() {
		
	}
	
	return (
		<DetailsCard style={{ gap: 20 }}>
			<AppText fontSize={20} lineHeight={24} fontWeight={fontWeight.semibold}>Account Details</AppText>
			
			<View style={{ alignSelf: "center", width: 198, height: 198 }}>
				<TouchableOpacity style={{ borderRadius: 9999 }} onPress={onImagePress}>
					<Image style={{ alignSelf: "center", width: 198, height: 198, borderRadius: 9999, borderWidth: 2, borderColor: "#D7D7D7" }} source={image} />
				</TouchableOpacity>
				
				{props.children}
			</View>
			
			<View style={{gap: 6}}>
				<Text className="flex">
					<DetailNameText>Email:</DetailNameText>
					<DetailValueText>{props.userEmail}</DetailValueText>
				</Text>
				<Text className="flex">
					<DetailNameText>Role:</DetailNameText>
					<DetailValueText>{props.role}</DetailValueText>
				</Text>
			</View>
		</DetailsCard>
	);
}