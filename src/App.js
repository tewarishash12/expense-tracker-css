import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import ExpenseFormPage from './pages/ExpenseFormPage';
import ExpenseListPage from './pages/ExpenseListPage';


function App() {
  const [editIndex, setEditIndex] = useState(-1);
  const [expenses, setExpenses] = useState([]);
  return (
    <BrowserRouter>
      <div className="App">
        <nav class="tab">
          <NavLink to="">Add Expense</NavLink>
          <NavLink to="expenses">View Expenses</NavLink>
        </nav>
        <Routes>
          <Route path='' element={<ExpenseFormPage editIndex={editIndex} setEditIndex={setEditIndex} expenses={expenses} setExpenses={setExpenses} />}></Route>
          <Route path='expenses' element={<ExpenseListPage setEditIndex={setEditIndex} expenses={expenses} setExpenses={setExpenses} />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
