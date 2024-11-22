import React from 'react';
import ExpenseForm from '../components/ExpenseForm';
import { useNavigate } from 'react-router-dom';
import { getExpenses, setExpenses } from '../service/localStorage';

const ExpenseFormPage = ({ editIndex, setEditIndex }) => {
    const navigate = useNavigate();

    const handleSaveExpense = (expense, ind) => {
        const expenses = getExpenses();
        if (ind > -1) {
            expenses[ind] = expense;
        } else {
            expenses.push(expense);
        }
        setExpenses(expenses);
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