import React from 'react';

const ExpenseTable = ({ expenses, onDeleteExpense, onEditExpense }) => {
  return (
    // Table View
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded-md shadow-md">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th className="px-4 py-2 border">Date</th>
            <th className="px-4 py-2 border">Amount</th>
            <th className="px-4 py-2 border">Title</th>
            <th className="px-4 py-2 border">Category</th>
            <th className="px-4 py-2 border">Payment Mode</th>
            <th className="px-4 py-2 border">Recurring</th>
            <th className="px-4 py-2 border">Beneficiary</th>
            <th className="px-4 py-2 border">Tags</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index} className="text-center border-t">
              <td className="px-4 py-2 border">{expense.date}</td>
              <td className="px-4 py-2 border">${expense.amount}</td>
              <td className="px-4 py-2 border">{expense.title}</td>
              <td className="px-4 py-2 border">{expense.category}</td>
              <td className="px-4 py-2 border">{expense.paymentMode}</td>
              <td className="px-4 py-2 border">
                {expense.recurring ? "Recurring" : "One-time"}
              </td>
              <td className="px-4 py-2 border">{expense.beneficiary}</td>
              <td className="px-4 py-2 border">{expense.tags?.join(", ")}</td>
              <td className="px-4 py-2 border">
                <button
                  onClick={() => onDeleteExpense(index)}
                  className="px-2 py-1 text-white bg-red-500 rounded-md mr-2"
                >
                  Delete
                </button>
                <button
                  onClick={() => onEditExpense(index)}
                  className="px-2 py-1 text-white bg-blue-500 rounded-md"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;