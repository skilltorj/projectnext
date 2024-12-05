export default function loginDialogBoxReducer(state, action) {
	switch (action.type) {
		case "SHOW":
			return true;
		case "HIDE":
			return false;
		default:
			return state;
	}
}
