import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { getExpenses } from '../storage/storage';

interface Expense {
  id: string;
  title: string;
  amount: number;
  date: string;
}

export default function ViewExpensesScreen() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const loadExpenses = async () => {
      const savedExpenses = await getExpenses();
      setExpenses(savedExpenses);
    };
    loadExpenses();
  }, []);

  const getFilteredExpenses = () => {
    if (!searchText.trim()) return expenses;
    return expenses.filter((expense) =>
      expense.title.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  const renderExpenseItem = ({ item }: { item: Expense }) => (
    <View style={styles.expenseCard}>
      <View style={styles.cardHeader}>
        <Text style={styles.expenseTitle}>{item.title}</Text>
        <Text style={styles.expenseAmount}>₹{item.amount}</Text>
      </View>
      <Text style={styles.expenseDate}>
        {new Date(item.date).toLocaleString()}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>📒 Expense Records</Text>

      <TextInput
        placeholder="🔍 Search expenses..."
        value={searchText}
        onChangeText={setSearchText}
        style={styles.searchInput}
        placeholderTextColor="#aaa"
      />

      <FlatList
        data={getFilteredExpenses()}
        keyExtractor={(item) => item.id}
        renderItem={renderExpenseItem}
        ListEmptyComponent={
          <Text style={styles.noData}>No expenses found 😕</Text>
        }
        contentContainerStyle={expenses.length === 0 ? styles.emptyList : {}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 16,
    color: '#333',
  },
  searchInput: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 16,
    color: '#333',
  },
  expenseCard: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 14,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  expenseTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2e3a59',
  },
  expenseAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#22c55e',
  },
  expenseDate: {
    fontSize: 14,
    color: '#6b7280',
  },
  noData: {
    textAlign: 'center',
    fontSize: 16,
    color: '#888',
    marginTop: 50,
  },
  emptyList: {
    flexGrow: 1,
    justifyContent: 'center',
  },
});
