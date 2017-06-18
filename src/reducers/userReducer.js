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
//   categories: [
//     { category: 'Grocery', monthlyBudget: 125.75},
//     { category: 'Dinning', monthlyBudget: 120}
//   ],
// }
const defaultUserSettings = {
	name: '',
	categories: {},
	monthlyBudget: null
}

// =========== HELPER reducers =========
function addCategoryReducer(state, action) {
	const categories = fromJS(state.categories).toJS()
	categories[action.payload.category] = action.payload.monthlyBudget || 0
	return Object.assign({}, state, { categories })
}

// function removeCategoryReducer(state, action){}
// function removeCategoryReducer(state, action) {
// 	const categoriesCopy = fromJS(state.categories).toJS()
// 	const categoriesUpdate = categoriesCopy.filter(
// 		category => category.category !== action.payload
// 	)
// 	return Object.assign({}, state, { categories: categoriesUpdate })
// }
//
// function updateBudgetReducer(state, action) {
// 	const categoriesCopy = fromJS(state.categories).toJS()
// 	const categoriesUpdate = categoriesCopy.map(category => {
// 		if (category.category === action.payload.category) {
// 			return {
// 				category: category.category,
// 				monthlyBudget: action.payload.monthlyBudget
// 			}
// 		} else return category
// 	})
// 	return Object.assign({}, state, { categories: categoriesUpdate })
// }
//
// function updateTotalBudgetReducer(state, action) {
// 	let monthlyBudget = 0
// 	state.categories.forEach(category => {
// 		monthlyBudget += category.monthlyBudget
// 	})
// 	return Object.assign({}, state, { monthlyBudget })
// }
// ======= MAIN Reducer ============
function userReducer(state = defaultUserSettings, action) {
	// switch statement on action.type
	switch (action.type) {
		case SET_USERNAME:
			return Object.assign({}, state, { name: action.payload })
		case ADD_CATEGORY:
			return addCategoryReducer(state, action)
		// case REMOVE_CATEGORY:
		// 	return removeCategoryReducer(state, action)
		// case UPDATE_CATEGORY_BUDGET:
		// 	return updateBudgetReducer(state, action)
		// case UPDATE_TOTAL_BUDGET:
		// 	return updateTotalBudgetReducer(state, action)
		default:
			return state
	}
}

export default userReducer
