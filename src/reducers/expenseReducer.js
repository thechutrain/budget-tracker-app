import { ADD_EXPENSE } from '../actions/expenseActions'
import { fromJS } from 'immutable'

// ======== Helper functions ==========
function addExpenseReducer(state, action) {
	const _id = state.length
	const newExpense = Object.assign({}, action.payload, { _id })
	return fromJS(state).update(v => v.push(newExpense)).toJS()
}

// ======= Actual Reducer ============
function expenseReducer(state = [], action) {
	switch (action.type) {
		case ADD_EXPENSE:
			return addExpenseReducer(state, action)
		default:
			return state
	}
}

export default expenseReducer
