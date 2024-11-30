import EditableAccountDetailsCard from "@/components/cards/EditableAccountDetailsCard";
import BankDetailsCard from "@/components/cards/BankDetailsCard";
import GuardianDetailsCard from "@/components/cards/GuardianDetailsCard";
import PersonalDetailsCard from "@/components/cards/PersonalDetailsCard";
import StudentStudyDetailsCard from "@/components/cards/StudentStudyDetailsCard";
import HeadingText from "@/components/text/HeadingText";
import AuthenticationContext from "@/contexts/AuthenticationContext";
import { convertStudentDTOtoModel, defaultStudentModel, studentModel, studentReadDTO } from "@/dtos/students";
import { convertUserDTOtoModel, defaultUserModel, userModel, userReadDTO } from "@/dtos/users";
import { urlAccounts } from "@/utils/endpoints";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { ScrollView } from "react-native";
import ImageModal from "@/components/imageModal/ImageModal";
import { imageType } from "@/components/imageModal/imageType";
import { getAccountId } from "@/utils/handleJWT";
import { getUserRoles } from "@/utils/authorized";
import Authorized from "@/components/Authorized";
import { claim, role } from "@/dtos/authentication";
import DocumentsCard from "@/components/cards/DocumentsCard";

export default function Profile() {
	const { claims } = useContext(AuthenticationContext);
	
	function getUserEmail(): string {
		return claims.filter(x => x.name === "email")[0]?.value;
	}
	
	const [modalVisible, setModalVisible] = useState<boolean>(false);
	const [modalTitle, setModalTitle] = useState<string | undefined>(undefined);
	const [imgType, setImgType] = useState<imageType>(imageType.none);
	
	const [userModel, setUserModel] = useState<userModel>(defaultUserModel);
	const [studentModel, setStudentModel] = useState<studentModel>(defaultStudentModel);

	function setImageURL(url?: string) {
		switch (imgType) {
			case imageType.profilePicture:
				setUserModel({...userModel, profilePicture: url});
				break;
			
			case imageType.nationalId:
				setStudentModel({...studentModel, nationalIdScan: url});
				break;
			
			case imageType.studentId:
				setStudentModel({...studentModel, studentIdScan: url});
				break;
			
			case imageType.signature:
				setUserModel({...userModel, signature: url});
				break;
					
			default:
				console.error("Invalid image type");
				throw Error("Invalid image type");
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
			onMount(claims);
		}
	}, [claims]);
	
	async function onMount(claims: claim[]) {
		const userRoles = getUserRoles(claims);
		
		if (userRoles?.includes(role.User)) {
			fecthUserDetails();
		}
		if (userRoles?.includes(role.Student)) {
			fecthStudentDetails();
		}
	}
	
	async function fecthUserDetails() {
		try {
			const response = await axios.get<userReadDTO>(`${urlAccounts}/${await getAccountId()}/users`);
			setUserModel(convertUserDTOtoModel(response.data));
		} catch (error: any) {
			console.log(error.message);
		}
	}
	
	async function fecthStudentDetails() {
		try {
			const response = await axios.get<studentReadDTO>(`${urlAccounts}/${await getAccountId()}/students`);
			setStudentModel(convertStudentDTOtoModel(response.data));
		} catch (error: any) {
			console.log(error.message);
		}
	}
	
	async function sendToBackend(imageURI: string) {
		try {
			const formData = new FormData();
			formData.append(getImageName(), dataURItoBlob(imageURI));
			const url = getEndpointURL(`${urlAccounts}/${await getAccountId()}`);
			await axios.putForm(url, formData);
			console.log(`Sent ${JSON.stringify(formData)} to backend at endpoint ${url}`);
		} catch (error: any) {
			console.log(error.message);
		}
	}
	
	function dataURItoBlob(dataURI: string) {
		// convert base64/URLEncoded data component to raw binary data held in a string
		const byteString = dataURI.split(',')[0].indexOf('base64') >= 0 ? atob(dataURI.split(',')[1]) : unescape(dataURI.split(',')[1]);
		
		// separate out the mime component
		var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
		
		// write the bytes of the string to a typed array
		var ia = new Uint8Array(byteString.length);
		for (var i = 0; i < byteString.length; i++) {
			ia[i] = byteString.charCodeAt(i);
		}
		
		return new Blob([ia], {type:mimeString});
	}

	return (
		<ScrollView style={{ flexDirection: "column", padding: 32, backgroundColor: "#F6F6F6" }}>
			<HeadingText>Profile</HeadingText>
			
			<EditableAccountDetailsCard userEmail={getUserEmail()} roles={getUserRoles(claims)} profilePictureURL={userModel.profilePicture}  onImageUploadButtonPress={onImageUploadButtonPress} />
			<PersonalDetailsCard userModel={userModel} studentModel={studentModel} />
			<Authorized authorized={(
				<>
					<BankDetailsCard studentModel={studentModel} />
					<GuardianDetailsCard guardianModel={studentModel.guardian} />
					<StudentStudyDetailsCard studentModel={studentModel} />
				</>
			)} authorizedRoles={[role.Student]} />
			
			<DocumentsCard nationalIdURL={studentModel.nationalIdScan}  studentIdURL={studentModel.studentIdScan} signatureURL={userModel.signature} onImageUploadButtonPress={onImageUploadButtonPress} />
			
			<ImageModal title={modalTitle} modalVisible={modalVisible} setModalVisible={setModalVisible} setImageURI={(uri) => setImageURL(uri)} sendToBackEnd={sendToBackend} />
		</ScrollView>
	)
}