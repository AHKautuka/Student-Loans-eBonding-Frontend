import { Image, Text, View } from "react-native";
import AppText, { fontWeight } from "../text/AppText";
import DetailNameText from "../text/DetailNameText";
import DetailsCard from "./DetailsCard";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { urlStudents, urlUsers } from "@/utils/endpoints";
import { userReadDTO } from "@/dtos/users";
import { studentReadDTO } from "@/dtos/students";

interface StudentDocumentsCardProps{
	nationalIDURL?: string;
	studentIDURL?: string;
	signatureURL?: string;
}

export default function StudentDocumentsCard(props: StudentDocumentsCardProps) {	
	return (
		<DetailsCard style={{ gap: 12 }}>
			<AppText fontSize={20} lineHeight={24} fontWeight={fontWeight.semibold}>Documents</AppText>
			
			<View style={{ gap: 32, paddingBottom: 12 }}>
				<View style={{ gap: 16 }}>
					<DetailNameText>National ID Scan:</DetailNameText>
					<Image width={284} height={284} src={props.nationalIDURL} style={{ alignSelf: "center" }}/>
				</View>
				
				<View style={{ gap: 16 }}>
					<DetailNameText>Student ID Scan:</DetailNameText>
					<Image width={284} height={284} src={props.studentIDURL} style={{ alignSelf: "center" }}/>
				</View>
				
				<View style={{ gap: 16 }}>
					<DetailNameText>Signature Scan:</DetailNameText>
					<Image width={284} height={284} src={props.signatureURL} style={{ alignSelf: "center" }}/>
				</View>
			</View>
		</DetailsCard>
	);
}