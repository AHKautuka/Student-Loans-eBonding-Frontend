import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, TextInput, Alert, StyleSheet, TouchableOpacity } from 'react-native';

interface BondingFormReviewProps {
  formId: string;
  userRole: 'LoansBoardOfficial' | 'InstitutionAdministrator';
  institutionId: string;
}

const BondingFormReview: React.FC<BondingFormReviewProps> = ({ formId, userRole, institutionId }) => {
  const [form, setForm] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [comment, setComment] = useState<string>('');
  const [showCommentInput, setShowCommentInput] = useState<boolean>(false);

  // Mock function to simulate fetching data
  const fetchBondingForm = async (formId: string) => {
    return {
      studentName: "Jonah Msuku",
      documents: [{ previewUrl: 'https://example.com/preview.jpg', downloadUrl: 'https://example.com/document.pdf' }],
      institutionId: "exampleInstitutionId",
      status: "pending",
      comments: []
    };
  };

  useEffect(() => {
    const loadForm = async () => {
      const fetchedForm = await fetchBondingForm(formId);
      if (userRole === 'InstitutionAdministrator' && fetchedForm.institutionId !== institutionId) {
        Alert.alert('Error', 'You are not authorized to view this form.');
        return;
      }
      setForm(fetchedForm);
      setLoading(false);
    };

    loadForm();
  }, [formId, userRole, institutionId]);

  const handleApprove = () => {
    // Handle form approval without comment
    setForm({ ...form, status: 'approved' });
    Alert.alert('Success', 'Bonding form approved.');
  };

  const handleReject = () => {
    setShowCommentInput(true); // Show the comment input field when rejecting
  };

  const handleConfirmReject = () => {
    if (comment.trim() === '') {
      Alert.alert('Error', 'Please add a comment before rejecting the form.');
      return;
    }
    // Handle form rejection with comment
    setForm({ ...form, status: 'rejected', comments: [...form.comments, comment] });
    setComment(''); // Clear the comment field after rejection
    setShowCommentInput(false); // Hide the comment input field
    Alert.alert('Rejected', 'Bonding form rejected.');
  };

  const handleDocumentDownload = (url: string) => {
    Alert.alert('Download', `Downloading document from ${url}`);
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.label}>Student Name: {form.studentName}</Text>

      <Text style={styles.label}>Documents:</Text>
      {form.documents.map((doc: any, index: number) => (
        <View key={index} style={styles.documentContainer}>
          <Image source={{ uri: doc.previewUrl }} style={styles.documentImage} />
          <TouchableOpacity style={[styles.downloadButton]} onPress={() => handleDocumentDownload(doc.downloadUrl)}>
            <Text style={styles.buttonText}>Download Document</Text>
          </TouchableOpacity>
        </View>
      ))}

      <Text style={styles.label}>Comments:</Text>
      {form.comments.map((comment: string, index: number) => (
        <Text key={index} style={styles.comment}>{comment}</Text>
      ))}

      {showCommentInput && (
        <>
          <TextInput
            style={styles.input}
            value={comment}
            onChangeText={setComment}
            placeholder="Add a comment"
          />
          <TouchableOpacity style={[styles.button, { backgroundColor: 'orange' }]} onPress={handleConfirmReject}>
            <Text style={styles.buttonText}>Confirm Rejection</Text>
          </TouchableOpacity>
        </>
      )}

      {!showCommentInput && (
        <>
          <TouchableOpacity style={[styles.button, { backgroundColor: 'orange' }]} onPress={handleReject}>
            <Text style={styles.buttonText}>Reject</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, { backgroundColor: 'orange' }]} onPress={handleApprove}>
            <Text style={styles.buttonText}>Approve</Text>
          </TouchableOpacity>
        </>
      )}

      <Text style={styles.status}>Status: {form.status}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  documentContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  documentImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
  },
  comment: {
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    padding: 10,
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 5,
    alignSelf: 'center',
    width: '50%',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  downloadButton: {
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'center',
    width: '50%',
    marginBottom: 10,
  },
  status: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    alignSelf: 'center',
  },
});

export default BondingFormReview;
