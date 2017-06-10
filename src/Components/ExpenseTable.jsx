import React from 'react'
import Moment from 'moment'
// Redux actions
// import { removeExpense } from '../actions/expenseActions'
// import store from '../store.js'

// ======== helper function ========
// function deleteRow(id) {
// 	return (
// 		<div>
// 			<p onClick={store.dispatch(removeExpense(id))}>delete me: {id}</p>
// 			{/* <p>{JSON.stringify(props)}</p> */}
// 		</div>
// 	)
// }

function displayRow(props) {
	return (
		<tr key={props._id}>
			<td>{Moment(props.date).format('MMMM Do')}</td>
			<td>{props.details}</td>
			<td>{props.type}</td>
			<td>{props.amount}</td>
			{/* <td> {deleteRow(props._id)}</td> */}
		</tr>
	)
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
				{/* {this.props.expenses.map(expense =>
					<ExpenseRow {...expense} key={expense._id} />
				)} */}
				{props.expenses.map(expense => displayRow(expense))}
			</tbody>
		</table>
	)
}

export default ExpenseTable
