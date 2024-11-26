import { ImageSourcePropType, Text, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import { FontAwesome6 } from "@expo/vector-icons";
import { imageType } from "../imageModal/imageType";
import BaseAccountDetailsCard from "./BaseAccountDetailsCard";

interface EditableAccountDetailsCardProps {
	userEmail?: string;
	roles?: string[];
	profilePictureURL?: string;
	className?: string;
	onImageUploadButtonPress: (modalTitle: string, imgType: imageType) => void;
}

export default function EditableAccountDetailsCard(props : EditableAccountDetailsCardProps) {
	return (
		<BaseAccountDetailsCard userEmail={props.userEmail} roles={props.roles} profilePictureURL={props.profilePictureURL} className={props.className}>
			<TouchableOpacity onPress={() => props.onImageUploadButtonPress("Profile Picuture", imageType.profilePicture)} style={{ borderWidth: 2, borderColor: "#D7D7D7", backgroundColor: "#EFEFEF", borderRadius: 9999, padding: 8, position: "absolute", right: 8, bottom: 8 }}>
				<FontAwesome6 size={24} name="camera" color={"#eebf49"}/>
			</TouchableOpacity>
		</BaseAccountDetailsCard>
	);
}