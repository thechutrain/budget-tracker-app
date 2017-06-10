import React, { Component } from 'react'
import Moment from 'moment'

// ======== helper function ========
class NewRow extends Component {
	handleDelete = e => {
		e.preventDefault()
		this.props._removeExpense(this.props.expense._id)
	}
	render() {
		const { date, details, type, amount } = this.props.expense
		return (
			<tr>
				<td>{Moment(date).format('MMMM Do')}</td>
				<td>{details}</td>
				<td>{type}</td>
				<td>{amount}</td>
				<td onClick={this.handleDelete}>
					<button className="btn btn-block btn-danger">Delete</button>
				</td>
			</tr>
		)
	}
}

// ======== Main render component ========
const ExpenseTable = props => {
	return (
		<table>
			<thead>
				<tr>
					<th> Date: </th>
					<th> Type: </th>
					<th> Details: </th>
					<th> Amount: </th>
					<th> Edit/Remove </th>
				</tr>
			</thead>
			<tbody>
				{props.expenses.map(expense =>
					<NewRow
						key={expense._id}
						expense={expense}
						_removeExpense={props._removeExpense}
					/>
				)}
			</tbody>
		</table>
	)
}

export default ExpenseTable
