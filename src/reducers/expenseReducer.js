import { ADD_EXPENSE, REMOVE_EXPENSE } from '../actions/expenseActions'
import { fromJS } from 'immutable'

// ======== Helper functions ==========
function addExpenseReducer(state, payload) {
	const _id = state.length
	const newExpense = Object.assign({}, payload, { _id })
	return fromJS(state).update(v => v.push(newExpense)).toJS()
}

function removeExpenseReducer(state, payload) {
	const removeId = payload
	return state.filter(expense => expense._id !== removeId)
}

// ======= Actual Reducer ============
function expenseReducer(state = [], action) {
	switch (action.type) {
		case ADD_EXPENSE:
			return addExpenseReducer(state, action.payload)
		case REMOVE_EXPENSE:
			return removeExpenseReducer(state, action.payload)
		default:
			return state
	}
}

export default expenseReducer
