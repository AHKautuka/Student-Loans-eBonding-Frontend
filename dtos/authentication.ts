export interface claim {
	name: string;
	value: string;
};

export interface userCredentials {
	email: string;
	password: string;
};

export interface authenticationResponse {
	token: string;
	expiration: Date;
};

export enum role {
	Student = "Student",
	LoansOfficial = "LoansBoardOfficial",
	SchoolAdmin = "InstitutionAdministrator",
};