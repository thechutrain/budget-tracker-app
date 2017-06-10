/*
* action types
*/
export const ADD_EXPENSE = 'ADD_EXPENSE'
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE'

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

export function removeExpense(_id) {
	return {
		type: REMOVE_EXPENSE,
		payload: _id
	}
}
