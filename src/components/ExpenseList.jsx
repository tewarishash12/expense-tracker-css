import React from 'react';

const ExpenseList = ({ expenses, onDeleteExpense, onEditExpense }) => {
  return (
    <ul>
        {expenses.map((expense, index) => (
            <li key={index}>
                {expense.date} - ${expense.amount} - {expense.title} - {expense.category} - {expense.paymentMode} - {expense.recurring ? 'Recurring' : 'One-time'} - {expense.beneficiary} - Tags: {expense.tags?.join(', ')}
                <button onClick={() => onDeleteExpense(index)}>Delete</button>
                <button onClick={() => onEditExpense(index)}>Edit</button>
            </li>
        ))}
    </ul>
  );
};

export default ExpenseList;