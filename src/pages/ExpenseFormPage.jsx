import React from 'react';
import ExpenseForm from '../components/ExpenseForm';
import { useNavigate } from 'react-router-dom';

const ExpenseFormPage = ({ editIndex }) => {
    const navigate = useNavigate();
    const expensesDataString = localStorage.getItem('expenses_data_key') || '[]';
    const expenses = JSON.parse(expensesDataString)

    const handleSaveExpense = (expense, ind) => {
        if (ind > -1) {
            expenses[ind] = expense;
        } else {
            expenses.push(expense);
        }
        const updatedExpensesString = JSON.stringify(expenses);
        localStorage.setItem('expenses_data_key', updatedExpensesString);
        navigate('/expenses')
    };

    const editExpense = editIndex > -1 ? expenses[editIndex] : null;

    return (
        <>
            <h1>Daily Expense Tracker</h1>
            <ExpenseForm onSaveExpense={handleSaveExpense} editIndex={editIndex} prefilledExpense={editExpense} />
        </>
    );
};

export default ExpenseFormPage;