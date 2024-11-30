import { claim, role } from "@/dtos/authentication";

const whitespaceOrCommaRegExp: RegExp = /([\s,]+)/g;

export function isAuthorized(claims: claim[], authorizedRoles: role[]) {
	if (claims.length <= 0) {
		return false; // Not Authenticated
	}
	
	if (authorizedRoles.length <= 0) {
		return true; // Authenticated and No Roles required
	}
	
	const userRoles = getUserRoles(claims);
	
	if (!userRoles) {
		return false; // Authenticated but Not Authorized
	}
	
	for (let i = 0; i < authorizedRoles.length; i++) {
		const userHasRole = userRoles.includes(authorizedRoles[i].toString());
		if (userHasRole) {
			return true; // Authenticated and Authorized
		}
	};
	
	return false; // Authenticated but Not Authorized
}

export function getUserRoles(claims: claim[]) {
	return claims.filter(x => x.name === "roles")?.at(0)?.value?.split(',');
}