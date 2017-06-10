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
					_removeExpense={this.props._removeExpense}
				/>
			)
		}
		return (
			<div className="Expenses">
				<h1>Add an Expense: </h1>
				<ExpenseForm _addExpense={this.props._addExpense} />
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
		_removeExpense: id => {
			dispatch(removeExpense(id))
		},
		_addExpense: expObj => {
			dispatch(addExpense(expObj))
		}
		// onExpenseSubmit: expense => {
		// 	dispatch(addExpense(expense))
		// }
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Expenses)
// export default connect(mapStateToProps)(Expenses)
