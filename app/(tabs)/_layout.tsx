import Logo from "@/components/Logo";
import AuthenticationContext from "@/contexts/AuthenticationContext";
import { role } from "@/dtos/authentication";
import { isAuthorized } from "@/utils/authorized";
import { FontAwesome6 } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { useContext } from "react";

export default function TabLayout() {
	const { claims } = useContext(AuthenticationContext);
	
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
			<Tabs.Screen 
				name="loan-amount"
				options={{
					title: 'Loan',
					tabBarIcon: ({ color }) => <FontAwesome6 size={28} name="file" color={color} />,
				}}
			/>
		</Tabs>
	);
}