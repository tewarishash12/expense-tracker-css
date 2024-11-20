import React from 'react';
import ExpenseList from '../components/ExpenseList';

const ExpenseListPage = ({ expenses, handleDeleteExpense }) => {
  return (
    <>
        <h1>Expense List</h1>
        <ExpenseList expenses={expenses} onDeleteExpense={handleDeleteExpense} />
    </>
  );
};

export default ExpenseListPage;