import PrimaryButton from "@/components/buttons/PrimaryButton";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import TextField from "@/components/TextField";
import { emailPattern, fieldRequired, maxEmailLength, maxPasswordLength, minPasswordLength } from "@/utils/validation";
import { Link } from "expo-router";
import { Controller, useForm } from "react-hook-form";
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
	
	return (
		<View className="flex flex-col items-center bg-[#F6F6F6]">
			<View className="justify-center items-center w-32 h-32 m-16 bg-[#C9C9C9]"><Text>Image Placeholder</Text></View>
			
			<View style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }} className="w-full h-screen p-8 bg-white border-t border-x border-[#959595]">
				<Text className="text-4xl font-semibold pb-8">Sign In to Account</Text>
				
				<View className="flex flex-col gap-6">
					<Controller
						control={control}
						rules={{ required: fieldRequired, pattern: emailPattern, maxLength: maxEmailLength }}
						render={() => (
							<TextField
								placeholder="Enter email address"
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
							/>
						)}
						name="password"
					/>
				</View>
				
				<View className="flex flex-col fixed bottom-12 gap-8 items-center self-center">
					<Link href="/">
						<PrimaryButton text="Sign In" />
					</Link>
					<Link href="/sign-up">
						<SecondaryButton text="Go to Register New Account" />
					</Link>
				</View>
			</View>
		</View>
	);
}