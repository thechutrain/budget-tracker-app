/*
* action types
*/
export const ADD_EXPENSE = 'ADD_EXPENSE'

/*
* action creators
*/
export function addExpense(expenseObj) {
	// YOU CAN CHECK FOR KEYS ... and return different action here
	// const reqKeys = ['test']
	// const givenKeys = Object.keys(expenseObj)
	return {
		type: ADD_EXPENSE,
		payload: expenseObj
	}
}
