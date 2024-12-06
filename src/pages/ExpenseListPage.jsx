import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ExpenseTable from '../components/ExpenseTable';
import ExpenseCards from '../components/ExpenseCards';
// import Categories from "../service/Categories"

const ExpenseListPage = ({ setEditIndex, expenses, dispatchExpenseAction }) => {
    const [isTableView, setIsTableView] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("All");

    const navigate = useNavigate();

    const handleDeleteExpense = (ind) => {
        dispatchExpenseAction({
            type: "DELETE",
            payload: { ind },
        });
    };

    const handleEditExpense = (ind) => {
        setEditIndex(ind);
        navigate('/');
    };

    const filteredExpenses =
        selectedCategory === "All"
            ? expenses
            : expenses.filter((expense) => expense.category === selectedCategory);

    return (
        <div className="p-6 bg-gray-100">
            <h1 className="text-2xl font-bold text-center mb-4">Expense List</h1>

            <div className="flex justify-center mb-6">
                <label htmlFor="category" className="mr-2 text-lg font-medium">
                    Filter by Category:
                </label>
                <select
                    id="category"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-2 border rounded-md"
                >
                    <option value="All">All</option>
                    
                    <option value="Food">Food</option>
                    <option value="Groceries">Groceries</option>
                    <option value="Gift">Gift</option>
                    <option value="Apparel">Apparel</option>
                    <option value="Self Care">Self Care</option>
                    <option value="Donation">Donation</option>
                    <option value="Capital Expense">Capital Expense</option>
                    <option value="Travel">Travel</option>
                    <option value="Repair">Repair</option>
                    <option value="Medical">Medical</option>
                    <option value="Miscellaneous">Miscellaneous</option>
                    <option value="Petrol">Petrol</option>
                </select>
            </div>

            {/* Toggle Button */}
            <div className="flex justify-center mb-6">
                <button
                    onClick={() => setIsTableView(true)}
                    className={`px-4 py-2 mr-2 text-white rounded-md ${isTableView ? "bg-blue-500" : "bg-gray-400"
                        }`}
                >
                    Table View
                </button>
                <button
                    onClick={() => setIsTableView(false)}
                    className={`px-4 py-2 text-white rounded-md ${!isTableView ? "bg-blue-500" : "bg-gray-400"
                        }`}
                >
                    Card View
                </button>
            </div>

            {isTableView ? (
                <ExpenseTable
                    expenses={filteredExpenses || []}
                    onDeleteExpense={handleDeleteExpense}
                    onEditExpense={handleEditExpense}
                />
            ) :
                (
                    <ExpenseCards
                        expenses={filteredExpenses || []}
                        onDeleteExpense={handleDeleteExpense}
                        onEditExpense={handleEditExpense}
                    />
                )
            }


        </div>
    );
};

export default ExpenseListPage;