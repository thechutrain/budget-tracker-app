import {
	SET_USERNAME,
	ADD_CATEGORY,
	REMOVE_CATEGORY,
	UPDATE_CATEGORY_BUDGET,
	UPDATE_TOTAL_BUDGET
} from '../actions/userActions'
import { toJS, fromJS } from 'immutable'

// ========SAMPLE userSettings structure====
// userSettings: {
//   name: 'Alan',
//   categories: {
// 		'grocery': 125,
// 		'utilities': 35,
// 	},
// }
const defaultUserSettings = {
	name: '',
	categories: {},
	monthlyBudget: 0
}

// =========== HELPER reducers =========
function addCategoryReducer(state, action) {
	const categories = fromJS(state.categories).toJS()
	categories[action.payload.category] = action.payload.monthlyBudget || 0
	return Object.assign({}, state, { categories })
}

function removeCategoryReducer(state, action) {
	const categories = fromJS(state.categories).toJS()
	delete categories[action.payload]
	return Object.assign({}, state, { categories })
}

function updateCategoryBudgetReducer(state, action) {
	const categories = fromJS(state.categories).toJS()
	categories[action.payload.category] = action.payload.monthlyBudget
	return Object.assign({}, state, { categories })
}

function updateTotalBudgetReducer(state, action) {
	let monthlyBudget = 0
	for (let key in state.categories) {
		monthlyBudget += state.categories[key]
	}
	return Object.assign({}, state, { monthlyBudget })
}

// ======= MAIN Reducer ============
function userReducer(state = defaultUserSettings, action) {
	// switch statement on action.type
	switch (action.type) {
		case SET_USERNAME:
			return Object.assign({}, state, { name: action.payload })
		case ADD_CATEGORY:
			return addCategoryReducer(state, action)
		case REMOVE_CATEGORY:
			return removeCategoryReducer(state, action)
		case UPDATE_CATEGORY_BUDGET:
			return updateCategoryBudgetReducer(state, action)
		case UPDATE_TOTAL_BUDGET:
			return updateTotalBudgetReducer(state, action)
		default:
			return state
	}
}

export default userReducer
