import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Button } from 'react-native';

interface Props {
    studentDetails: { [key: string]: string };
    documents: string[];
    loanAmount: string;
    onSubmit: () => void;
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
        validateForm();
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
        onSubmit();
    };

    const handleCancel = () => {
        onCancel();
    };

    return (
        <ScrollView>
            <Text>Review Bonding Form</Text>
            <View>
                <Text>Student Details</Text>

                {Object.keys(studentDetails).map((key) => (
                    <Text key={key}>{`${key}: ${studentDetails[key]}`}</Text>
                ))}
            </View>
            <View>
                <Text>Documents</Text>
                {documents.map((document) => (
                    <Text key={document}>{document}</Text>
                ))}
            </View>
            <View>
                <Text>Total Approved Loan Amount: {loanAmount}</Text>
            </View>
            {missingDetails.length > 0 || missingDocuments.length > 0 ? (
                <View>
                    <Text>Please Complete the following:</Text>
                    {missingDetails.map((detail) => (
                        <Text key={detail}>{`- ${detail}`}</Text>
                    ))}

                    {missingDocuments.map((document) => (
                        <Text key={document}>{`- ${document}`}</Text>
                    ))}

                    <Button title="Edit" onPress={handleEdit} />
                </View>
            ) : (
                <Button title="Submit" onPress={handleSubmit} />
            )}
            <Button title="Cancel" onPress={handleCancel} />
        </ScrollView>
    );
};

export default ReviewBondingForm;
