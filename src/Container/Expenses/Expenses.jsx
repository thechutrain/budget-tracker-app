import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
					_removeExpense={id => {
						this.props.dispatch(removeExpense(id))
					}}
				/>
			)
		}
		return (
			<div className="Expenses">
				<ExpenseForm
					_addExpense={expObj => {
						this.props.dispatch(addExpense(expObj))
					}}
				/>
				{/*  ====== Table ======*/}
				{expenseDisplay}
				{/* {return this.props.expenses.length !==0 (<ExpenseTable expenses={this.props.expenses} />) : (<p>No Expenses to Display</p>)} */}
			</div>
		)
	}
}

// ======== PropTypes =========
Expenses.propTypes = {
	expenses: PropTypes.array.isRequired
}

// ========= Tieing in Redux =========
const mapStateToProps = store => {
	return {
		expenses: store.expenses
	}
}
export default connect(mapStateToProps)(Expenses)
