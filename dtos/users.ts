export interface userReadDTO {
	id: number;
	accountId: string;
	firstName?: string;
	surname?: string;
	otherNames?: string[];
	signature?: string;
	profilePicture?: string;
}

export interface userModel {
	id: number;
	accountId: string;
	firstName: string;
	surname: string;
	otherNames: string[];
	signature?: string;
	profilePicture?: string;
}

export const defaultUserModel: userModel = {
	id: 0,
	accountId: "",
	firstName: "",
	surname: "",
	otherNames: [],
	signature: undefined,
	profilePicture: undefined,
}

export function convertUserDTOtoModel(dto: userReadDTO): userModel {
	return {
		id: dto.id,
		accountId: dto.accountId,
		firstName: dto.firstName ?? "",
		surname: dto.surname ?? "",
		otherNames: dto.otherNames ?? [],
		signature: dto.signature,
		profilePicture: dto.profilePicture,
	}
}