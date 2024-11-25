import EditableAccountDetailsCard from "@/components/cards/EditableAccountDetailsCard";
import BankDetailsCard from "@/components/cards/BankDetailsCard";
import GuardianDetailsCard from "@/components/cards/GuardianDetailsCard";
import PersonalDetailsCard from "@/components/cards/PersonalDetailsCard";
import StudentDocumentsCard from "@/components/cards/StudentDocumentsCard";
import StudentStudyDetailsCard from "@/components/cards/StudentStudyDetailsCard";
import HeadingText from "@/components/text/HeadingText";
import AuthenticationContext from "@/contexts/AuthenticationContext";
import { studentReadDTO } from "@/dtos/students";
import { userReadDTO } from "@/dtos/users";
import { urlAccounts } from "@/utils/endpoints";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { ScrollView } from "react-native";
import ImageModal from "@/components/imageModal/ImageModal";
import { imageType } from "@/components/imageModal/imageType";
import { getAccountId } from "@/utils/handleJWT";

export default function Profile() {
	const { claims } = useContext(AuthenticationContext);
	
	function getUserEmail(): string {
		return claims.filter(x => x.name === "email")[0]?.value;
	}
	
	const [modalVisible, setModalVisible] = useState<boolean>(false);
	const [modalTitle, setModalTitle] = useState<string | undefined>(undefined);
	const [imgType, setImgType] = useState<imageType>(imageType.none);
	
	const [profilePictureURL, setProfilePictureURL] = useState<string>();
	const [nationalIdURL, setNationalIdURL] = useState<string>();
	const [studentIdURL, setStudentIdURL] = useState<string>();
	const [signatureURL, setSignatureURL] = useState<string>();

	function setImageURL(url?: string) {
		switch (imgType) {
			case imageType.profilePicture:
				setProfilePictureURL(url);
				break;
			
			case imageType.nationalId:
				setNationalIdURL(url);
				break;
			
			case imageType.studentId:
				setStudentIdURL(url);
				break;
			
			case imageType.signature:
				setSignatureURL(url);
				break;
					
			default:
				console.error("Invalid image type");
				throw Error;
		}
	}
	
	function getImageName() {
		switch (imgType) {
			case imageType.profilePicture:
				return "profilePicture";
			case imageType.nationalId:
				return "nationalIdScan";
			case imageType.studentId:
				return "studentIdScan";
			case imageType.signature:
				return "signature";
			default:
				console.error("Invalid image type");
				throw Error;
		}
	}
	
	function getEndpointURL(baseURL: string) {
		switch (imgType) {
			case imageType.profilePicture:
			case imageType.signature:
				return `${baseURL}/users`;
			case imageType.nationalId:
			case imageType.studentId:
				return `${baseURL}/students`;
			default:
				console.error("Invalid image type");
				throw Error;
		}
	}
	
	async function onImageUploadButtonPress(modalTitle: string, imgType: imageType) {
		setModalVisible(true);
		setModalTitle(modalTitle);
		setImgType(imgType);
	}
	
	useEffect(() => {
		if (claims.length > 0) {
			onMount();
		}
	}, [claims]);
	
	async function onMount() {
		fecthUserDetails();
		fecthStudentDetails();
	}
	
	async function fecthUserDetails() {
		try {
			const response = await axios.get<userReadDTO>(`${urlAccounts}/${await getAccountId()}/users`);
			setSignatureURL(response.data.signature);
		} catch (error: any) {
			console.log(error.message);
		}
	}
	
	async function fecthStudentDetails() {
		try {
			const response = await axios.get<studentReadDTO>(`${urlAccounts}/${await getAccountId()}/students`);
			setNationalIdURL(response.data.nationalIdScan);
			setStudentIdURL(response.data.studentIdScan);
		} catch (error: any) {
			console.log(error.message);
		}
	}
	
	async function sendToBackend(imageURI: string) {
		try {
			const formData = new FormData();
			formData.append(getImageName()!, imageURI);
			await axios.postForm(getEndpointURL(`${urlAccounts}/${await getAccountId()}`), formData);
			console.log("Sent to backend");
		} catch (error: any) {
			console.log(error.message);
		}
	}

	return (
		<ScrollView style={{ flexDirection: "column", padding: 32, backgroundColor: "#F6F6F6" }}>
			<HeadingText>Profile</HeadingText>
			
			<EditableAccountDetailsCard userEmail={getUserEmail()} profilePictureURL={profilePictureURL}  onImageUploadButtonPress={onImageUploadButtonPress}/>
			<PersonalDetailsCard />
			<BankDetailsCard />
			<GuardianDetailsCard />
			<StudentStudyDetailsCard />
			<StudentDocumentsCard nationalIdURL={nationalIdURL} studentIdURL={studentIdURL} signatureURL={signatureURL} onImageUploadButtonPress={onImageUploadButtonPress}/>
			
			<ImageModal title={modalTitle} modalVisible={modalVisible} setModalVisible={setModalVisible} setImageURI={(uri) => setImageURL(uri)} sendToBackEnd={sendToBackend} />
		</ScrollView>
	)
}