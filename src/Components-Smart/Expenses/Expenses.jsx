import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Expenses.css'
// Display Components
import SingleExpense from '../../Components-Dumb/SingleExpense.jsx'

class Expenses extends Component {
	constructor(props) {
		super(props)
		this.setState
	}
	render() {
		return (
			<div className="Expenses">
				<h1>Hello from Expense Component </h1>
				{/* <h3> My expenses:</h3>
				<ul>
					{this.props.expenses.map(expense =>
						<SingleExpense {...expense} key={expense._id} />
					)}
				</ul> */}
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
export default connect(store => {
	return {
		expenses: store.expenseReducer,
		store: store
	}
})(Expenses)
