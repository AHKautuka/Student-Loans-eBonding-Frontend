import { Image, ImageSourcePropType, TouchableOpacity, View } from "react-native";
import AppText, { fontWeight } from "../text/AppText";
import DetailNameText from "../text/DetailNameText";
import DetailsCard from "./DetailsCard";
import { FontAwesome6 } from "@expo/vector-icons";
import { imageType } from "../imageModal/imageType";
import { PropsWithChildren } from "react";

interface BaseDocumentsCardProps extends PropsWithChildren {
	signatureURL?: string;
	onImageUploadButtonPress: (modalTitle: string, imgType: imageType) => void;
}

const defaultSignature: ImageSourcePropType = require('@/assets/images/placeholder-signature-scan.jpg');

export default function BaseDocumentsCard(props: BaseDocumentsCardProps) {
	return (
		<DetailsCard style={{ gap: 12 }}>
			<AppText fontSize={20} lineHeight={24} fontWeight={fontWeight.semibold}>Documents</AppText>
			
			<View style={{ gap: 32, paddingBottom: 12 }}>
				{props.children}
				
				<View style={{ gap: 16 }}>
					<DetailNameText>Signature Scan:</DetailNameText>
					<View style={{ alignSelf: "center", width: 284, height: 284 }}>
						<Image source={props.signatureURL ? { uri: props.signatureURL } : defaultSignature} style={{ alignSelf: "center", width: 284, height: 284, borderRadius: 10, borderWidth: 2, borderColor: "#D7D7D7" }}/>
						<TouchableOpacity onPress={() => props.onImageUploadButtonPress("Signature Scan", imageType.signature)} style={{ borderWidth: 2, borderColor: "#D7D7D7", backgroundColor: "#EFEFEF", borderRadius: 10, padding: 8, position: "absolute", right: 8, bottom: 8 }}>
							<FontAwesome6 size={24} name="camera" color={"#eebf49"}/>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</DetailsCard>
	);
}