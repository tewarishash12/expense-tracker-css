import React from 'react';
import ExpenseForm from '../components/ExpenseForm';
import { useNavigate } from 'react-router-dom';

const ExpenseFormPage = () => {
    const navigate = useNavigate()
    const expensesDataString = localStorage.getItem('expenses_data_key') || '[]';
    const expenses = JSON.parse(expensesDataString)

    const handleSaveExpense = (expense) => {
        expenses.push(expense);
        const updatedExpensesString = JSON.stringify(expenses);
        localStorage.setItem('expenses_data_key', updatedExpensesString);
        navigate('/expenses')
    };
    return (
        <>
            <h1>Daily Expense Tracker</h1>
            <ExpenseForm onSaveExpense={handleSaveExpense} />
        </>
    );
};

export default ExpenseFormPage;