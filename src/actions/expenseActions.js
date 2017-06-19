/*
* action types
*/
export const ADD_EXPENSE = 'ADD_EXPENSE'
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE'
export const UPDATE_TOTAL_EXPENSES = 'UPDATE_TOTAL_EXPENSES'

/*
* action creators
*/
function updateTotalExpenses() {
	return { type: UPDATE_TOTAL_EXPENSES }
}

export const addExpense = expenseObj => (dispatch, getState) => {
	// YOU CAN CHECK FOR KEYS ... and return different action here
	// const reqKeys = ['test']
	// const givenKeys = Object.keys(expenseObj)
	dispatch({
		type: ADD_EXPENSE,
		payload: expenseObj
	})
	dispatch(updateTotalExpenses())
}

// export function removeExpense(_id) {
// 	return {
// 		type: REMOVE_EXPENSE,
// 		payload: _id
// 	}
// }
export const removeExpense = _id => (dispatch, getState) => {
	dispatch({
		type: REMOVE_EXPENSE,
		payload: _id
	})
	dispatch(updateTotalExpenses())
}
