import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import ExpenseFormPage from './pages/ExpenseFormPage';
import ExpenseListPage from './pages/ExpenseListPage';
import FormContext from './context/FormContext';


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
      <FormContext.Provider value={{ formValues, setFormValue, resetFormValues, setFormValues }}>
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
      </FormContext.Provider>
    </BrowserRouter>
  );
}

export default App;
