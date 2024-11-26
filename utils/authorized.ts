import { claim, role } from "@/dtos/authentication";

const whitespaceOrCommaRegExp: RegExp = /([\s,]+)/g;

export function isAuthorized(claims: claim[], authorizedRoles: role[]) {
	if (claims.length <= 0) {
		return false; // Not Authenticated
	}
	
	if (authorizedRoles.length <= 0) {
		return true; // Authenticated and No Roles required
	}
	
	const userRoles = claims.filter(x => x.name === "roles")[0]?.value.split(whitespaceOrCommaRegExp);
	
	for (const authorizedRole in authorizedRoles) {
		const userHasRole = userRoles.includes(authorizedRole);
		if (userHasRole) {
			return true; // Authenticated and Authorized
		}
	};
	
	return false; // Authenticated but Not Authorized
}