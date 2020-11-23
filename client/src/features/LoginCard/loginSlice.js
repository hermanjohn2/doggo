import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
	name: 'login',
	initialState: {
		id: '',
		firstName: '',
		lastName: '',
		dogs: []
	},
	reducers: {
		setUser: (state, action) => {
			// Redux Toolkit allows me to write 'mutating' login in reducers.
			// State is actually not being mutated b/c the Toolkit is using the Immer library under the hood.
			// Immer detects changes to a "draft state" and produces a brand new immutable state based off changes
			state.id = action.payload.id;
			state.firstName = action.payload.firstName;
			state.lastName = action.payload.lastName;
			state.dogs = action.payload.dogs;
		}
	}
});

export const { setUser } = loginSlice.actions;

export const selectUser = state => state;

export default loginSlice.reducer;
