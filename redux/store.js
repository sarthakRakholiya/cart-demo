// ***** start - imports from package *****
import { configureStore } from '@reduxjs/toolkit'
// ***** end - imports from package *****

// ***** start - imports from files *****
import rootReducer from './reducers'
// ***** end - imports from files *****

// ***** start - Configuration of store *****
export const createStore = (preloadedState) => {
	return configureStore({
		reducer: rootReducer,
		preloadedState,
	})
}
// ***** end - Configuration of store *****