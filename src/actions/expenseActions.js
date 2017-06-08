/*
* action types
*/
export const ADD_EXPENSE = 'ADD_EXPENSE'

/*
* action creators
*/
export function addExpense(expenseObj) {
	return {
		type: ADD_EXPENSE,
		payload: expenseObj
	}
}
