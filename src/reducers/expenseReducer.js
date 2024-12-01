export default function expenseReducer(state, action) {
    switch (action.type) {
        case "EDIT": {
            const { ind, expense } = action.payload;
            const updatedState = [...state];
            updatedState[ind] = expense;
            return updatedState;
        }
        case "ADD": {
            const { expense } = action.payload;
            return [...state, expense];
        }
        case "DELETE": {
            const { ind } = action.payload;
            return state.filter((_, index) => ind !== index);
        }
        case "REFILL": {
            const { expenses } = action.payload;
            return expenses;
        }
        default: {
            return state;
        }
    }
}