import { Alert, Modal, TouchableWithoutFeedback, View } from "react-native";
import AppText, { fontWeight } from "../text/AppText";
import { FontAwesome6 } from "@expo/vector-icons";
import ImageOption from "./ImageOption";
import * as ImagePicker from 'expo-image-picker';

interface ImageModalProps {
	title?: string;
	modalVisible: boolean;
	setModalVisible: (modalVisible: boolean) => void;
	setImageURI: (uri?: string) => void;
	sendToBackEnd: (imageURI: string) => void;
}

export default function ImageModal(props: ImageModalProps) {
	async function uploadImageFromCamera() {
		try {
			await ImagePicker.requestCameraPermissionsAsync();
			const result = await ImagePicker.launchCameraAsync({
				cameraType: ImagePicker.CameraType.back,
				allowsEditing: true,
				aspect: [1, 1],
				quality: 1,
				mediaTypes: ImagePicker.MediaTypeOptions.Images
			});
			
			if (!result.canceled) {
				saveImage(result.assets[0].uri);
			}
		} catch (error: any) {
			Alert.alert("Error uploading image " + error.message);
			props.setModalVisible(false);
		}
	}
	
	async function uploadImageFromGallery() {
		try {
			await ImagePicker.requestMediaLibraryPermissionsAsync();
			const result = await ImagePicker.launchImageLibraryAsync({
				allowsEditing: true,
				aspect: [1, 1],
				quality: 1,
				mediaTypes: ImagePicker.MediaTypeOptions.Images
			});
			
			if (!result.canceled) {
				saveImage(result.assets[0].uri);
			}
		} catch (error: any) {
			Alert.alert("Error uploading image " + error.message);
			props.setModalVisible(false);
		}
	}
	
	async function removeImage() {
		props.setImageURI(undefined);
		// delete from backend
		props.setModalVisible(false);
	}
	
	async function saveImage(imageURI?: string) {
		try {
			props.setImageURI(imageURI);
			
			props.sendToBackEnd(imageURI!);
			
			props.setModalVisible(false);
		} catch (error) {
			throw error;
		}
	}
	
	return (
		<Modal
		animationType="fade"
		transparent={true}
		visible={props.modalVisible}
		onRequestClose={() => props.setModalVisible(false)}
		>
			<View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>	
				<TouchableWithoutFeedback onPress={() => props.setModalVisible(false)}>
					<View style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0, backgroundColor: 'black', opacity: 0.5 }} />
				</TouchableWithoutFeedback>
				<View style={{
					margin: 20,
					backgroundColor: 'white',
					borderRadius: 20,
					padding: 35,
					alignItems: 'center',
					shadowColor: '#000',
					shadowOffset: {
						width: 0,
						height: 2,
					},
					shadowOpacity: 0.25,
					shadowRadius: 4,
					elevation: 5
				}}>
					<AppText fontSize={20} lineHeight={24} fontWeight={fontWeight.semibold} style={{ paddingBottom: 12 }}>
						{props.title ?? "Upload Image"}
					</AppText>
					<View style={{ flexDirection: "row", gap: 32 }}>
						<ImageOption label="Camera" labelColor="#eebf49" icon={<FontAwesome6 size={24} name="camera" color={"#eebf49"}/>} onOptionPress={uploadImageFromCamera} />
						<ImageOption label="Gallery" labelColor="#eebf49" icon={<FontAwesome6 size={24} name="image" color={"#eebf49"}/>} onOptionPress={uploadImageFromGallery} />
						<ImageOption label="Remove" labelColor="#4F4F4F" icon={<FontAwesome6 size={24} name="trash" color={"#4F4F4F"}/>} onOptionPress={removeImage} />
					</View>
				</View>
			</View>
		</Modal>
	);
}