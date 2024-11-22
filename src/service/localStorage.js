const EXPENSES_DATA_KEY = 'expenses_data_key';

export function getExpenses() {
    const expensesDataString = localStorage.getItem(EXPENSES_DATA_KEY) || '[]';
    const expenses = JSON.parse(expensesDataString);
    return expenses;
}

export function setExpenses(expenses) {
    const updatedExpensesString = JSON.stringify(expenses);
    localStorage.setItem('expenses_data_key', updatedExpensesString);
}
