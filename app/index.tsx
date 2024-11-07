import React from "react";
import { View } from "react-native";
// import LoanAmount from "./screen/loan-amount";
import BankDetails from "./screen/bank-details";
import Toast from 'react-native-toast-message';
import PersonalDetails from "./screen/personal-details";


export default function Index() {
  return (
      <View style={{ flex: 1 }}>
       <PersonalDetails />
        <Toast />

      </View>   

  
  );
}

