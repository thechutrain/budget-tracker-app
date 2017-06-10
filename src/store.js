import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducers from './reducers'

let store

if (process.env.NODE_ENV === 'production') {
	store = createStore(reducers, applyMiddleware(thunk, createLogger()))
} else {
	store = createStore(
		reducers,
		compose(
			applyMiddleware(thunk, createLogger()),
			typeof window === 'object' &&
				typeof window.devToolsExtension !== 'undefined'
				? window.devToolsExtension()
				: f => f
		)
	)
	// store = createStore(reducers, applyMiddleware(thunk, createLogger()))
}

export default store
