import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Expenses.css'
// Display Components
import SingleExpense from '../../Components-Dumb/SingleExpense.jsx'
import ExpenseForm from './ExpenseForm.jsx'
// import AddExpenseForm from '../../Components-Dumb/AddExpenseForm.jsx'
// Redux actions
import { addExpense } from '../../actions/expenseActions'
import store from '../../store.js'

class Expenses extends Component {
	constructor(props) {
		super(props)
		this.onFormSubmit = this.onFormSubmit.bind(this)
	}
	onFormSubmit = () => {
		console.warn('onFormSubmit is pressed!')
		store.dispatch(addExpense({ type: 'testing 123', amount: 99 }))
	}
	render() {
		return (
			<div className="Expenses">
				<h1>Hello from Expense Component </h1>
				<ExpenseForm />
				{/*  ====== Table ======*/}
				<table>
					<thead>
						<tr>
							<th> Date: </th>
							<th> Type: </th>
							<th> Details: </th>
							<th> Amount: </th>
						</tr>
					</thead>
					<tbody>
						{this.props.expenses.map(expense =>
							<SingleExpense {...expense} key={expense._id} />
						)}
					</tbody>
				</table>
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
