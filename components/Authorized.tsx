import AuthenticationContext from "@/contexts/AuthenticationContext";
import { role } from "@/dtos/authentication";
import { ReactElement, useContext, useEffect, useState } from "react";

interface authorizedProps {
	authorized: ReactElement;
	notAuthorized?: ReactElement;
}

export default function Authorized(props: authorizedProps) {
	const [isAuthorized, setIsAuthorized] = useState(false);
	const { claims } = useContext(AuthenticationContext);
	
	useEffect(() => {
		setIsAuthorized(claims.length > 0);
	}, [claims]);
	
	return (
		<>
			{isAuthorized ? props.authorized : props.notAuthorized}
		</>
	);
}