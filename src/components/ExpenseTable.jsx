import React from 'react';

const ExpenseTable = ({ expenses, onDeleteExpense, onEditExpense }) => {
  return (
    // Table View
    <div className="overflow-x-auto">
      <table className="min-w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg shadow-lg overflow-hidden">
        <thead>
          <tr className="text-left">
            <th className="px-6 py-3 font-semibold text-white bg-gray-800">Date</th>
            <th className="px-6 py-3 font-semibold text-white bg-gray-800">Amount</th>
            <th className="px-6 py-3 font-semibold text-white bg-gray-800">Title</th>
            <th className="px-6 py-3 font-semibold text-white bg-gray-800">Category</th>
            <th className="px-6 py-3 font-semibold text-white bg-gray-800">Payment Mode</th>
            <th className="px-6 py-3 font-semibold text-white bg-gray-800">Recurring</th>
            <th className="px-6 py-3 font-semibold text-white bg-gray-800">Beneficiary</th>
            <th className="px-6 py-3 font-semibold text-white bg-gray-800">Tags</th>
            <th className="px-6 py-3 font-semibold text-white bg-gray-800">Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr
              key={index}
              className={`text-center ${index % 2 === 0 ? 'bg-purple-500' : 'bg-purple-400'
                } hover:bg-indigo-600 transition duration-300`}
            >
              <td className="px-6 py-3">{expense.date}</td>
              <td className="px-6 py-3">₹{expense.amount}</td>
              <td className="px-6 py-3">{expense.title}</td>
              <td className="px-6 py-3">{expense.category}</td>
              <td className="px-6 py-3">{expense.paymentMode}</td>
              <td className="px-6 py-3">
                {expense.recurring ? 'Recurring' : 'One-time'}
              </td>
              <td className="px-6 py-3">{expense.beneficiary}</td>
              <td className="px-6 py-3">{expense.tags?.join(', ')}</td>
              <td className="px-6 py-3 flex justify-center space-x-2">
                <button
                  onClick={() => onDeleteExpense(index)}
                  className="px-3 py-1 text-sm bg-red-500 rounded-md hover:bg-red-600"
                >
                  Delete
                </button>
                <button
                  onClick={() => onEditExpense(index)}
                  className="px-3 py-1 text-sm bg-blue-500 rounded-md hover:bg-blue-600"
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