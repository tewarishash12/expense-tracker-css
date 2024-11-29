import React from 'react';
import ExpenseForm from '../components/ExpenseForm';
import { useNavigate } from 'react-router-dom';

const ExpenseFormPage = ({ editIndex, setEditIndex, expenses, setExpenses }) => {
    const navigate = useNavigate();

    const handleSaveExpense = (expense, ind) => {
        const updatedExpenses = [...expenses];
        if (ind > -1) {
            updatedExpenses[ind] = expense;
        } else {
            updatedExpenses.push(expense);
        }
        setExpenses(updatedExpenses);
        setEditIndex(-1);
        navigate('/expenses')
    };

    return (
        <>
            <h1>Daily Expense Tracker</h1>
            <ExpenseForm onSaveExpense={handleSaveExpense} editIndex={editIndex} key={editIndex} expenses={expenses} />
        </>
    );
};

export default ExpenseFormPage;