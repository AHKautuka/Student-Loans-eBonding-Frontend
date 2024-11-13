import React, { useState } from 'react';
import { View, Text, Alert, StyleSheet, Image, TouchableOpacity, Platform } from 'react-native';
import DateTimePicker, { EvtTypes } from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/Ionicons';
import { images } from '../constants';

const BondingPeriodSetter = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);

  const saveSettings = () => {
    if (startDate && endDate) {
      Alert.alert('Period set successfully', `Bonding period set from ${startDate} to ${endDate}`);
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
      <Image source={images.logo} style={styles.logo} />
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
  

 {/* Footer container with icons */}
 <View style={styles.footer}>
        <Icon
          name="home"
          size={30}
          color="#333"
          onPress={() => console.log("Home pressed")}
          style={styles.icon}
        />
        <Icon
          name="notifications"
          size={30}
          color="#333"
          onPress={() => console.log("Notifications pressed")}
          style={styles.icon}
        />
        <Icon
          name="person"
          size={30}
          color="#333"
          onPress={() => console.log("Profile pressed")}
          style={styles.icon}
        />
        <Icon
          name="create"
          size={30}
          color="#333"
          onPress={() => console.log("Form pressed")}
          style={styles.icon}
        />
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
