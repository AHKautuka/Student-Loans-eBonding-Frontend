export interface claim {
	name: string;
	value: string;
};

export interface userCredentials {
	email: string;
	password: string;
};

export interface authenticationResponse {
	accountId: string;
	token: string;
	expiration: Date;
};

export enum role {
	User = "User",
	Student = "Student",
	LoansBoardOfficial = "LoansBoardOfficial",
	InstitutionAdmin = "InstitutionAdmin",
	SystemAdmin = "SystemAdmin"
};