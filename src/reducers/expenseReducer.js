import { ADD_EXPENSE, REMOVE_EXPENSE } from '../actions/expenseActions'
import { fromJS, toJS } from 'immutable'

// ========SAMPLE userExpenses ====
// userExpenses: {
//   rawExpenses: [
// 		{ details: 'trader joes', amount: 12, date: 12312312, type: 'grocery', _id: 0},
// 		{ details: 'trader joes', amount: 22, date: 12312312, type: 'grocery', _id: 1}
// 	],
// }

// default state
const defaultState = {
	rawExpenses: [],
	totalExpenses: 0,
	totalExpensesByCategory: {},
	nextId: 0
}

// ======== Helper functions ==========
function addExpenseReducer(state, payload) {
	const newExpense = Object.assign({}, payload, { _id: state.nextId })
	return fromJS(state)
		.updateIn(['rawExpenses'], rawExpenses => rawExpenses.push(newExpense))
		.update('nextId', nextId => (nextId += 1))
		.toJS()
}
// function addExpenseReducer(state, payload) {
// 	const _id = state.rawExpense.length
// 	const newExpense = Object.assign({}, payload, { _id })
// 	return fromJS(state).update(v => v.push(newExpense)).toJS()
// }

function removeExpenseReducer(state, payload) {
	const updatedState = fromJS(state).toJS()
	updatedState.rawExpenses = updatedState.rawExpenses.filter(
		expObj => expObj._id !== payload
	)
	return updatedState
}

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
