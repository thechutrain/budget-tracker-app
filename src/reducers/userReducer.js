import {
	SET_USERNAME,
	ADD_CATEGORY,
	REMOVE_CATEGORY
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
	categories: [],
	monthlyBudget: null
}

// =========== HELPER reducers =========
function addCategoryReducer(state, action) {
	const categories = fromJS(state.categories).toJS()
	// console.warn(categories)
	const newCategory = Object.assign(
		{},
		{ category: '', monthlyBudget: 0 },
		{
			category: action.payload.category,
			monthlyBudget: action.payload.monthlyBudget
		}
	)
	categories.push(action.payload)
	return Object.assign({}, state, { categories })
}

function removeCategoryReducer(state, action) {
	const categoriesCopy = fromJS(state.categories).toJS()
	const categoriesUpdate = categoriesCopy.filter(
		category => category.category !== action.payload
	)
	return Object.assign({}, state, { categories: categoriesUpdate })
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
		default:
			return state
	}
}

export default userReducer
