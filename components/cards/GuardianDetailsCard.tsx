import DetailsCard from "./DetailsCard";
import AppText, { fontWeight } from "../text/AppText";
import SecondaryButton from "../buttons/SecondaryButton";
import { guardianModel } from "@/dtos/students";
import DetailText from "../text/DetailText";

interface GuardianDetailsCardProps {
	guardianModel: guardianModel,
}

export default function GuardianDetailsCard(props : GuardianDetailsCardProps) {
	return (
		<DetailsCard style={{ gap: 6 }}>
			<AppText style={{ paddingBottom: 12 }} fontSize={20} lineHeight={24} fontWeight={fontWeight.semibold}>Parent/Guardian Details</AppText>
			
			<DetailText detailName="Full Name:" detailValue={`${props.guardianModel.firstName} ${props.guardianModel.otherNames.join(" ")} ${props.guardianModel.surname}`} />
			<DetailText detailName="Postal Address:" detailValue={props.guardianModel.postalAddress} />
			<DetailText detailName="Physical Address:" detailValue={props.guardianModel.physicalAddress} />
			<DetailText detailName="Home Village:" detailValue={props.guardianModel.homeVillage} />
			<DetailText detailName="Traditional Authority:" detailValue={props.guardianModel.traditionalAuthority} />
			<DetailText detailName="District:" detailValue={props.guardianModel.district} />
			<DetailText detailName="Phone number:" detailValue={props.guardianModel.phoneNumber} />
			<DetailText detailName="Occupation:" detailValue={props.guardianModel.occupation} />
			
			<SecondaryButton text="Edit" />
		</DetailsCard>
	);
}