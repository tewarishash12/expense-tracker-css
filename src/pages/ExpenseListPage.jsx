import React from 'react';
import ExpenseList from '../components/ExpenseList';
import { useNavigate } from 'react-router-dom';

const ExpenseListPage = ({ setEditIndex, expenses, setExpenses }) => {
    const navigate = useNavigate();

    const handleDeleteExpense = (ind) => {
        const updatedExpenses = expenses.filter((_,index) => index !== ind);
        setExpenses(updatedExpenses);
    };

    const handleEditExpense = (ind) => {
        setEditIndex(ind);
        navigate('/');
    };

    return (
        <>
            <h1>Expense List</h1>
            <ExpenseList expenses={expenses} onDeleteExpense={handleDeleteExpense} onEditExpense={handleEditExpense} />
        </>
    );
};

export default ExpenseListPage;