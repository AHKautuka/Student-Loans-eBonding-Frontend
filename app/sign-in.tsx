import PrimaryButton from "@/components/buttons/PrimaryButton";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import HeadingText from "@/components/text/HeadingText";
import TextField from "@/components/TextField";
import AuthenticationContext from "@/contexts/AuthenticationContext";
import { authenticationResponse, userCredentials } from "@/dtos/authentication";
import { urlAccounts } from "@/utils/endpoints";
import { getClaims, saveToken } from "@/utils/handleJWT";
import { emailPattern, fieldRequired, maxEmailLength, maxPasswordLength, minPasswordLength } from "@/utils/validation";
import axios from "axios";
import { router, useNavigation } from "expo-router";
import { useContext, useEffect } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { ScrollView, Text, View } from "react-native";

interface IFormInput {
	email: string;
	password: string;
}

export default function SignIn() {
	const navigation = useNavigation();
	
	useEffect(() => {
	  navigation.setOptions({ headerShown: false });
	}, [navigation]);
	
	const {
		control,
		handleSubmit,
		formState: { errors },
		setError,
	} = useForm<IFormInput>({
		defaultValues: {
			email: '',
			password: '',
		}
	});
	
	const { update } = useContext(AuthenticationContext);
	
	async function logIntoAccount(credentials: userCredentials) {
		try {
			const response = await axios.post<authenticationResponse>(`${urlAccounts}/login`, credentials);
			await saveToken(response.data);
			update(await getClaims());
			router.replace("/home");
			router.dismissAll();
		} catch (error: any) {
			setError("root", { message: error.message });
		}
	}
	
	const onSubmit: SubmitHandler<IFormInput> = (data) => {
		logIntoAccount({ email: data.email, password: data.password });
	}
	
	return (
		<ScrollView className="bg-[#F6F6F6]">
			<View className="flex flex-col h-screen items-center">
				<View className="justify-center items-center w-32 h-32 m-16 bg-[#C9C9C9]"><Text>Image Placeholder</Text></View>
				
				<View style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }} className="flex-auto w-full min-h-fit p-8 bg-white border-t border-x border-[#959595]">
					<HeadingText>Sign In to Account</HeadingText>
					
					<View className="flex flex-col gap-4">
						<View className="gap-2">
							<Controller
								control={control}
								rules={{ required: fieldRequired, pattern: emailPattern, maxLength: maxEmailLength }}
								render={({ field: { onChange, onBlur, value } }) => (
									<TextField
										placeholder="Enter email address"
										onBlur={onBlur}
										onChangeText={onChange}
										value={value}
									/>
								)}
								name="email"
							/>
							{
								errors.email?.message ? <Text className="text-base font-semibold text-red-600">{errors.email?.message}</Text> : <View className="h-[1.5rem]" />
							}
						</View>
						<View className="gap-2">
							<Controller
								control={control}
								rules={{ required: fieldRequired, minLength: minPasswordLength, maxLength: maxPasswordLength }}
								render={({ field: { onChange, onBlur, value } }) => (
									<TextField
										placeholder="Enter password"
										onBlur={onBlur}
										onChangeText={onChange}
										value={value}
										secureTextEntry={true}
									/>
								)}
								name="password"
							/>
							{
								errors.password?.message ? <Text className="text-base font-semibold text-red-600">{errors.password?.message}</Text> : <View className="h-[1.5rem]" />
							}
						</View>
					</View>
					{
						errors.root?.message ? <Text className="text-base font-semibold text-red-600">{errors.root?.message}</Text> : <View className="h-[1.5rem]" />
					}
					
					<View className="flex flex-col mt-8 mb-12 gap-8 items-center self-center">
						<PrimaryButton text="Sign In" onPress={handleSubmit(onSubmit)} />
						<SecondaryButton text="Go to Sign Up" onPress={() => router.push("/sign-up")} />
					</View>
				</View>
			</View>
		</ScrollView>
	);
}