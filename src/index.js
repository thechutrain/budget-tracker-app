import React from 'react'
import ReactDOM from 'react-dom'
import App from './App/App'
import store from './store'
import { Provider } from 'react-redux'
// ======= TESTING PURPOSES ============
// import { addExpense, updateTotalExpenses } from './actions/expenseActions'
// import { addExpense, removeExpense } from './actions/expenseActions'
// import {
// 	addCategory,
// 	removeCategory,
// 	updateCategoryBudget,
// 	updateTotalBudget
// } from './actions/userActions'

ReactDOM.render(
	<Provider store={store}><App /></Provider>,
	document.getElementById('root')
)

// ========== TESTING ===========
// store.dispatch(
// 	addExpense({
// 		amount: 19.99,
// 		date: 123122312312,
// 		type: 'grocery',
// 		details: 'Trader Joes'
// 	})
// )
//
// store.dispatch(
// 	addExpense({
// 		amount: 11.11,
// 		date: 123122312312,
// 		type: 'grocery',
// 		details: 'shoprite'
// 	})
// )

// store.dispatch(updateTotalExpenses())

// WORKIng
// store.dispatch(addCategory({ category: 'grocery', monthlyBudget: 125 }))
// store.dispatch(addCategory({ category: 'water', monthlyBudget: 25 }))
// store.dispatch(removeCategory('grocery'))
// store.dispatch(updateCategoryBudget({ category: 'grocery', monthlyBudget: 99 }))

// store.dispatch(updateCategoryBudget({ category: 'grocery', monthlyBudget: 99 }))
// store.dispatch(addCategory({ category: 'electricity', monthlyBudget: 66 }))
// store.dispatch(updateTotalBudget())
// ===== Testing ============
// store.dispatch({ type: 'ADD_EXPENSE' })
// store.dispatch(
// 	addExpense({
// 		amount: 19.99,
// 		date: 1496966946 * 1000,
// 		type: 'Dinning',
// 		details: 'Trader Joes'
// 	})
// )
//
// store.dispatch(setUsername('thechutrain'))
// store.dispatch(
// 	addCategory({
// 		type: 'Dinning',
// 		monthlyBudget: 123
// 	})
// )
// store.dispatch(
// 	addCategory({
// 		type: 'Groceries',
// 		monthlyBudget: 130
// 	})
// )
// store.dispatch(
// 	addExpense({
// 		amount: 22.22,
// 		date: 1496966946 * 1000,
// 		type: 'Shopping for pizza ingredients',
// 		details: 'Trader Joes'
// 	})
// )
// store.dispatch(removeExpense(0))
// store.dispatch(addExpense({ test: 'again' }))

// WITH THUNK --> you can pass in an arrow function
// store.dispatch(dispatcher => {
// 	dispatcher(addExpense({}))
// })
