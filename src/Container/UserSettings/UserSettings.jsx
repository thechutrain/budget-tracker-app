import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Card, CardHeader, CardBlock } from 'reactstrap'
import DisplayCategoryForm from './DisplayCategoryForm.jsx'
import DisplayCategoriesTable from './DisplayCategoriesTable'
// REDUX Actions
import { addCategory } from '../../actions/userActions'

class UserSettings extends Component {
	render() {
		return (
			<div className="UserSettings">
				<Card>
					<CardHeader>
						<h3>Categories settings </h3>
					</CardHeader>
					<CardBlock>
						<DisplayCategoryForm
							addCategory={newCat => {
								this.props.dispatch(addCategory(newCat))
							}}
						/>
						<DisplayCategoriesTable
							categories={this.props.userSettings.categories}
						/>
					</CardBlock>
				</Card>
			</div>
		)
	}
}

// ======== PropTypes =========
UserSettings.propTypes = {
	// expenses: PropTypes.array.isRequired
	userSettings: PropTypes.shape({
		name: PropTypes.string,
		monthlyBudget: PropTypes.number,
		categories: PropTypes.object
	})
}

// ========= Tieing in Redux =========
const mapStateToProps = store => {
	return {
		userSettings: store.userSettings
	}
}
export default connect(mapStateToProps)(UserSettings)
