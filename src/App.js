import './App.css';
import React, { useEffect, useReducer, useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import ExpenseFormPage from './pages/ExpenseFormPage';
import ExpenseListPage from './pages/ExpenseListPage';
import { getExpensesFromBackend, setExpensesInBackend } from './service/localStorage'
import expenseReducer from './reducers/expenseReducer';


function App() {
  const [editIndex, setEditIndex] = useState(-1);
  const [expenses, dispatchExpenseAction] = useReducer(expenseReducer, null);
  useEffect(() => {
    getExpensesFromBackend().then(expensesVal => {
      dispatchExpenseAction({
        type: "FILL",
        payload: { expenses: expensesVal },
      });
    });
  }, []);

  useEffect(() => {
    if (expenses === null) {
      return; // data not loaded from the backend yet
    }
    setExpensesInBackend(expenses).then(() => console.log("Saved expenses successfully!"));
  }, [expenses]);

  return (
    <BrowserRouter>
      <div className="App">
        <nav className="tab flex justify-center space-x-8 py-4 bg-purple-500 shadow-md">
          <NavLink
            to=""
            className={({ isActive }) =>
              `px-4 py-2 text-gray-800 text-lg font-medium rounded-lg transition duration-200 ${isActive ? "bg-purple-700 shadow-lg" : "hover:bg-purple-600"
              }`
            }
          >
            Add Expense
          </NavLink>
          <NavLink
            to="expenses"
            className={({ isActive }) =>
              `px-4 py-2 text-gray-800 text-lg font-medium rounded-lg transition duration-200 ${isActive ? "bg-purple-700 shadow-lg" : "hover:bg-purple-600"
              }`
            }
          >
            View Expenses
          </NavLink>
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
