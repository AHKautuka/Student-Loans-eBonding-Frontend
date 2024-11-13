import AsyncStorage from '@react-native-async-storage/async-storage';

export async function setItem(key: string, value: string) {
	try {
		await AsyncStorage.setItem(key, value);
	} catch (error) {
		console.error('Error setting item:', error);
	}
};

export async function getItem(key: string) {
	try {
		return await AsyncStorage.getItem(key);
	} catch (error) {
		console.error('Error getting item:', error);
		return null;
	}
};

export async function removeItem(key: string) {
	try {
		await AsyncStorage.removeItem(key);
	} catch (error) {
		console.error('Error removing item:', error);
	}
};

export async function clear() {
	try {
		await AsyncStorage.clear();
	} catch (error) {
		console.error('Error clearing AsyncStorage:', error);
	}
};