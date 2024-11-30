export interface studentReadDTO {
	id: number;
	accountId: string;
	dateOfBirth?: Date;
	sex?: string;
	postalAddress?: string;
	homeVillage?: string;
	traditionalAuthority?: string;
	district?: string;
	phoneNumber?: string;
	nationalIdNumber?: string;
	bankName?: string;
	branchName?: string;
	bankAccountName?: string;
	bankAccountNumber?: string;
	guardian?: guardianReadDTO;
	institutionName?: string;
	programmeOfStudy?: string;
	registrationNumber?: string;
	academicYear?: string;
	yearOfStudy?: 1 | 2 | 3 | 4 | 5 | 6;
	nationalIdScan?: string;
	studentIdScan?: string;
}

export interface guardianReadDTO {
	firstName?: string;
	surname?: string;
	otherNames?: string[];
	postalAddress?: string;
	physicalAddress?: string;
	homeVillage?: string;
	traditionalAuthority?: string;
	district?: string;
	phoneNumber?: string;
	occupation?: string;
}

export interface studentModel {
	id: number;
	accountId: string;
	dateOfBirth?: Date;
	sex: string;
	postalAddress: string;
	homeVillage: string;
	traditionalAuthority: string;
	district: string;
	phoneNumber: string;
	nationalIdNumber: string;
	bankName: string;
	branchName: string;
	bankAccountName: string;
	bankAccountNumber: string;
	guardian: guardianModel;
	institutionName: string;
	programmeOfStudy: string;
	registrationNumber: string;
	academicYear: string;
	yearOfStudy?: 1 | 2 | 3 | 4 | 5 | 6;
	nationalIdScan?: string;
	studentIdScan?: string;
}

export interface guardianModel {
	firstName: string;
	surname: string;
	otherNames: string[];
	postalAddress: string;
	physicalAddress: string;
	homeVillage: string;
	traditionalAuthority: string;
	district: string;
	phoneNumber: string;
	occupation: string;
}

export const defaultGuardianModel: guardianModel = {
	firstName: "",
	surname: "",
	otherNames: [],
	postalAddress: "",
	physicalAddress: "",
	homeVillage: "",
	traditionalAuthority: "",
	district: "",
	phoneNumber: "",
	occupation: "",
}

export const defaultStudentModel: studentModel = {
	id: 0,
	accountId: "",
	dateOfBirth: undefined,
	sex: "",
	postalAddress: "",
	homeVillage: "",
	traditionalAuthority: "",
	district: "",
	phoneNumber: "",
	nationalIdNumber: "",
	bankName: "",
	branchName: "",
	bankAccountName: "",
	bankAccountNumber: "",
	guardian: defaultGuardianModel,
	institutionName: "",
	programmeOfStudy: "",
	registrationNumber: "",
	academicYear: "",
	yearOfStudy: undefined,
	nationalIdScan: undefined,
	studentIdScan: undefined,
}

export function convertStudentDTOtoModel(dto: studentReadDTO): studentModel {
	return {
		id: dto.id,
		accountId: dto.accountId,
		dateOfBirth: dto.dateOfBirth,
		sex: dto.sex ?? "",
		postalAddress: dto.postalAddress ?? "",
		homeVillage: dto.homeVillage ?? "",
		traditionalAuthority: dto.traditionalAuthority ?? "",
		district: dto.district ?? "",
		phoneNumber: dto.phoneNumber ?? "",
		nationalIdNumber: dto.nationalIdNumber ?? "",
		bankName: dto.bankName ?? "",
		branchName: dto.branchName ?? "",
		bankAccountName: dto.bankAccountName ?? "",
		bankAccountNumber: dto.bankAccountNumber ?? "",
		guardian: convertGuardianDTOtoModel(dto.guardian ?? defaultGuardianModel),
		institutionName: dto.institutionName ?? "",
		programmeOfStudy: dto.programmeOfStudy ?? "",
		registrationNumber: dto.registrationNumber ?? "",
		academicYear: dto.academicYear ?? "",
		yearOfStudy: dto.yearOfStudy,
		nationalIdScan: dto.nationalIdScan,
		studentIdScan: dto.studentIdScan,
	}
}

export function convertGuardianDTOtoModel(dto: guardianReadDTO): guardianModel {
	return {
		firstName: dto.firstName ?? "",
		surname: dto.surname ?? "",
		otherNames: dto.otherNames ?? [],
		postalAddress: dto.postalAddress ?? "",
		physicalAddress: dto.physicalAddress ?? "",
		homeVillage: dto.homeVillage ?? "",
		traditionalAuthority: dto.traditionalAuthority ?? "",
		district: dto.district ?? "",
		phoneNumber: dto.phoneNumber ?? "",
		occupation: dto.occupation ?? "",
	}
}