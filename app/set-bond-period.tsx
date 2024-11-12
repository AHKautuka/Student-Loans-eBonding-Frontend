import React, { useState } from 'react';
import { View, Text, Button, Alert, StyleSheet, Image } from 'react-native';
import DatePicker from 'react-native-datepicker';

const BondingPeriodSetter = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const saveSettings = () => {
    if (startDate && endDate) {
      Alert.alert('Period set successfully', `Bonding period set from ${startDate} to ${endDate}`);
    } else {
      Alert.alert('Error', 'Please select both start and end dates.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ width: 128, height: 128
      
       }}><Text>Logo placeholder</Text></View>
      <Text style={{ fontSize: 50, marginBottom: 20 }}>Set Bonding Period</Text>
      <View style={styles.box}>
        <Text>Start Date:</Text>
        <DatePicker
          style={styles.datePicker}
          date={startDate}
          mode="date"
          placeholder="Select start date"
          format="YYYY-MM-DD"
          minDate="2024-11-05"
          maxDate="2024-11-14"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          onDateChange={(date: React.SetStateAction<string>) => setStartDate(date)}
        />
        <Text>End Date:</Text>
        <DatePicker
          style={styles.datePicker}
          date={endDate}
          mode="date"
          placeholder="Select end date"
          format="YYYY-MM-DD"
          minDate="2024-11-05"
          maxDate="2024-11-14"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          onDateChange={(date: React.SetStateAction<string>) => setEndDate(date)}
        />
        <View style={styles.buttonContainer}>
          <Button title="Set Period" onPress={saveSettings} color="orange" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  box: {
    width: '50%',
    padding: 20,
    borderWidth: 3,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  datePicker: {
    width: '70%',
    marginTop: 10,
  
    
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
});

export default BondingPeriodSetter;
