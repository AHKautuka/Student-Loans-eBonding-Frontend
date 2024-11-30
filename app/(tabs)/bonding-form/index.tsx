import React, { useState, useEffect } from 'react';
import { Image, Text, View } from 'react-native';
import Toast from 'react-native-toast-message';
import { SafeAreaView } from 'react-native-safe-area-context';
import InputField from '@/components/input-field';
import Button from '@/components/button';
import Logo from '@/components/Logo';

// Utility function to convert number to words
const numberToWords = (num: number): string => {
  if (num === 0) return 'zero';
  
  const ones: string[] = [
    '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 
    'seventeen', 'eighteen', 'nineteen'
  ];
  
  const tens: string[] = [
    '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
  ];
  
  const thousands: string[] = [
    '', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion', 'decillion'
  ];

  let words = '';

  const getHundreds = (n: number) => {
    let hundred = Math.floor(n / 100);
    let remainder = n % 100;
    let str = '';

    if (hundred > 0) {
      str += ones[hundred] + ' hundred';
    }
    if (remainder > 0) {
      if (hundred > 0) str += ' and ';
      if (remainder < 20) {
        str += ones[remainder];
      } else {
        str += tens[Math.floor(remainder / 10)];
        if (remainder % 10 !== 0) {
          str += ' ' + ones[remainder % 10];
        }
      }
    }

    return str;
  };

  let unit = 0;
  while (num > 0) {
    let part = num % 1000;
    if (part > 0) {
      words = getHundreds(part) + (thousands[unit] ? ' ' + thousands[unit] : '') + (words ? ' ' + words : '');
    }
    num = Math.floor(num / 1000);
    unit++;
  }

  return words.trim();
};

export default function LoanAmount() {
  const [tuitionAmount, setTuitionAmount] = useState('');
  const [upkeepAmount, setUpkeepAmount] = useState('');
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalAmountInWords, setTotalAmountInWords] = useState('');

  // Update total amount and words whenever tuition or upkeep amounts change
  useEffect(() => {
    const tuition = Number(tuitionAmount);
    const upkeep = Number(upkeepAmount);
    
    if (!isNaN(tuition) && !isNaN(upkeep) && tuition >= 0 && upkeep >= 0) {
      const total = tuition + upkeep;
      setTotalAmount(total);
      setTotalAmountInWords(numberToWords(total));
    } else {
      setTotalAmount(0);
      setTotalAmountInWords('');
    }
  }, [tuitionAmount, upkeepAmount]);

  const handleSubmit = () => {
    // Validate inputs
    if (!tuitionAmount || isNaN(Number(tuitionAmount)) || Number(tuitionAmount) <= 0) {
      Toast.show({
        type: 'error',
        text1: 'Invalid Input',
        text2: 'Please enter a valid Tuition Amount.',
      });
      return;
    }

    if (!upkeepAmount || isNaN(Number(upkeepAmount)) || Number(upkeepAmount) <= 0) {
      Toast.show({
        type: 'error',
        text1: 'Invalid Input',
        text2: 'Please enter a valid Upkeep Amount.',
      });
      return;
    }



// Optionally reset fields after successful submission

    // Optionally reset fields after successful submission
    setTuitionAmount('');
    setUpkeepAmount('');
    Toast.show({
      type: 'success',
      text1: 'Success',
      text2: 'Amounts saved successfully!',
    });
  };

  return (
    <SafeAreaView className="flex-1 justify-center items-center p-5 bg-white">
      <Text className="text-4xl font-bold mb-4 absolute top-1 left-0 m-5 font-bold">Loan Amount</Text>
      <Logo
        width={128}
        height={128}
		margin={5}
      />
      <Text className="text-xl font-normal mb-5">Approved Loan Amount</Text>
      <Text className="text-lg font-semibold mb-2">Tuition Amount (in MWK)</Text>
      <InputField
        placeholder='Enter Tuition Amount (e.g., 15000)' 
        value={tuitionAmount} 
        onChangeText={setTuitionAmount} 
        inputMode='numeric' 
      />
      <Text className="text-lg font-semibold mb-2">Upkeep Amount (in MWK)</Text>
      <InputField 
        placeholder='Enter Upkeep Amount (e.g., 5000)' 
        value={upkeepAmount} 
        onChangeText={setUpkeepAmount} 
        inputMode='numeric' 
      />
      
      {/* Display total amount in Malawian Kwacha */}
      {totalAmount > 0 && (
        <View className="mt-5">
          <Text className="text-xl font-bold">Total Loan Amount: MWK {totalAmount}</Text>
          <Text className="text-lg">Total Loan Amount in Worlds: {totalAmountInWords} Kwacha</Text>
        </View>
      )}

      <Button title="Confirm and Continue" onPress={handleSubmit} />
    </SafeAreaView>
  );
}
