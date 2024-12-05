const selectedCityReducer = (state, action) => {
	switch (action.type) {
		case "UPDATE":
			return action.payload;
		case "REMOVE_THIS":
			return state.filter((item) => item !== action.payload);
		default:
			return state;
	}
};

export default selectedCityReducer;
