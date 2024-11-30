import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import InputField from '../../../components/input-field';
import Toast from 'react-native-toast-message';
import { urlAccounts } from '@/utils/endpoints';
import axios from 'axios';

export default function StudyDetails() {
    const [InstitutionName, setInstitutionName] = useState('');
    const [ProgrammeOfStudy, setProgrammeOfStudy] = useState('');
    const [RegistrationNumber, setRegistrationNumber] = useState('');
    const [AcademicYear, setAcademicYear] = useState('');
    const [YearOfStudy, setYearOfStudy] = useState('');

    const handleReset = () => {
        setInstitutionName('');
        setProgrammeOfStudy('');
        setRegistrationNumber('');
        setAcademicYear('');
        setYearOfStudy('')
       
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
                InstitutionName,
                ProgrammeOfStudy,
                RegistrationNumber,
                AcademicYear,
                YearOfStudy,
            
            })
        }catch (error) {
            throw new Error(`Unable to save changes ${error}`)
        }

    const handleSave = async () => {
        // Logic to save changes goes here
        try {
            const response = await axios.put(urlAccounts, { 
                InstitutionName,
                ProgrammeOfStudy,
                RegistrationNumber,
                AcademicYear,
                YearOfStudy,
               
            })
        }catch (error) {
            throw new Error(`Unable to save changes ${error}`)
        }


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
            <Text className="text-4xl font-bold mb-6 text-center">Edit Your Student Study Details</Text>

            <View className="mb-6">
                <Text className="text-lg font-semibold mb-2">Institution Name</Text>
                <InputField
                    placeholder='Institution Name'
                    value={InstitutionName}
                    onChangeText={setInstitutionName}
                    inputMode='text'
                    className="h-12 border border-gray-300 rounded-lg px-3 shadow-sm"
                />
            </View>

            <View className="mb-6">
                <Text className="text-lg font-semibold mb-2">Programme Of Study</Text>
                <InputField
                    placeholder='Programme Of Study'
                    value={ProgrammeOfStudy}
                    onChangeText={setProgrammeOfStudy}
                    inputMode='text'
                    className="h-12 border border-gray-300 rounded-lg px-3 shadow-sm"
                />
            </View>

            <View className="mb-6">
                <Text className="text-lg font-semibold mb-2">Registration Number</Text>
                <InputField
                    placeholder='Registration Number'
                    value={RegistrationNumber}
                    onChangeText={setRegistrationNumber}
                    inputMode='text'
                    className="h-12 border border-gray-300 rounded-lg px-3 shadow-sm"
                />
            </View>

            <View className="mb-6">
                <Text className="text-lg font-semibold mb-2">Academic Year</Text>
                <InputField
                    placeholder='Current Academic Year'
                    value={AcademicYear}
                    onChangeText={setAcademicYear}
                    inputMode='text'
                    className="h-12 border border-gray-300 rounded-lg px-3 shadow-sm"
                />
            </View>

            
            <View className="mb-6">
                <Text className="text-lg font-semibold mb-2">Year Of Study</Text>
                <InputField
                    placeholder='Current Year Of Study'
                    value={YearOfStudy}
                    onChangeText={setYearOfStudy}
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
    }
}

function setPostalAddress(arg0: string) {
    throw new Error('Function not implemented.');
}