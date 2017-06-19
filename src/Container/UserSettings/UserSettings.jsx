import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Card, CardHeader, CardBlock } from 'reactstrap'
import DisplayCategoryForm from './DisplayCategoryForm.jsx'
// REDUX Actions
import { addCategory } from '../../actions/userActions'

class UserSettings extends Component {
	render() {
		return (
			<div className="UserSettings">
				<Card>
					<CardHeader>
						<h3>USER settings </h3>
					</CardHeader>
					<CardBlock>
						<DisplayCategoryForm
							addCategory={newCat => {
								this.props.dispatch(addCategory(newCat))
							}}
						/>
					</CardBlock>
				</Card>
			</div>
		)
	}
}

// ======== PropTypes =========
// UserSettings.propTypes = {
// 	expenses: PropTypes.array.isRequired
// }

// ========= Tieing in Redux =========
const mapStateToProps = store => {
	return {
		userSettings: store.userSettings
	}
}
export default connect(mapStateToProps)(UserSettings)
