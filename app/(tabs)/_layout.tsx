import Logo from "@/components/Logo";
import { FontAwesome6 } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
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
					title: 'Verify Bonding Form',
					tabBarIcon: ({ color }) => <FontAwesome6 size={24} name="file-circle-question" color={color} />,
				}}
			/>
		</Tabs>
	);
}