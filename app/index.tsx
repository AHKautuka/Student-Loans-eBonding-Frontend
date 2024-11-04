import Authorized from "@/components/Authorized";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
	return (
		<Authorized
			authorized={<HomePage />}
			notAuthorized={<LandingPage />}
		/>
	);
}

function LandingPage() {
	return (
		<View className="flex flex-col gap-6 p-8 bg-[#F6F6F6]">
			<Text className="text-4xl font-semibold">Welcome to Student Loans eBonding</Text>
			<View className="justify-center items-center self-center w-[21.75rem] h-[20.3125rem] bg-[#C9C9C9]"><Text>Image Placeholder</Text></View>
			<Text className="text-xl font-semibold">This platform enables the loan bonding process to be completed digitally. Get started with an option below:</Text>
			
			<View className="flex flex-col fixed bottom-12 gap-8 items-center self-center">
				<Link href="/sign-up">
					<PrimaryButton text="Create Account" />
				</Link>
				<Link href="/sign-in">
					<SecondaryButton text="Already have an Account?" />
				</Link>
			</View>
		</View>
	);
}

function HomePage() {
	return (
		<View className="flex flex-col gap-6 p-8 bg-[#F6F6F6]">
			<Text className="text-4xl font-semibold">Home</Text>
		</View>
	);
}