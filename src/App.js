import './App.css';
import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';


function App() {
  const [expenses, setExpenses] = useState([]);
  const handleSaveExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const handleDeleteExpense = (index) => {
    const updatedExpenses = [...expenses];
    updatedExpenses.splice(index, 1);
    setExpenses(updatedExpenses);
  };

  return (
    <div className="App">
      <h1>Daily Expense Tracker</h1>
      <ExpenseForm onSaveExpense={handleSaveExpense} />
      <br/>
      <h1>Expense List</h1>
      <ExpenseList expenses={expenses} onDeleteExpense={handleDeleteExpense} />
    </div>
  );
}

export default App;
