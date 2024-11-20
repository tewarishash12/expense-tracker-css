import React, { useState } from 'react';
import ExpenseList from '../components/ExpenseList';

function useForceUpdate(){
    const [,setValue] = useState(0);
    return () => setValue(value => value + 1);
}

const ExpenseListPage = () => {
    const forceUpdate = useForceUpdate();

    const expensesDataString = localStorage.getItem('expenses_data_key') || '[]';
    const expenses = JSON.parse(expensesDataString)

    const handleDeleteExpense = (ind) => {
        expenses.splice(ind, 1);
        const updatedExpensesString = JSON.stringify(expenses);
        localStorage.setItem('expenses_data_key', updatedExpensesString);
        forceUpdate()
    };
    return (
        <>
            <h1>Expense List</h1>
            <ExpenseList expenses={expenses} onDeleteExpense={handleDeleteExpense} />
        </>
    );
};

export default ExpenseListPage;