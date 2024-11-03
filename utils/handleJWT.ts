import { authenticationResponse, claim } from "@/dtos/authentication";
import { router } from "expo-router";

const tokenKey = 'token';
const expirationKey = "token-expiration";

export function saveToken(authData: authenticationResponse) {
	localStorage.setItem(tokenKey, authData.token);
	localStorage.setItem(expirationKey, authData.expiration.toString());
}

export function getClaims(): claim[] {
	const token = localStorage.getItem(tokenKey);
	
	if (!token) {
		return [];
	}
	
	const expiration = localStorage.getItem(expirationKey)!;
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

export function logOut() {
	localStorage.removeItem(tokenKey);
	localStorage.removeItem(expirationKey);
	router.navigate("/");
}

export function getToken() {
	return localStorage.getItem(tokenKey);
}