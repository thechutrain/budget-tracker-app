import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Expenses.css'
// Display Components
import ExpenseRow from '../../Components/ExpenseRow.jsx'
import ExpenseForm from '../../Components/ExpenseForm.jsx'

class Expenses extends Component {
	// constructor(props) {
	// 	super(props)
	// }
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
							<ExpenseRow {...expense} key={expense._id} />
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
