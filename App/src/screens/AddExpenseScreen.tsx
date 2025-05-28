import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { saveExpense } from '../storage/storage';
import { useNavigation } from '@react-navigation/native';

export default function AddExpenseScreen() {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const navigation = useNavigation();

  const handleAddExpense = async () => {
    if (!title || !amount) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    const newExpense = {
      id: Date.now().toString(),
      title,
      amount: parseFloat(amount),
      date: new Date().toISOString(),
    };

    await saveExpense(newExpense);
    setTitle('');
    setAmount('');
    Alert.alert('Success', 'Expense added successfully!');
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>➕ Add New Expense</Text>

      <TextInput
        placeholder="📝 Expense Title"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
        placeholderTextColor="#999"
      />

      <TextInput
        placeholder="💸 Amount in ₹"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
        style={styles.input}
        placeholderTextColor="#999"
      />

      <TouchableOpacity style={styles.button} onPress={handleAddExpense}>
        <Text style={styles.buttonText}>Add Expense</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  header: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 30,
    color: '#2e3a59',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    color: '#333',
  },
  button: {
    backgroundColor: '#3b82f6',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#3b82f6',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 18,
  },
});
