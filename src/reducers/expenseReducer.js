import { ADD_EXPENSE } from '../actions/expenseActions'

function expenseReducer(state = [], action) {
	switch (action.type) {
		case ADD_EXPENSE:
			// do something here
			return state
			break
		default:
			return state
	}
}

export default expenseReducer
