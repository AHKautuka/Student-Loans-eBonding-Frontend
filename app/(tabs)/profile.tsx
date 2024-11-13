import AccountDetailsCard from "@/components/cards/AccountDetailsCard";
import BankDetailsCard from "@/components/cards/BankDetailsCard";
import GuardianDetailsCard from "@/components/cards/GuardianDetailsCard";
import PersonalDetailsCard from "@/components/cards/PersonalDetailsCard";
import StudentDocumentsCard from "@/components/cards/StudentDocumentsCard";
import StudentStudyDetailsCard from "@/components/cards/StudentStudyDetailsCard";
import HeadingText from "@/components/text/HeadingText";
import AuthenticationContext from "@/contexts/AuthenticationContext";
import { studentReadDTO } from "@/dtos/students";
import { userReadDTO } from "@/dtos/users";
import { urlStudents, urlUsers } from "@/utils/endpoints";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { ScrollView } from "react-native";

export default function Profile() {
	const { claims } = useContext(AuthenticationContext);
	
	function getUserEmail(): string {
		return claims.filter(x => x.name === "email")[0]?.value;
	}
	
	const [nationalIDURL, setNationalIDURL] = useState<string>();
	const [studentIDURL, setStudentIDURL] = useState<string>();
	const [signatureURL, setSignatureURL] = useState<string>();
	
	useEffect(() => {
		fecthUserDetails();
		fecthStudentDetails();
	}, []);
	
	async function fecthUserDetails() {
		try {
			const response = await axios.get<userReadDTO>(`${urlUsers}/self`);
			setSignatureURL(response.data.signature);
		} catch (error: any) {
			console.log(error.message);
		}
	}
	
	async function fecthStudentDetails() {
		try {
			const response = await axios.get<studentReadDTO>(`${urlStudents}/self`);
			setNationalIDURL(response.data.nationalIdScan);
			setStudentIDURL(response.data.studentIdScan);
		} catch (error: any) {
			console.log(error.message);
		}
	}
	
	return (
		<ScrollView style={{ flexDirection: "column", padding: 32, backgroundColor: "#F6F6F6" }}>
			<HeadingText>Profile</HeadingText>
			
			<AccountDetailsCard userEmail={getUserEmail()} />
			<PersonalDetailsCard />
			<BankDetailsCard />
			<GuardianDetailsCard />
			<StudentStudyDetailsCard />
			<StudentDocumentsCard nationalIDURL={nationalIDURL} studentIDURL={studentIDURL} signatureURL={signatureURL} />
		</ScrollView>
	)
}