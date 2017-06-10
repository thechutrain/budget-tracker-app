import React from 'react'
import Moment from 'moment'

// helper function
function displayRow(props) {
	// WONT WORK YO
	// onClick = e => {
	// 	e.preventDefault()
	// 	alert('I was clicked!')
	// }
	return (
		<tr key={props._id}>
			<td>{Moment(props.date).format('MMMM Do')}</td>
			<td>{props.details}</td>
			<td>{props.type}</td>
			<td>{props.amount}</td>
			<td> EDIT/REMOVE smart component?</td>
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
					<th> Edit/Remove </th>
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
