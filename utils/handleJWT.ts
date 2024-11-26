import { authenticationResponse, claim } from "@/dtos/authentication";
import { clear, getItem, removeItem, setItem } from "./asyncStorage";

const accountId = 'account-id';
const tokenKey = 'token';
const expirationKey = "token-expiration";

export async function saveToken(authData: authenticationResponse) {
	await setItem(accountId, authData.accountId);
	await setItem(tokenKey, authData.token);
	await setItem(expirationKey, authData.expiration.toString());
}

export async function getClaims(): Promise<claim[]> {
	const token = await getItem(tokenKey);
	
	if (!token) {
		return [];
	}
	
	const expiration = (await getItem(expirationKey))!;
	const expirationDate = new Date(expiration);
	
	if (expirationDate <= new Date()) {
		logOut();
		return []; // the token has expired
	}
	
	const dataToken = JSON.parse(atob(token.split('.')[1]));
	const response: claim[] = [];
	for (const property in dataToken) {
		response.push({ name: property, value: dataToken[property]});
	}
	
	return response;
}

export async function logOut() {
	await clear();
}

export async function getToken() {
	return await getItem(tokenKey);
}

export async function getAccountId() {
	return await getItem(accountId);
}