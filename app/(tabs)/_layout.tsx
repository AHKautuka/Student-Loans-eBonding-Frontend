import { FontAwesome6 } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
	return (
		<Tabs screenOptions={{ headerStyle: { height: 76 }, headerTitle: "", tabBarStyle: { height: 76 }, tabBarLabelPosition: "below-icon", tabBarLabelStyle: { fontFamily: "Inter", fontSize: 12 }, tabBarActiveTintColor: "#997B2F" }}>
			<Tabs.Screen
				name="home"
				options={{
					title: 'Home',
					tabBarIcon: ({ color }) => <FontAwesome6 size={24} name="house" color={color} />,
				}}
			/>
		</Tabs>
	);
}