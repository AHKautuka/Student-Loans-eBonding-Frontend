import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import InputField from '../../../components/input-field';
import Toast from 'react-native-toast-message';
import axios from 'axios';
import { urlAccounts } from '@/utils/endpoints';

export default function BankDetails() {}
    const [BankName, setBankName] = useState('');
    const [BranchName, setBranchName] = useState('');
    const [AccountName, setAccountName] = useState('');
    const [AccountNumber, setAccountNumber] = useState('');

    const handleReset = () => {
        setBankName('');
        setBranchName('');
        setAccountName('');
        setAccountNumber('');
    
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
                BankName,
                BranchName,
                AccountName,
                AccountNumber,
              
            })
        }catch (error) {
            throw new Error(`Unable to save changes ${error}`)
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
            <Text className="text-4xl font-bold mb-6 text-center">Edit Your Bank Details</Text>

            <View className="mb-6">
                <Text className="text-lg font-semibold mb-2">Bank Name</Text>
                <InputField
                    placeholder='Current Bank Name'
                    value={BankName}
                    onChangeText={setBankName}
                    inputMode='text'
                    className="h-12 border border-gray-300 rounded-lg px-3 shadow-sm"
                />
            </View>

            <View className="mb-6">
                <Text className="text-lg font-semibold mb-2">Branch Name</Text>
                <InputField
                    placeholder='Current Branch Name'
                    value={BranchName}
                    onChangeText={setBranchName}
                    inputMode='text'
                    className="h-12 border border-gray-300 rounded-lg px-3 shadow-sm"
                />
            </View>

            <View className="mb-6">
                <Text className="text-lg font-semibold mb-2">Account Name</Text>
                <InputField
                    placeholder='Current Account Name'
                    value={AccountName}
                    onChangeText={setAccountName}
                    inputMode='text'
                    className="h-12 border border-gray-300 rounded-lg px-3 shadow-sm"
                />
            </View>

            <View className="mb-6">
                <Text className="text-lg font-semibold mb-2">Account Number</Text>
                <InputField
                    placeholder='Current Account Number'
                    value={AccountNumber}
                    onChangeText={setAccountNumber}
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
