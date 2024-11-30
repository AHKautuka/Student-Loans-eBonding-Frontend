import React, { useState } from 'react';
import { View, Text, Alert, StyleSheet, Image, TouchableOpacity, Platform } from 'react-native';
import DateTimePicker, { EvtTypes } from '@react-native-community/datetimepicker';
import Logo from '@/components/Logo';
import axios from 'axios';
import { urlBondingPeriods } from '@/utils/endpoints';

const BondingPeriodSetter = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);

 // Function to make the API request to save the bonding period
  const saveSettings = async () => {
    if (startDate && endDate) {
      try {
        // Prepare the data to be sent to the backend
        const bondingPeriodData = {
          startDate: startDate,
          endDate: endDate,
        };

        // Make the POST request to the backend
        const response = await axios.post(`${urlBondingPeriods}`, bondingPeriodData);

        // Show success message
        Alert.alert('Period set successfully', response.data.message);
      } catch (error) {
        console.error('Error saving bonding period:', error);
        Alert.alert('Error', 'Failed to set bonding period. Please try again.');
      }
    } else {
      Alert.alert('Error', 'Please select both start and end dates.');
    }
  };

  const handleDateChange = (_event: { type: EvtTypes; nativeEvent: { timestamp: number; utcOffset: number; }; }, selectedDate: Date | undefined, type: string) => {
    const currentDate = selectedDate || new Date();
    const formattedDate = currentDate.toISOString().split('T')[0]; 

    if (type === 'start') {
      setStartDate(formattedDate);
    } else {
      setEndDate(formattedDate);
    }

    if (type === 'start') {
      setShowStartDatePicker(false); 
    } else {
      setShowEndDatePicker(false); 
    }
  };

  return (
    <View style={styles.container}>
      <Logo center width={128} height={128} />
      <Text style={{ fontSize:30, marginBottom: 20 }}>Set Bonding Period</Text>
      <View style={styles.box}>
        <Text>Start Date:</Text>
        <View style={styles.dateSelectBox}>
          <TouchableOpacity
            style={styles.dateButton} 
            onPress={() => setShowStartDatePicker(true)} 
          >
            <Text style={styles.dateText}>{startDate ? startDate : 'Select Start Date'}</Text>
          </TouchableOpacity>
        </View>
        {showStartDatePicker && (
          <DateTimePicker
            value={new Date()}
            mode="date"
            display={Platform.OS === 'ios' ? 'spinner' : 'default'} 
            onChange={(event: { type: EvtTypes; nativeEvent: { timestamp: number; utcOffset: number; }; }, date: Date | undefined) => handleDateChange(event, date, 'start')} 
          />
        )}
        
        <Text>End Date:</Text>
        <View style={styles.dateSelectBox}>
          <TouchableOpacity
            style={styles.dateButton} 
            onPress={() => setShowEndDatePicker(true)} 
          >
            <Text style={styles.dateText}>{endDate ? endDate : 'Select End Date'}</Text>
          </TouchableOpacity>
        </View>
        {showEndDatePicker && (
          <DateTimePicker
            value={new Date()}
            mode="date"
            display={Platform.OS === 'ios' ? 'spinner' : 'default'} 
            onChange={(event: { type: EvtTypes; nativeEvent: { timestamp: number; utcOffset: number; }; }, date: Date | undefined) => handleDateChange(event, date, 'end')} 
          />
        )}
        
        <View style={styles.dateButton}>
          <TouchableOpacity style={styles.setPeriodButton} onPress={saveSettings}>
            <Text style={styles.setPeriodButtonText}>Set Period</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  box: {
    width: '50%',
    padding: 20,
    borderWidth: 3,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  dateSelectBox: {
    backgroundColor: '#f0f0f0', 
    borderRadius: 5,
    marginVertical: 10,
    padding: 10,
  },
  dateButton: {
    padding: 10, 
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  dateText: {
    fontSize: 16,
    color: '#333',
  },
  setPeriodButton: {
    backgroundColor: 'orange',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  setPeriodButtonText: {
    fontSize: 12,
    color: 'white',
    fontWeight: 'bold',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#f8f8f8',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  icon: {
    marginHorizontal: 10,
  },
});

export default BondingPeriodSetter;
