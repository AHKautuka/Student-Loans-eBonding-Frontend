import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Button, Alert, StyleSheet, Image } from 'react-native';
import axios from 'axios'; // Import Axios
import { urlForms } from '@/utils/endpoints';

interface BondingFormProps {
  formId: string;
}

const BondingForm: React.FC<BondingFormProps> = ({ formId }) => {
  const [form, setForm] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const fetchBondingForm = async (id: string) => {
      try {
        const response = await axios.get(`${urlForms}/${id}`); // Use Axios to fetch the form
        return response.data;
      } catch (error) {
        console.error('Error fetching bonding form:', error);
        throw error;
      }
    };

    const loadForm = async () => {
      try {
        const fetchedForm = await fetchBondingForm(formId);
        setForm(fetchedForm);
      } catch (error) {
        console.error('Error loading form:', error);
      } finally {
        setLoading(false);
      }
    };

    loadForm();
  }, [formId]);

  const handleEdit = () => {
    // Code to handle editing the form
  };

  const handleUpload = () => {
    // Code to handle uploading missing documents
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`${urlForms}`, form); // Use Axios to submit the form
      setForm(response.data);
      Alert.alert('Confirmation', 'Form Submitted Successfully');
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      Alert.alert('Error', 'There was an error submitting the form');
    }
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {!isSubmitted ? (
        <View>
          <Image
            source={{ uri: 'https://example.com/logo.png' }} // Replace with your logo URL
            style={styles.logo}
          />
          <Text>Review Bonding Form</Text>
          <Text>Name: {form.mandatoryFields.studentName}</Text>
          <Text>Total Approved Loan Amount: {form.mandatoryFields.totalLoanAmount}</Text>
          <Text>Documents:</Text>
          {form.documents.map((doc: any, index: number) => (
            <Text key={index}>{doc.name}</Text>
          ))}
          {form.missingDocuments.length > 0 && (
            <View>
              <Text>Missing Documents:</Text>
              {form.missingDocuments.map((doc: any, index: number) => (
                <Text key={index}>{doc}</Text>
              ))}
              <Button title="Upload Missing Documents" onPress={handleUpload} color="orange" />
            </View>
          )}
          <View style={styles.buttonContainer}>
            <Button title="Edit Details" onPress={handleEdit} color="orange" />
            <Button title="Submit" onPress={handleSubmit} color="orange" />
            <Button title="Cancel" onPress={() => Alert.alert('Cancelled')} color="orange" />
          </View>
        </View>
      ) : (
        <View>
          <Text>Submit Bonding Form</Text>
          <Button title="Submit" onPress={handleSubmit} color="orange" />
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 16,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});

export default BondingForm;
