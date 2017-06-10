import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Expenses.css'
// Display Components
import ExpenseForm from '../../Components/ExpenseForm.jsx'
import ExpenseTable from '../../Components/ExpenseTable.jsx'
// Redux actions
import { addExpense, removeExpense } from '../../actions/expenseActions'

class Expenses extends Component {
	// constructor(props) {
	// 	super(props)
	// }
	render() {
		let expenseDisplay = null
		if (this.props.expenses.length === 0) {
			expenseDisplay = <p>No Expenses to Display</p>
		} else {
			expenseDisplay = (
				<ExpenseTable
					expenses={this.props.expenses}
					onExpenseRemove={this.props.onExpenseRemove}
				/>
			)
		}
		return (
			<div className="Expenses">
				<h1>Add an Expense: </h1>
				<ExpenseForm dispatchAddExpense={this.props.dispatchAddExpense} />
				{/*  ====== Table ======*/}
				{expenseDisplay}
				{/* {return this.props.expenses.length !==0 (<ExpenseTable expenses={this.props.expenses} />) : (<p>No Expenses to Display</p>)} */}
			</div>
		)
	}
}

// Tieing in Redux
const mapStateToProps = store => {
	return {
		expenses: store.expenses
		// store: store
	}
}
const mapDispatchToProps = dispatch => {
	return {
		onExpenseRemove: id => {
			dispatch(removeExpense(id))
		},
		dispatchAddExpense: expObj => {
			dispatch(addExpense(expObj))
		}
		// onExpenseSubmit: expense => {
		// 	dispatch(addExpense(expense))
		// }
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Expenses)
// export default connect(mapStateToProps)(Expenses)
