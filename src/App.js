import './App.css';
import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';

function App() {
  const [expenses, setExpenses] = useState([]);
  const handleSaveExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <div className="App">
      <h1>Daily Expense Tracker</h1>
      <ExpenseForm onSaveExpense={handleSaveExpense} />
    </div>
  );
}

export default App;
