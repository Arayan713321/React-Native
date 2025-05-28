import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ExpenseItemProps {
  amount: number;
  category: string;
  date: string;
}

export default function ExpenseItem({ amount, category, date }: ExpenseItemProps) {
  return (
    <View style={styles.item}>
      <Text style={styles.category}>{category}</Text>
      <Text>₹{amount.toFixed(2)}</Text>
      <Text style={styles.date}>{date}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  category: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  date: {
    color: '#888',
    fontSize: 12,
  },
});
