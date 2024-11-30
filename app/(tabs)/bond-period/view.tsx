import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
interface PeriodViewProps {
  startDate: string;
  endDate: string;
}

const PeriodView: React.FC<PeriodViewProps> = ({ startDate, endDate }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.periodView}>
        <Text style={styles.periodLabel}>Bonding Period is from:</Text>
        <Text style={styles.periodDate}>{startDate}</Text>
        <Text style={styles.periodDate}>to</Text>
        <Text style={styles.periodDate}>{endDate}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Go Back"
          color="#FFA500"
          onPress={() => navigation.goBack()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fffff0',
    padding: 20,
  },
  periodView: {
    marginTop: 40,
    padding: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  periodLabel: {
    fontSize: 30,
    color: '#000',
    marginBottom: 20,
  },
  periodDate: {
    fontSize: 20,
    color: '#004',
  },
  buttonContainer: {
    marginTop: 50,
    width: '100%',
    alignItems: 'center',
  },
});

export default PeriodView;
