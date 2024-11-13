// app/navigation/AppNavigator.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BankDetails from '../app/(tabs)/profile/bank-details';
import LoanAmount from '../app/(tabs)/loan-amount';
import PersonalDetails from '../app/(tabs)/profile/personal-details';
const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="loan-amount" component={LoanAmount} />
      <Tab.Screen name="personal-details" component={PersonalDetails} />
      <Tab.Screen name="bank-details" component={BankDetails} />
    </Tab.Navigator>
  );
};

export default AppNavigator;