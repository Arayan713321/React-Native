import AsyncStorage from '@react-native-async-storage/async-storage';

const EXPENSES_KEY = 'expenses';

export async function getExpenses() {
  try {
    const data = await AsyncStorage.getItem(EXPENSES_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error fetching expenses:', error);
    return [];
  }
}

export async function saveExpense(newExpense: any) {
  try {
    const expenses = await getExpenses();
    expenses.push(newExpense);
    await AsyncStorage.setItem(EXPENSES_KEY, JSON.stringify(expenses));
  } catch (error) {
    console.error('Error saving expense:', error);
  }
}

export async function clearExpenses() {
  try {
    await AsyncStorage.removeItem(EXPENSES_KEY);
  } catch (error) {
    console.error('Error clearing expenses:', error);
  }
}
