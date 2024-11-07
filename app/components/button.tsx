import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  style?: string; // Allow Tailwind CSS styles
}

const Button: React.FC<ButtonProps> = ({ title, onPress, disabled = false, style }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      className={`bg-yellow-600 py-3 px-6 rounded-md items-center justify-center ${disabled ? 'bg-gray-400' : ''} ${style}`} // Tailwind classes
    >
      <Text className={`text-black font-bold text-lg ${disabled ? 'opacity-50' : ''}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
