import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import InputField from '../../../components/input-field';
import Toast from 'react-native-toast-message';
import axios from 'axios';
import { urlAccounts } from '@/utils/endpoints';

export default function GuardianDetails() {
    const [fullName, setFullName] = useState('');
    const [PostalAdress, setPostalAdress] = useState('');
    const [PhysicalAdress, setPhysicalAdress] = useState('');
    const [Village, setVillage] = useState('');
    const [TA, setTA] = useState('');
    const [District, setDistrict] = useState('');
    const [Occupation, setOccupation] = useState('');
    const [PhoneNumber, setPhoneNumber] = useState('');

    const handleReset = () => {
        setFullName('');
        setPostalAddress('');
        setPhysicalAdress('');
        setVillage('');
        setTA('');
        setDistrict('');
        setOccupation('');
        setPhoneNumber('');

        Toast.show({
            type: 'info',
            text1: 'Changes Reset',
            text2: 'Your changes have been reset to defaults.',
        });
    };

    const handleSave = async () => {
        // Logic to save changes goes here
        try {
            const response = await axios.put(urlAccounts, {
                fullName,
                PostalAdress,
                PhysicalAdress,
                Village,
                TA,
                District,
                Occupation,
                PhoneNumber,
            })
			Toast.show({
				type: 'success',
				text1: 'Changes Saved',
				text2: 'Your personal details have been saved successfully.',
			});
        }catch (error) {
            throw new Error(`Unable to save changes ${error}`)
        }
	}

    const handleGoBack = () => {
        // Logic to navigate back goes here
        Toast.show({
            type: 'warning',
            text1: 'Changes Not Saved',
            text2: 'You have navigated back without saving changes.',
        });
    };

    return (
        <ScrollView className="flex-1 bg-gray-50" contentContainerStyle={{ padding: 20 }}>
            <Text className="text-4xl font-bold mb-6 text-center">Edit Your Guardian Details</Text>

            <View className="mb-6">
                <Text className="text-lg font-semibold mb-2">Guardian's Full Name</Text>
                <InputField
                    placeholder='Cuttent Full Name'
                    value={fullName}
                    onChangeText={setFullName}
                    inputMode='text'
                    className="h-12 border border-gray-300 rounded-lg px-3 shadow-sm"
                />
            </View>

            <View className="mb-6">
                <Text className="text-lg font-semibold mb-2">Guardians Postal Address</Text>
                <InputField
                    placeholder='Current Postal Address'
                    value={'Postal Address'}
                    onChangeText={setPostalAddress}
                    inputMode='text'
                    className="h-12 border border-gray-300 rounded-lg px-3 shadow-sm"
                />
            </View>

            <View className="mb-6">
                <Text className="text-lg font-semibold mb-2">Guardian's Physical Adress</Text>
                <InputField
                    placeholder='Physical Address'
                    value={'Physical Address'}
                    onChangeText={setPhysicalAdress}
                    inputMode='text'
                    className="h-12 border border-gray-300 rounded-lg px-3 shadow-sm"
                />
            </View>


            <View className="mb-6">
                <Text className="text-lg font-semibold mb-2">Guardians's Home Village</Text>
                <InputField
                    placeholder='Current Home Village'
                    value={Village}
                    onChangeText={setVillage}
                    inputMode='text'
                    className="h-12 border border-gray-300 rounded-lg px-3 shadow-sm"
                />
            </View>

            <View className="mb-6">
                <Text className="text-lg font-semibold mb-2">Guardian's Traditional Authority</Text>
                <InputField
                    placeholder='Current T/A'
                    value={TA}
                    onChangeText={setTA}
                    inputMode='text'
                    className="h-12 border border-gray-300 rounded-lg px-3 shadow-sm"
                />
            </View>

            <View className="mb-6">
                <Text className="text-lg font-semibold mb-2">Guardian's District</Text>
                <InputField
                    placeholder='Current District'
                    value={District}
                    onChangeText={setDistrict}
                    inputMode='text'
                    className="h-12 border border-gray-300 rounded-lg px-3 shadow-sm"
                />
            </View>

            <View className="mb-6">
                <Text className="text-lg font-semibold mb-2">Guardian's occupation</Text>
                <InputField
                    placeholder='Current Occupation'
                    value={Occupation}
                    onChangeText={setOccupation}
                    inputMode='text'
                    className="h-12 border border-gray-300 rounded-lg px-3 shadow-sm"
                />
            </View>

            <View className="mb-6">
                <Text className="text-lg font-semibold mb-2">Guardian's Phone Number</Text>
                <InputField
                    placeholder='Current Phone Number'
                    value={Number}
                    onChangeText={setPhoneNumber}
                    inputMode='text'
                    className="h-12 border border-gray-300 rounded-lg px-3 shadow-sm"
                />
            </View>

    
            <View className="space-y-4">
                <TouchableOpacity
                    onPress={handleReset}
                    className="bg-gray-400 py-3 rounded-md items-center mb-4"
                >
                    <Text className="text-white font-bold text-lg">Reset Changes</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={handleSave}
                    className="bg-yellow-600 py-3 rounded-md items-center mb-4"
                >
                    <Text className="text-white font-bold text-lg">Save Changes</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    // onPress={handleGoBack}
                    className="bg-white border border-orange-500 py-3 rounded-md items-center"
                >
                    <Text className="text-orange-500 font-bold text-lg">Go Back Without Saving</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
function setPostalAddress(arg0: string) {
    throw new Error('Function not implemented.');
}

