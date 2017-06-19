import { ADD_EXPENSE, REMOVE_EXPENSE } from '../actions/expenseActions'
import { fromJS, toJS } from 'immutable'

// default state
const defaultState = {
	rawExpense: [],
	orderedExpenses: [],
	orderedBy: '',
	totalExpenses: 0
}

// ======== Helper functions ==========
function addExpenseReducer(state, payload) {
	const clonedState = fromJS(state).toJS()
	clonedState.rawExpenses.push(payload.expenseObj)
}
// function addExpenseReducer(state, payload) {
// 	const _id = state.rawExpense.length
// 	const newExpense = Object.assign({}, payload, { _id })
// 	return fromJS(state).update(v => v.push(newExpense)).toJS()
// }

// function removeExpenseReducer(state, payload) {
// 	const removeId = payload
// 	return state.filter(expense => expense._id !== removeId)
// }

// ======= Actual Reducer ============
function expenseReducer(state = defaultState, action) {
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
