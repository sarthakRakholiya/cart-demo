// ***** start - imports from package *****
import { createWrapper } from 'next-redux-wrapper'
// ***** end - imports from package *****

// ***** start - imports from files *****
import { createStore } from '../redux/store'
// ***** end - imports from files *****

// ***** start - create store *****
export const makeStore = () => createStore()
// ***** end - create store *****

// ***** start - wrapper for app files *****
export const wrapper = createWrapper(makeStore, { debug: true })
// ***** end - wrapper for app files *****

// ***** start - useStore hooks *****
export const useStore = (initialState) => {
	const store = createStore(initialState)
	return store
}
// ***** end - useStore hooks *****