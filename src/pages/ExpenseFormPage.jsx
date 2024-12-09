import React from 'react';
import ExpenseForm from '../components/ExpenseForm';
import { useNavigate } from 'react-router-dom';

const ExpenseFormPage = ({ editIndex, setEditIndex, expenses, dispatchExpenseAction }) => {
    const navigate = useNavigate();

    const handleSaveExpense = (expense, ind) => {
        const action = {}
        if (ind > -1) {
            action.type = "EDIT";
            action.payload = { ind, expense };
        } else {
            action.type = "ADD";
            action.payload = { expense };
        }
        dispatchExpenseAction(action);
        setEditIndex(-1);
        navigate('/expenses')
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 via-purple-700 to-purple-900 px-4">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-3xl font-semibold text-center mb-6 text-purple-700">Daily Expense Tracker</h1>
                <ExpenseForm
                    onSaveExpense={handleSaveExpense}
                    editIndex={editIndex}
                    key={editIndex}
                    expenses={expenses || []}
                />
            </div>
        </div>

    );
};

export default ExpenseFormPage;