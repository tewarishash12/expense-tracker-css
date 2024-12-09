import './App.css';
import React, { useEffect, useReducer, useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import ExpenseFormPage from './pages/ExpenseFormPage';
import ExpenseListPage from './pages/ExpenseListPage';
import { getExpensesFromBackend, setExpensesInBackend } from './service/localStorage'
import expenseReducer from './reducers/expenseReducer';


function App() {
  const [isTableView, setIsTableView] = useState(false);
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
        <nav className="tab flex justify-center space-x-8 py-4 bg-gradient-to-r from-purple-400 via-purple-600 to-purple-900 shadow-lg">
          <NavLink
            to=""
            className={({ isActive }) =>
              `px-5 py-2 text-white text-lg font-semibold rounded-md transition duration-300 ease-in-out ${isActive
                ? "bg-purple-900 shadow-md scale-105"
                : "hover:bg-purple-900 hover:shadow-md"
              }`
            }
          >
            Add Expense
          </NavLink>
          <NavLink
            to="expenses"
            className={({ isActive }) =>
              `px-5 py-2 text-white text-lg font-semibold rounded-md transition duration-300 ease-in-out ${isActive
                ? "bg-purple-900 shadow-md scale-105"
                : "hover:bg-purple-900 hover:shadow-md"
              }`
            }
          >
            View Expenses
          </NavLink>
        </nav>

        <Routes>
          <Route path='' element={<ExpenseFormPage editIndex={editIndex} setEditIndex={setEditIndex} expenses={expenses} dispatchExpenseAction={dispatchExpenseAction} />}></Route>
          <Route path='expenses' element={<ExpenseListPage isTableView={isTableView} setIsTableView={setIsTableView} setEditIndex={setEditIndex} expenses={expenses} dispatchExpenseAction={dispatchExpenseAction} />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
