<<<<<<< HEAD
import PrimaryButton from "@/components/buttons/PrimaryButton";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import AuthenticationContext from "@/contexts/AuthenticationContext";
import { router } from "expo-router";
import React, { useContext, useEffect } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import HeadingText from "@/components/text/HeadingText";

export default function Index() {
	const { claims } = useContext(AuthenticationContext);
	
	useEffect(() => {
		if (claims.length > 0) {
			router.replace("/home");
		}
	}, [claims]);
	
	return (
		<ScrollView className="bg-[#F6F6F6]">
			<View className="flex flex-col gap-6 p-8">
				<HeadingText>Welcome to Student Loans eBonding</HeadingText>
				<Image style={{ alignSelf: "center", width: 348, height: 325 }} source={require('@/assets/images/landing-page-main-image.jpg')} />
				<Text className="text-xl font-semibold">This platform enables the loan bonding process to be completed digitally. Get started with an option below:</Text>
				
				<View className="flex flex-col pb-12 gap-8 items-center self-center">
					<PrimaryButton text="Create Account" onPress={() => router.navigate("/sign-up")} />
					<SecondaryButton text="Log into Account" onPress={() => router.navigate("/sign-in")} />
				</View>
			</View>
		</ScrollView>
	);
=======
import React from "react";
import { View } from "react-native";
import LoanAmount from "./screen/loan-amount";

export default function Index() {
  return (
     
      <LoanAmount/>
  );
<<<<<<< HEAD
>>>>>>> 4ad04bb (personal details)
}

=======
}
>>>>>>> 6d8bed3 (loan amounts, persistent details and bank details)
