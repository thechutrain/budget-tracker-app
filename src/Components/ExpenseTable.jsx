import React from 'react'
import Moment from 'moment'
import { Card, CardHeader, CardBlock } from 'reactstrap'

// ======== helper function ========
const ExpenseRow = props => {
	const { date, details, type, amount, _id, _removeExpense } = props
	return (
		<tr>
			<td>{Moment(date).format('MMMM Do')}</td>
			<td>{details}</td>
			<td>{type}</td>
			<td>{amount}</td>
			{/* <td onClick={this.handleDelete}> */}
			<td
				// onClick={_removeExpense(_id)} // REnder methods shoudl be pure functions of props and state,
				// constructor side-effects are an anti-pattern, move to componentWillMount
				onClick={() => {
					_removeExpense(_id)
				}}
			>
				<button className="btn btn-block btn-danger">Delete</button>
			</td>
		</tr>
	)
}

// ======== Main render component ========
const ExpenseTable = props => {
	return (
		<Card>
			<CardHeader><h3>Your Expenses:</h3></CardHeader>
			<CardBlock>
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
							// ExpenseRow(expense, props._removeExpense)
							<ExpenseRow
								key={expense._id}
								{...expense}
								_removeExpense={props._removeExpense}
							/>
						)}
					</tbody>
				</table>
			</CardBlock>
		</Card>
	)
}

export default ExpenseTable
