import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Button, Alert, StyleSheet } from 'react-native';

interface Props {
    studentDetails: { [key: string]: string };
    documents: string[];
    loanAmount: string;
    onSubmit: (formData: { studentDetails: { [key: string]: string }; documents: string[]; loanAmount: string }) => void;
    onEdit: () => void;
    onCancel: () => void;
}

const ReviewBondingForm: React.FC<Props> = ({
    studentDetails,
    documents,
    loanAmount,
    onSubmit,
    onEdit,
    onCancel,
}) => {
    const [isFormValid, setIsFormValid] = useState(false);
    const [missingDetails, setMissingDetails] = useState<string[]>([]);
    const [missingDocuments, setMissingDocuments] = useState<string[]>([]);

    useEffect(() => {
        if (studentDetails && documents) {
            validateForm();
        }
    }, [studentDetails, documents, loanAmount]);

    const validateForm = () => {
        const requiredDetails = ['name', 'email', 'phone'];
        const requiredDocuments = ['ID', 'proofOfResidence'];

        const missingDetailsArray: string[] = [];
        const missingDocumentsArray: string[] = [];

        requiredDetails.forEach((detail) => {
            if (!studentDetails[detail]) {
                missingDetailsArray.push(detail);
            }
        });

        requiredDocuments.forEach((document) => {
            if (!documents.includes(document)) {
                missingDocumentsArray.push(document);
            }
        });

        setMissingDetails(missingDetailsArray);
        setMissingDocuments(missingDocumentsArray);
        setIsFormValid(missingDetailsArray.length === 0 && missingDocumentsArray.length === 0);
    };

    const handleEdit = () => {
        onEdit();
    };

    const handleSubmit = () => {
        // Simulate form submission
        onSubmit({ studentDetails, documents, loanAmount });

        // Show confirmation alert to the student
        Alert.alert(
            'Submission Successful',
            'Your bonding form has been successfully submitted and saved for future reference.',
            [{ text: 'OK' }]
        );
    };

    const handleCancel = () => {
        onCancel();
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text>Review Bonding Form</Text>
            <View>
                <Text>Student Details</Text>

                {studentDetails && Object.keys(studentDetails).map((key) => (
                    <Text key={key}>{`${key}: ${studentDetails[key]}`}</Text>
                ))}
            </View>
            <View>
                <Text>Documents</Text>
                {documents && documents.map((document) => (
                    <Text key={document}>{document}</Text>
                ))}
            </View>
            <View>
                <Text>Total Approved Loan Amount: {loanAmount}</Text>
            </View>
            
            {/* Display missing details or documents if any */}
            {missingDetails.length > 0 || missingDocuments.length > 0 ? (
                <View>
                    <Text>Please Complete the following:</Text>
                    {missingDetails.map((detail) => (
                        <Text key={detail}>{`- ${detail}`}</Text>
                    ))}
                    {missingDocuments.map((document) => (
                        <Text key={document}>{`- ${document}`}</Text>
                    ))}
                </View>
            ) : null}

            {/* Bottom Buttons */}
            <View style={styles.buttonContainer}>
                <Button title="Cancel" onPress={handleCancel} />
                <Button title="Edit" onPress={handleEdit} />
                <Button title="Submit" onPress={handleSubmit} disabled={!isFormValid} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'space-between',
        padding: 16,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
});

export default ReviewBondingForm;
