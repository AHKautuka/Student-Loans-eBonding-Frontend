import DetailsCard from "./DetailsCard";
import AppText, { fontWeight } from "../text/AppText";
import SecondaryButton from "../buttons/SecondaryButton";
import { router } from "expo-router";
import Authorized from "../Authorized";
import { role } from "@/dtos/authentication";
import { userModel } from "@/dtos/users";
import { studentModel } from "@/dtos/students";
import DetailText from "../text/DetailText";

interface PersonalDetailsCardProps {
	userModel: userModel,
	studentModel: studentModel,
}

export default function PersonalDetailsCard(props : PersonalDetailsCardProps) {
	return (
		<DetailsCard style={{ gap: 6 }}>
			<AppText style={{ paddingBottom: 12 }} fontSize={20} lineHeight={24} fontWeight={fontWeight.semibold}>Personal Details</AppText>
			
			<DetailText detailName="Full Name:" detailValue={`${props.userModel.firstName} ${props.userModel.otherNames.join(" ")} ${props.userModel.surname}`} />
			
			<Authorized
			authorized={
				<>
					<DetailText detailName="Date of Birth:" detailValue={props.studentModel.dateOfBirth?.toLocaleString()} />
					<DetailText detailName="Sex:" detailValue={props.studentModel.sex} />
					<DetailText detailName="Postal Address:" detailValue={props.studentModel.postalAddress} />
					<DetailText detailName="Home Village:" detailValue={props.studentModel.homeVillage} />
					<DetailText detailName="Traditional Authority:" detailValue={props.studentModel.traditionalAuthority} />
					<DetailText detailName="District:" detailValue={props.studentModel.district} />
					<DetailText detailName="Phone Number:" detailValue={props.studentModel.phoneNumber} />
					<DetailText detailName="National ID Number:" detailValue={props.studentModel.nationalIdNumber} />
				</>
			}
			authorizedRoles={[role.Student]} />
			
			<SecondaryButton onPress={() => router.navigate("/profile/personal-details")} text="Edit" />
		</DetailsCard>
	);
}