import Logo from "@/components/Logo";
import AuthenticationContext from "@/contexts/AuthenticationContext";
import { claim, role } from "@/dtos/authentication";
import { getUserRoles, isAuthorized } from "@/utils/authorized";
import { urlAccounts } from "@/utils/endpoints";
import { getAccountId } from "@/utils/handleJWT";
import { FontAwesome6 } from "@expo/vector-icons";
import axios from "axios";
import { Tabs } from "expo-router";
import { useContext, useEffect } from "react";

export default function TabLayout() {
	const { claims } = useContext(AuthenticationContext);
	
	useEffect(() => {
		onMount(claims);
	}, [claims]);
	
	async function onMount(claims: claim[]) {
		try {
			const userRoles = getUserRoles(claims);
			
			if (userRoles?.includes(role.User)) {
				await axios.put(`${urlAccounts}/${await getAccountId()}/users`);
			}
			if (userRoles?.includes(role.Student)) {
				await axios.put(`${urlAccounts}/${await getAccountId()}/students`);
			}
		} catch (error: any) {
			if (error?.response) {
				console.log(error.response.data);
			} else if (error?.request) {
				console.log(error.request);
			} else {
				console.log(error.message);
			}
		}
	}
	
	return (
		<Tabs screenOptions={{
			headerStyle: { height: 76 },
			headerTitle: "",
			headerLeft: () => <Logo width={36} height={36} margin={24}/>,
			tabBarStyle: { height: 76 },
			tabBarLabelPosition: "below-icon",
			tabBarLabelStyle: { fontFamily: "Inter", fontSize: 12 },
			tabBarActiveTintColor: "#997B2F"
			}}>
			<Tabs.Screen
				name="home"
				options={{
					title: 'Home',
					tabBarIcon: ({ color }) => <FontAwesome6 size={24} name="house" color={color} />,
				}}
			/>
			<Tabs.Screen 
				name="bonding-form"
				options={{
					title: 'Bonding Form',
					href: isAuthorized(claims, [role.Student]) ? "/bonding-form" : null,
					tabBarIcon: ({ color }) => <FontAwesome6 size={28} name="file" color={color} />,
				}}
			/>
			<Tabs.Screen
				name="verification"
				options={{
					title: 'Verify Form',
					href: isAuthorized(claims, [role.LoansBoardOfficial, role.InstitutionAdmin]) ? "/verification" : null,
					tabBarIcon: ({ color }) => <FontAwesome6 size={24} name="file-circle-question" color={color} />,
				}}
			/>
			<Tabs.Screen
				name="bond-period/set"
				options={{
					title: 'Set Bonding Period',
					href: isAuthorized(claims, [role.LoansBoardOfficial]) ? "/bond-period/set" : null,
					tabBarIcon: ({ color }) => <FontAwesome6 size={24} name="calendar" color={color} />,
				}}
			/>
			<Tabs.Screen
				name="bond-period/view"
				options={{
					title: 'View Bonding Period',
					href: isAuthorized(claims, [role.LoansBoardOfficial]) ? "/bond-period/view" : null,
					tabBarIcon: ({ color }) => <FontAwesome6 size={24} name="calendar" color={color} />,
				}}
			/>
			<Tabs.Screen
				name="notifications"
				options={{
					title: 'Notifications',
					tabBarIcon: ({ color }) => <FontAwesome6 size={24} name="bell" color={color} />,
				}}
			/>
			<Tabs.Screen 
				name="profile"
				options={{
					title: 'Profile',
					tabBarIcon: ({ color }) => <FontAwesome6 size={28} name="circle-user" color={color} />,
				}}
			/>
		</Tabs>
	);
}