import DetailsCard from "./DetailsCard";
import AppText, { fontWeight } from "../text/AppText";
import DetailNameText from "../text/DetailNameText";
import { Text } from "react-native";
import DetailValueText from "../text/DetailValueText";
import SecondaryButton from "../buttons/SecondaryButton";
import { studentModel } from "@/dtos/students";
import DetailText from "../text/DetailText";

interface StudentStudyDetailsCardProps {
	studentModel: studentModel,
}

export default function StudentStudyDetailsCard(props : StudentStudyDetailsCardProps) {
	return (
		<DetailsCard style={{ gap: 6 }}>
			<AppText style={{ paddingBottom: 12 }} fontSize={20} lineHeight={24} fontWeight={fontWeight.semibold}>Student Study Details</AppText>
			
			<DetailText detailName="Name of Institution:" detailValue={props.studentModel.institutionName} />
			<DetailText detailName="Programme of Study:" detailValue={props.studentModel.programmeOfStudy} />
			<DetailText detailName="Registration Number::" detailValue={props.studentModel.registrationNumber} />
			<DetailText detailName="Academic Year:" detailValue={props.studentModel.academicYear} />
			<DetailText detailName="Year of Study:" detailValue={props.studentModel.yearOfStudy} />
			
			<SecondaryButton text="Edit" />
		</DetailsCard>
	);
}