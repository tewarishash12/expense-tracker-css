import React from 'react'

const ExpenseCard = ({ bgColor, expense, index, onDeleteExpense, onEditExpense }) => {
    return (
        <div
            className={`p-4 ${bgColor} text-white border rounded-lg shadow-lg hover:bg-indigo-600 transition duration-300 flex flex-col justify-between`}>
            <div>
                <p>
                    <strong>Date:</strong> {expense.date}
                </p>
                <p>
                    <strong>Amount:</strong> ₹{expense.amount}
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
                    <strong>Recurring:</strong>{' '}
                    {expense.recurring ? 'Recurring' : 'One-time'}
                </p>
                <p>
                    <strong>Beneficiary:</strong> {expense.beneficiary}
                </p>
                <p>
                    <strong>Tags:</strong> {expense.tags?.join(', ')}
                </p>
            </div>
            <div className="mt-4 flex justify-between">
                <button
                    onClick={() => onDeleteExpense(index)}
                    className="px-2 py-1 text-sm text-white bg-red-500 rounded-md hover:bg-red-600"
                >
                    Delete
                </button>
                <button
                    onClick={() => onEditExpense(index)}
                    className="px-2 py-1 text-sm text-white bg-blue-500 rounded-md hover:bg-blue-600"
                >
                    Edit
                </button>
            </div>
        </div>
    )
}

export default ExpenseCard