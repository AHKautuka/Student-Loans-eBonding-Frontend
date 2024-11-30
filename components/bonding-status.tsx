import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';
const BondingStatus = () => {
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call to fetch bonding status
    setTimeout(() => {
      setStatus('Unsubmitted'); 
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.title}>Bonding Status:</Text>
        <View style={styles.statusContainer}>
          <Text style={styles.status}>{status}</Text>
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
    backgroundColor: '#f0f0f0', 
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff', 
    padding: 20,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: 'grey', 
    marginBottom: 5,
  },
  title: {
    fontSize: 24,
    marginRight: 40,
  },
  statusContainer: {
    backgroundColor: '#d3d3d3', 
    padding: 5,
    borderRadius: 20,
  },
  status: {
    fontSize: 18,
    color: 'black',
  },
});

export default BondingStatus;
