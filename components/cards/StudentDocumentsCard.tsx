import { Image, ImageSourcePropType, TouchableOpacity, View } from "react-native";
import AppText, { fontWeight } from "../text/AppText";
import DetailNameText from "../text/DetailNameText";
import DetailsCard from "./DetailsCard";
import { FontAwesome6 } from "@expo/vector-icons";
import { imageType } from "../imageModal/imageType";
import BaseDocumentsCard from "./BaseDocumentsCard";

interface StudentDocumentsCardProps {
	nationalIdURL?: string;
	studentIdURL?: string;
	signatureURL?: string;
	onImageUploadButtonPress: (modalTitle: string, imgType: imageType) => void;
}

const defaultNationalId: ImageSourcePropType = require('@/assets/images/placeholder-national-id-scan.jpg');
const defaultStudentId: ImageSourcePropType = require('@/assets/images/placeholder-student-id-scan.jpg');

export default function StudentDocumentsCard(props: StudentDocumentsCardProps) {
	return (
		<BaseDocumentsCard signatureURL={props.signatureURL} onImageUploadButtonPress={props.onImageUploadButtonPress}>
			<View style={{ gap: 16 }}>
					<DetailNameText>National ID Scan:</DetailNameText>
					<View style={{ alignSelf: "center", width: 284, height: 284 }}>
						<Image source={props.nationalIdURL ? { uri: props.nationalIdURL } : defaultNationalId} style={{ alignSelf: "center", width: 284, height: 284, borderRadius: 10, borderWidth: 2, borderColor: "#D7D7D7" }}/>
						<TouchableOpacity onPress={() => props.onImageUploadButtonPress("National ID Scan", imageType.nationalId)} style={{ borderWidth: 2, borderColor: "#D7D7D7", backgroundColor: "#EFEFEF", borderRadius: 10, padding: 8, position: "absolute", right: 8, bottom: 8 }}>
							<FontAwesome6 size={24} name="camera" color={"#eebf49"}/>
						</TouchableOpacity>
					</View>
				</View>
				
				<View style={{ gap: 16 }}>
					<DetailNameText>Student ID Scan:</DetailNameText>
					<View style={{ alignSelf: "center", width: 284, height: 284 }}>
						<Image source={props.studentIdURL ? { uri: props.studentIdURL } : defaultStudentId} style={{ alignSelf: "center", width: 284, height: 284, borderRadius: 10, borderWidth: 2, borderColor: "#D7D7D7" }}/>
						<TouchableOpacity onPress={() => props.onImageUploadButtonPress("Student ID Scan", imageType.studentId)} style={{ borderWidth: 2, borderColor: "#D7D7D7", backgroundColor: "#EFEFEF", borderRadius: 10, padding: 8, position: "absolute", right: 8, bottom: 8 }}>
							<FontAwesome6 size={24} name="camera" color={"#eebf49"}/>
						</TouchableOpacity>
					</View>
				</View>
		</BaseDocumentsCard>
	);
}