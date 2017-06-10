import React from 'react'
import ReactDOM from 'react-dom'
import App from './App/App'
import store from './store'
import { Provider } from 'react-redux'
// ======= TESTING PURPOSES ============
import { addExpense, removeExpense } from './actions/expenseActions'

ReactDOM.render(
	<Provider store={store}><App /></Provider>,
	document.getElementById('root')
)

// ===== Testing ============
// store.dispatch({ type: 'ADD_EXPENSE' })
store.dispatch(
	addExpense({
		amount: 19.99,
		date: 1496966946 * 1000,
		type: 'Dinning',
		details: 'Trader Joes'
	})
)
store.dispatch(
	addExpense({
		amount: 22.22,
		date: 1496966946 * 1000,
		type: 'Shopping for pizza ingredients',
		details: 'Trader Joes'
	})
)
store.dispatch(removeExpense(0))
// store.dispatch(addExpense({ test: 'again' }))

// WITH THUNK --> you can pass in an arrow function
// store.dispatch(dispatcher => {
// 	dispatcher(addExpense({}))
// })
