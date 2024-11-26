import AuthenticationContext from "@/contexts/AuthenticationContext";
import { role } from "@/dtos/authentication";
import { isAuthorized } from "@/utils/authorized";
import { ReactElement, useContext, useEffect, useState } from "react";

interface authorizedProps {
	authorized: ReactElement;
	notAuthorized?: ReactElement;
	authorizedRoles?: role[];
}

export default function Authorized(props: authorizedProps) {
	const { claims } = useContext(AuthenticationContext);
	
	const [authorized, setAuthorized] = useState(false);
	
	useEffect(() => {
		setAuthorized(isAuthorized(claims, props.authorizedRoles ?? []));
	}, [claims]);
	
	return (
		<>
			{authorized ? props.authorized : props.notAuthorized}
		</>
	);
}