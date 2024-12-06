import React from 'react'

const ExpenseCard = ({ expense, index, onDeleteExpense, onEditExpense }) => {
    return (
        <div
            className="p-4 bg-white border rounded-lg shadow-md flex flex-col justify-between"
        >
            <div>
                <p>
                    <strong>Date:</strong> {expense.date}
                </p>
                <p>
                    <strong>Amount:</strong> ${expense.amount}
                </p>
                <p>
                    <strong>Title:</strong> {expense.title}
                </p>
                <p>
                    <strong>Category:</strong> {expense.category}
                </p>
                <p>
                    <strong>Payment Mode:</strong> {expense.paymentMode}
                </p>
                <p>
                    <strong>Recurring:</strong>{" "}
                    {expense.recurring ? "Recurring" : "One-time"}
                </p>
                <p>
                    <strong>Beneficiary:</strong> {expense.beneficiary}
                </p>
                <p>
                    <strong>Tags:</strong> {expense.tags?.join(", ")}
                </p>
            </div>
            <div className="mt-4 flex justify-between">
                <button
                    onClick={() => onDeleteExpense(index)}
                    className="px-2 py-1 text-white bg-red-500 rounded-md"
                >
                    Delete
                </button>
                <button
                    onClick={() => onEditExpense(index)}
                    className="px-2 py-1 text-white bg-blue-500 rounded-md"
                >
                    Edit
                </button>
            </div>
        </div>
    )
}

export default ExpenseCard