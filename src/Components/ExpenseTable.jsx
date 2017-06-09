import React from 'react'
import Moment from 'moment'

// helper function
function displayRow(props) {
	return (
		<tr>
			<td>{Moment(props.date).format('MMMM Do')}</td>
			<td>{props.details}</td>
			<td>{props.type}</td>
			<td>{props.amount}</td>
		</tr>
	)
}

const ExpenseTable = props => {
	return (
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
				{/* {this.props.expenses.map(expense =>
					<ExpenseRow {...expense} key={expense._id} />
				)} */}
				{props.expenses.map(expense => displayRow(expense))}
			</tbody>
		</table>
	)
}

export default ExpenseTable
