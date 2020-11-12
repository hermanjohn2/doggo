const initialState = {
	user: {
		userId: '',
		firstName: '',
		lastName: '',
		email: '',
		dogs: []
	}
};

export default function filtersReducer(state = initialState, action) {
	switch (action.type) {
		case 'login/setId': {
			return {
				// Again, one less level of nesting to copy
				...state,
				userId: action.payload
			};
		}
		case 'login/setUser': {
			return {
				...state,
				user: action.payload
			};
		}

		default:
			return state;
	}
}
