import { authenticationResponse, claim } from "@/dtos/authentication";
import { clear, getItem, removeItem, setItem } from "./asyncStorage";
import axios from "axios";
import { urlAccounts } from "./endpoints";

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
	const claims: claim[] = [];
	for (const property in dataToken) {
		claims.push({ name: property, value: dataToken[property]});
	}
	
	try {
		const response = await axios.get<string[]>(`${urlAccounts}/${await getAccountId()}/roles`);
		const roles = response.data;
		claims.push({ name: "roles", value: roles.join(",") });
	} catch (error: any) {
		if (error?.response) {
			console.log(error.response.data);
		} else {
			console.log(error.message)
		}
	}
	
	return claims;
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