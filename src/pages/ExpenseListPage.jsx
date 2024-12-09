import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ExpenseTable from '../components/ExpenseTable';
import ExpenseCards from '../components/ExpenseCards';
import { category } from "../service/Categories"

const ExpenseListPage = ({ isTableView, setIsTableView, setEditIndex, expenses, dispatchExpenseAction }) => {
    const [selectedCategories, setSelectedCategories] = useState([]);

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

    const handleCategoryChange = (category) => {
        setSelectedCategories((prevSelected) =>
            prevSelected.includes(category)
                ? prevSelected.filter((cat) => cat !== category) 
                : [...prevSelected, category] 
        );
    };

    const filteredExpenses =
        selectedCategories.length === 0
            ? expenses 
            : expenses.filter((expense) => selectedCategories.includes(expense.category));

    const selectAllCategories = () => {
        setSelectedCategories(category);
    };

    const clearAllCategories = () => {
        setSelectedCategories([]);
    };
    return (
        <div className="p-6 bg-gradient-to-b from-purple-500 to-purple-800 min-h-screen text-white">
            <h1 className="text-3xl font-extrabold text-center mb-6">Expense List</h1>

            {/* Filter Section */}
            <div className="mb-6">
                <h2 className="text-center text-xl font-semibold mb-4">
                    Filter by Category
                </h2>

                {/* Select All / Clear All Buttons */}
                <div className="flex justify-center mb-4 gap-4">
                    <button
                        onClick={selectAllCategories}
                        className="px-4 py-2 bg-green-400 hover:bg-green-500 text-purple-900 font-semibold rounded-md shadow-md"
                    >
                        Select All
                    </button>
                    <button
                        onClick={clearAllCategories}
                        className="px-4 py-2 bg-red-400 hover:bg-red-500 text-purple-900 font-semibold rounded-md shadow-md"
                    >
                        Clear All
                    </button>
                </div>

                {/* Category Checkbox List */}
                <div className="flex flex-wrap justify-center gap-4">
                    {category.map((cat) => (
                        <div key={cat} className="flex items-center text-lg">
                            <input
                                type="checkbox"
                                id={cat}
                                checked={selectedCategories.includes(cat)}
                                onChange={() => handleCategoryChange(cat)}
                                className="mr-2 text-purple-600"
                            />
                            <label htmlFor={cat} className="font-medium">
                                {cat}
                            </label>
                        </div>
                    ))}
                </div>

                <p className="text-center mt-4 text-sm">
                    {selectedCategories.length > 0
                        ? `${selectedCategories.length} categories selected`
                        : 'No categories selected, showing all expenses'}
                </p>
            </div>

            {/* Toggle View Buttons */}
            <div className="flex justify-center mb-6 gap-4">
                <button
                    onClick={() => setIsTableView(true)}
                    className={`px-4 py-2 font-bold rounded-md shadow-md ${isTableView
                            ? 'bg-purple-500 hover:bg-purple-600'
                            : 'bg-gray-400 hover:bg-gray-500'
                        }`}
                >
                    Table View
                </button>
                <button
                    onClick={() => setIsTableView(false)}
                    className={`px-4 py-2 font-bold rounded-md shadow-md ${!isTableView
                            ? 'bg-purple-500 hover:bg-purple-600'
                            : 'bg-gray-400 hover:bg-gray-500'
                        }`}
                >
                    Card View
                </button>
            </div>

            {/* Table or Card View */}
            {isTableView ? (
                <ExpenseTable
                    expenses={filteredExpenses || []}
                    onDeleteExpense={handleDeleteExpense}
                    onEditExpense={handleEditExpense}
                />
            ) : (
                <ExpenseCards
                    expenses={filteredExpenses || []}
                    onDeleteExpense={handleDeleteExpense}
                    onEditExpense={handleEditExpense}
                />
            )}
        </div>
    );
};

export default ExpenseListPage;