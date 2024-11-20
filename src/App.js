import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import ExpenseFormPage from './pages/ExpenseFormPage';
import ExpenseListPage from './pages/ExpenseListPage';


function App() {
  const [editIndex, setEditIndex] = useState(-1);
  return (
    <BrowserRouter>
      <div className="App">
        <nav class="tab">
          <NavLink to="">Add Expense</NavLink>
          <NavLink to="expenses">View Expenses</NavLink>
        </nav>
        <Routes>
          <Route path='' element={<ExpenseFormPage editIndex={editIndex} />}></Route>
          <Route path='expenses' element={<ExpenseListPage setEditIndex={setEditIndex} />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
