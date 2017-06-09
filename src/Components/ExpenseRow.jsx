import React from 'react'
import Moment from 'moment'

const ExpenseRow = props =>
	<tr>
		<td>{Moment(props.date).format('MMMM Do')}</td>
		<td>{props.details}</td>
		<td>{props.type}</td>
		<td>{props.amount}</td>
	</tr>
// <li>
// 	<p>Details: {props.details}</p>
// 	<p>Type: {props.type}</p>
// 	<p>Amount: {props.amount}</p>
// </li>

export default ExpenseRow
