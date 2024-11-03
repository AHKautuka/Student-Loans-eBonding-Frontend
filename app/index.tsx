import PrimaryButton from "@/components/buttons/PrimaryButton";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import { Link } from "expo-router";
import { Modal, Text, View } from "react-native";

export default function Index() {
	return (
		<>
			
			<View className="flex flex-col gap-6 p-8 bg-[#F6F6F6]">
				
				<Text className="text-4xl font-semibold">Welcome to Student Loans eBonding</Text>
				<View className="justify-center items-center w-full h-80 bg-[#C9C9C9]"><Text>Image Placeholder</Text></View>
				<Text className="text-xl font-semibold">This platform enables the loan bonding process to be completed digitally. Get started with an option below:</Text>
				
				<View className="flex flex-col gap-8 items-center">
					<Link href="/sign-up">
						<PrimaryButton text="Create Account" />
					</Link>
					<Link href="/sign-in">
						<SecondaryButton text="Already have an Account?" />
					</Link>
				</View>
			</View>
		</>
	);
}
