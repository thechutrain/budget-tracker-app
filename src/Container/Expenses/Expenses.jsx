import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Expenses.css'
// Display Components

import ExpenseForm from '../../Components/ExpenseForm.jsx'
import ExpenseTable from '../../Components/ExpenseTable.jsx'

class Expenses extends Component {
	// constructor(props) {
	// 	super(props)
	// }
	render() {
		let expenseDisplay = null
		if (this.props.expenses.length === 0) {
			expenseDisplay = <p>No Expenses to Display</p>
		} else {
			expenseDisplay = <ExpenseTable expenses={this.props.expenses} />
		}
		return (
			<div className="Expenses">
				<h1>Add an Expense: </h1>
				<ExpenseForm />
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
		expenses: store.expenseReducer,
		store: store
	}
}
// const mapDispatchToProps = dispatch => {
// 	return {
// 		onExpenseSubmit: expense => {
// 			dispatch(addExpense(expense))
// 		}
// 	}
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Expenses)
export default connect(mapStateToProps)(Expenses)
