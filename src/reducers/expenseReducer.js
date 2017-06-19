import {
	ADD_EXPENSE,
	REMOVE_EXPENSE,
	UPDATE_TOTAL_EXPENSES
} from '../actions/expenseActions'
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
function addExpenseReducer(state, action) {
	const newExpense = Object.assign({}, action.payload, { _id: state.nextId })
	return fromJS(state)
		.updateIn(['rawExpenses'], rawExpenses => rawExpenses.push(newExpense))
		.update('nextId', nextId => (nextId += 1))
		.toJS()
}

function removeExpenseReducer(state, action) {
	const updatedState = fromJS(state).toJS()
	updatedState.rawExpenses = updatedState.rawExpenses.filter(
		expObj => expObj._id !== action.payload
	)
	return updatedState
}

function updateTotalExpensesReducer(state, action) {
	// loop through rawExpenses
	let totalExpenses = 0
	let totalExpensesByCategory = {}
	state.rawExpenses.forEach(expense => {
		if (totalExpensesByCategory.hasOwnProperty(expense.type)) {
			totalExpensesByCategory[expense.type] += parseFloat(
				expense.amount.toFixed(2)
			)
		} else {
			totalExpensesByCategory[expense.type] = parseFloat(
				expense.amount.toFixed(2)
			)
		}
		totalExpenses += parseFloat(expense.amount.toFixed(2))
	})
	// HACK
	for (let key in totalExpensesByCategory) {
		totalExpensesByCategory[key] = parseFloat(
			totalExpensesByCategory[key].toFixed(2)
		)
	}
	const updatedState = fromJS(state).toJS()
	updatedState.totalExpenses = parseFloat(totalExpenses.toFixed(2))
	updatedState.totalExpensesByCategory = totalExpensesByCategory
	return updatedState
}

// ======= Actual Reducer ============
function expenseReducer(state = defaultState, action) {
	switch (action.type) {
		case ADD_EXPENSE:
			return addExpenseReducer(state, action)
		case REMOVE_EXPENSE:
			return removeExpenseReducer(state, action)
		case UPDATE_TOTAL_EXPENSES:
			return updateTotalExpensesReducer(state, action)
		default:
			return state
	}
}

export default expenseReducer
