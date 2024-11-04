import PrimaryButton from "@/components/buttons/PrimaryButton";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import TextField from "@/components/TextField";
import AuthenticationContext from "@/contexts/AuthenticationContext";
import { authenticationResponse, userCredentials } from "@/dtos/authentication";
import { urlAccounts } from "@/utils/endpoints";
import { getClaims, saveToken } from "@/utils/handleJWT";
import { emailPattern, fieldRequired, maxEmailLength, maxPasswordLength, minPasswordLength } from "@/utils/validation";
import axios from "axios";
import { Link, router } from "expo-router";
import { useContext } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Text, View } from "react-native";

interface IFormInput {
	email: string;
	password: string;
}

export default function SignIn() {
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
			router.navigate("/");
		} catch (error: any) {
			setError("root", { message: error.message });
		}
	}
	
	const onSubmit: SubmitHandler<IFormInput> = (data) => {
		logIntoAccount({ email: data.email, password: data.password });
	}
	
	return (
		<View className="flex flex-col items-center bg-[#F6F6F6]">
			<View className="justify-center items-center w-32 h-32 m-16 bg-[#C9C9C9]"><Text>Image Placeholder</Text></View>
			
			<View style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }} className="w-full h-screen p-8 bg-white border-t border-x border-[#959595]">
				<Text className="text-4xl font-semibold pb-8">Sign In to Account</Text>
				
				<View className="flex flex-col gap-6">
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
					<Controller
						control={control}
						rules={{ required: fieldRequired, minLength: minPasswordLength, maxLength: maxPasswordLength }}
						render={({ field: { onChange, onBlur, value } }) => (
							<TextField
								placeholder="Enter password"
								onBlur={onBlur}
								onChangeText={onChange}
								value={value}
							/>
						)}
						name="password"
					/>
				</View>
				
				<View className="flex flex-col fixed bottom-12 gap-8 items-center self-center">
					<Link href="/">
						<PrimaryButton text="Sign In" onPress={handleSubmit(onSubmit)} />
					</Link>
					<Link href="/sign-up">
						<SecondaryButton text="Go to Register New Account" />
					</Link>
				</View>
			</View>
		</View>
	);
}