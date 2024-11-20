import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import ExpenseFormPage from './pages/ExpenseFormPage';
import ExpenseListPage from './pages/ExpenseListPage';


function App() {
  // const [expenses, setExpenses] = useState([]);
  // const handleSaveExpense = (expense) => {
  //   setExpenses([...expenses, expense]);
  // };

  // const handleDeleteExpense = (index) => {
  //   const updatedExpenses = [...expenses];
  //   updatedExpenses.splice(index, 1);
  //   setExpenses(updatedExpenses);
  // };



  return (
    <BrowserRouter>
      <div className="App">
        <nav class="tab">
          <NavLink to="">Add Expense</NavLink>
          <NavLink to="expenses">View Expenses</NavLink>
        </nav>
        <Routes>
          <Route path='' element={<ExpenseFormPage />}></Route>
          <Route path='expenses' element={<ExpenseListPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
