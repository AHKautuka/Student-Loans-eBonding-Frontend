import DetailsCard from "./DetailsCard";
import AppText, { fontWeight } from "../text/AppText";
import SecondaryButton from "../buttons/SecondaryButton";
import { router } from "expo-router";
import { studentModel } from "@/dtos/students";
import DetailText from "../text/DetailText";

interface BankDetailsCardProps {
	studentModel: studentModel,
}

export default function BankDetailsCard(props : BankDetailsCardProps) {
	return (
		<DetailsCard style={{ gap: 6 }}>
			<AppText style={{ paddingBottom: 12 }} fontSize={20} lineHeight={24} fontWeight={fontWeight.semibold}>Bank Details</AppText>
			
			<DetailText detailName="Bank Name:" detailValue={props.studentModel.bankName} />
			<DetailText detailName="Branch Name:" detailValue={props.studentModel.branchName} />
			<DetailText detailName="Account Name:" detailValue={props.studentModel.bankAccountName} />
			<DetailText detailName="Account Number:" detailValue={props.studentModel.bankAccountNumber} />
			
			<SecondaryButton onPress={() => router.navigate("/profile/bank-details")} text="Edit" />
		</DetailsCard>
	);
}