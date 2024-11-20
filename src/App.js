import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import ExpenseFormPage from './pages/ExpenseFormPage';
import ExpenseListPage from './pages/ExpenseListPage';


function App() {
  const [formValues, setFormValues] = useState({});
  const setFormValue = (value, key) => {
    setFormValues(currentFormValues => ({...currentFormValues, [key]: value }));
  };
  const resetFormValues = () => {
    setFormValues({});
  };
  return (
    <BrowserRouter>
      <div className="App">
        <nav class="tab">
          <NavLink to="">Add Expense</NavLink>
          <NavLink to="expenses">View Expenses</NavLink>
        </nav>
        <Routes>
          <Route path='' element={<ExpenseFormPage formValues={formValues} setFormValue={setFormValue} resetFormValues={resetFormValues} />}></Route>
          <Route path='expenses' element={<ExpenseListPage setFormValues={setFormValues} />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
