import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import InputField from '../../components/input-field';
import Toast from 'react-native-toast-message';

export default function PersonalDetails() {
    const [fullName, setFullName] = useState('');
    const [dob, setDob] = useState('');
    const [Sex, setSex] = useState('');
    const [Address, setAddress] = useState('');
    const [Village, setVillage] = useState('');
    const [TA, setTA] = useState('');
    const [District, setDistrict] = useState('');
    const [Number, setNumber] = useState('');
    const [ID, setID] = useState('');

    const handleReset = () => {
        setFullName('');
        setDob('');
        setSex('');
        setAddress('');
        setVillage('');
        setTA('');
        setDistrict('');
        setNumber('');
        setID('');


        
        Toast.show({
            type: 'info',
            text1: 'Changes Reset',
            text2: 'Your changes have been reset to defaults.',
        });
    };

    const handleSave = () => {
        // Logic to save changes goes here
        Toast.show({
            type: 'success',
            text1: 'Changes Saved',
            text2: 'Your personal details have been saved successfully.',
            
        });
    };

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
            <Text className="text-4xl font-bold mb-6 text-center">Edit Your Personal Details</Text>

            <View className="mb-6">
                <Text className="text-lg font-semibold mb-2">Full Name</Text>
                <InputField
                    placeholder='Enter Full Name'
                    value={fullName}
                    onChangeText={setFullName}
                    inputMode='text'
                    className="h-12 border border-gray-300 rounded-lg px-3 shadow-sm"
                />
            </View>

            <View className="mb-6">
                <Text className="text-lg font-semibold mb-2">Date Of Birth</Text>
                <InputField
                    placeholder='Enter Date of Birth'
                    value={dob}
                    onChangeText={setDob}
                    inputMode='text'
                    className="h-12 border border-gray-300 rounded-lg px-3 shadow-sm"
                />
            </View>

            <View className="mb-6">
                <Text className="text-lg font-semibold mb-2">Sex</Text>
                <InputField
                    placeholder='Current Sex'
                    value={Sex}
                    onChangeText={setSex}
                    inputMode='text'
                    className="h-12 border border-gray-300 rounded-lg px-3 shadow-sm"
                />
            </View>

            <View className="mb-6">
                <Text className="text-lg font-semibold mb-2">Postal Address</Text>
                <InputField
                    placeholder='Current Postal Address'
                    value={Address}
                    onChangeText={setAddress}
                    inputMode='text'
                    className="h-12 border border-gray-300 rounded-lg px-3 shadow-sm"
                />
            </View>


            <View className="mb-6">
                <Text className="text-lg font-semibold mb-2">Home Village</Text>
                <InputField
                    placeholder='Current Home Village'
                    value={Village}
                    onChangeText={setVillage}
                    inputMode='text'
                    className="h-12 border border-gray-300 rounded-lg px-3 shadow-sm"
                />
            </View>

            <View className="mb-6">
                <Text className="text-lg font-semibold mb-2">Traditional Authority</Text>
                <InputField
                    placeholder='Current T/A'
                    value={TA}
                    onChangeText={setTA}
                    inputMode='text'
                    className="h-12 border border-gray-300 rounded-lg px-3 shadow-sm"
                />
            </View>

            <View className="mb-6">
                <Text className="text-lg font-semibold mb-2">District</Text>
                <InputField
                    placeholder='Current District'
                    value={District}
                    onChangeText={setDistrict}
                    inputMode='text'
                    className="h-12 border border-gray-300 rounded-lg px-3 shadow-sm"
                />
            </View>

            <View className="mb-6">
                <Text className="text-lg font-semibold mb-2">Phone Number</Text>
                <InputField
                    placeholder='Current Phone Number'
                    value={Number}
                    onChangeText={setNumber}
                    inputMode='text'
                    className="h-12 border border-gray-300 rounded-lg px-3 shadow-sm"
                />
            </View>

            <View className="mb-6">
                <Text className="text-lg font-semibold mb-2">National ID Number</Text>
                <InputField
                    placeholder='National ID Number'
                    value={ID}
                    onChangeText={setID}
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

