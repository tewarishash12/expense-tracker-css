import './App.css';
import React, { useEffect, useReducer, useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import ExpenseFormPage from './pages/ExpenseFormPage';
import ExpenseListPage from './pages/ExpenseListPage';
import {getExpensesFromBackend, setExpensesInBackend} from './service/localStorage'
import expenseReducer from './reducers/expenseReducer';


function App() {
  const [editIndex, setEditIndex] = useState(-1);
  const [expenses, dispatchExpenseAction] = useReducer(expenseReducer, []);
  useEffect(() => {
    getExpensesFromBackend().then(expensesVal => {
      dispatchExpenseAction({
        type: "REFILL",
        payload: { expenses: expensesVal },
      });
    });
  }, []);

  useEffect(() => {
    setExpensesInBackend(expenses).then(() => console.log("Saved expenses successfully!"));
  }, [expenses]);

  return (
    <BrowserRouter>
      <div className="App">
        <nav class="tab">
          <NavLink to="">Add Expense</NavLink>
          <NavLink to="expenses">View Expenses</NavLink>
        </nav>
        <Routes>
          <Route path='' element={<ExpenseFormPage editIndex={editIndex} setEditIndex={setEditIndex} expenses={expenses} dispatchExpenseAction={dispatchExpenseAction} />}></Route>
          <Route path='expenses' element={<ExpenseListPage setEditIndex={setEditIndex} expenses={expenses} dispatchExpenseAction={dispatchExpenseAction} />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
