import React from 'react';
import ExpenseForm from '../components/ExpenseForm';
import { useNavigate } from 'react-router-dom';

const ExpenseFormPage = ({ editIndex, setEditIndex }) => {
    const navigate = useNavigate();

    const handleSaveExpense = (expense, ind) => {
        const expensesDataString = localStorage.getItem('expenses_data_key') || '[]';
        const expenses = JSON.parse(expensesDataString);
        if (ind > -1) {
            expenses[ind] = expense;
        } else {
            expenses.push(expense);
        }
        const updatedExpensesString = JSON.stringify(expenses);
        localStorage.setItem('expenses_data_key', updatedExpensesString);
        setEditIndex(-1);
        navigate('/expenses')
    };

    return (
        <>
            <h1>Daily Expense Tracker</h1>
            <ExpenseForm onSaveExpense={handleSaveExpense} editIndex={editIndex} key={editIndex} />
        </>
    );
};

export default ExpenseFormPage;