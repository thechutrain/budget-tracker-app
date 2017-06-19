import { combineReducers } from 'redux'
import expenseReducer from './expenseReducer'
import userReducer from './userReducer'

const reducers = combineReducers({
	userExpenses: expenseReducer,
	userSettings: userReducer
})

export default reducers
