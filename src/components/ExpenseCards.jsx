import React from 'react'
import ExpenseCard from './ExpenseCard'

const ExpenseCards = ({ expenses, onDeleteExpense, onEditExpense }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {expenses.map((expense, index) => (
                <ExpenseCard 
                expense={expense} 
                index={index} 
                onDeleteExpense={onDeleteExpense} 
                onEditExpense={onEditExpense} 
                />
            ))}
        </div>
    )
}

export default ExpenseCards