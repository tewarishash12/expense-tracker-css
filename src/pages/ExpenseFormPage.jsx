import React from 'react';
import ExpenseForm from '../components/ExpenseForm';

const ExpenseFormPage = ({ handleSaveExpense }) => {
  return (
    <>
        <h1>Daily Expense Tracker</h1>
        <ExpenseForm onSaveExpense={handleSaveExpense} />
    </>
  );
};

export default ExpenseFormPage;