export function accessTokenReducer(state, action) {
	switch (action.type) {
		case "VERIFY":
			return { ...state, emailVerified: true };
		case "ACCESS_TOKEN":
			return { ...state, accessToken: action.payload };
		default:
			state;
	}
}
