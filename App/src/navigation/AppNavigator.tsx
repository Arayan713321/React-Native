import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import AddExpenseScreen from '../screens/AddExpenseScreen';
import ViewExpensesScreen from '../screens/ViewExpensesScreen';

export type RootStackParamList = {
  Home: undefined;
  AddExpense: undefined;
  ViewExpenses: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AddExpense" component={AddExpenseScreen} />
      <Stack.Screen name="ViewExpenses" component={ViewExpensesScreen} />
    </Stack.Navigator>
  );
}
