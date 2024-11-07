import React from 'react';
import { TextInput, View } from 'react-native';

export default function InputField({ placeholder, value, onChangeText, inputmode }:any) {
  return (
    <View className={`flex justify-center items-center p-5`}>
      <TextInput
        className={`w-full  p-4 border font-semibold border-gray-400 rounded-md text-gray-600 bg-gray-300`}
        placeholder={placeholder}
        placeholderTextColor="black"
        value={value}
        onChangeText={onChangeText}
        keyboardType={inputmode} // Use keyboardType for proper input mode
      />
    </View>
  );
}
