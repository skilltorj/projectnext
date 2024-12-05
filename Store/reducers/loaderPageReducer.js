export default function loadingPageReducer(state, action) {
	switch (action.type) {
		case "LOADING":
			return true;
		case "STOP__LOADING":
			return false;
	}
}
