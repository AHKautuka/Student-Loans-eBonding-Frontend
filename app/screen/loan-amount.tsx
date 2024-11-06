import React from 'react';
import { Image, Text, View } from 'react-native';
import InputField from '../components/input-field';

export default function LoanAmount() {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      }}
    >
      <Text style={{ fontSize: 35, fontWeight: 'bold', marginTop:-400, marginLeft: -100 }}>
        Loan Amount
      </Text>
      <Image
        source={require('../../assets/images/loans-board-logo.jpeg')}
        style={{ width: 250, height: 250, resizeMode: 'contain', marginBottom: 20 }}
      />
      <Text style={{ fontSize: 20, fontWeight: 'regular', marginBottom: 20 }}>
        Approved Loan Amount
      </Text>
      <InputField />
    </View>
  );
}
