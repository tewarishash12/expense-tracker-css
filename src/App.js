import './App.css';
import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';


function App() {
  const [expenses, setExpenses] = useState([]);
  const handleSaveExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <div className="App">
      <h1>Daily Expense Tracker</h1>
      <ExpenseForm onSaveExpense={handleSaveExpense} />
      <br/>
      <h1>Expense List</h1>
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
