import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>👋 Welcome to</Text>
      <Text style={styles.title}>Expense Tracker App</Text>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#22c55e' }]}
        onPress={() => navigation.navigate('AddExpense')}
      >
        <Text style={styles.buttonText}>➕ Add New Expense</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#3b82f6' }]}
        onPress={() => navigation.navigate('ViewExpenses')}
      >
        <Text style={styles.buttonText}>📄 View Expenses</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f9ff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  welcome: {
    fontSize: 20,
    color: '#888',
    marginBottom: 8,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1e3a8a',
    marginBottom: 40,
  },
  button: {
    width: '100%',
    paddingVertical: 16,
    borderRadius: 14,
    marginVertical: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default HomeScreen;
