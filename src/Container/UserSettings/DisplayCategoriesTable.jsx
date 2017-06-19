import React from 'react'
import { Table } from 'reactstrap'

function DisplayCategoriesTable(props) {
	let RowDisplay = []
	for (let key in props.categories) {
		RowDisplay.push(
			<tr key={key}>
				<td>{key}</td>
				<td>${props.categories[key]}</td>
			</tr>
		)
	}

	return (
		<div className="mt-4">
			<Table>
				<thead>
					<tr>
						<th>Category: </th>
						<th>Monthly Budget: </th>
					</tr>
				</thead>
				<tbody>
					{RowDisplay}
				</tbody>
			</Table>
		</div>
	)
}

export default DisplayCategoriesTable
