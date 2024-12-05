export const initialSearchState = {
  searchResult: [],
  payload: { filter: null },
  searchPossible: [],
};

export default function searchReducer(state, action) {
  switch (action.type) {
    case "SEARCH_RESULT":
      return {
        ...state,
        searchResult: action.payload,
      };
    case "SEARCH_POSSIBLE":
      return {
        ...state,
        searchPossible: action.payload,
      };
    case "SEARCH__PAYLOAD":
      return {
        ...state,
        payload: action.payload,
      };
    case "CLEAR_FIELD":
      return {
        payload: {},
        searchResult: [],
        searchPossible: [],
      };
    case "CLEAR_PAYLOAD":
      return { ...state, payload: {} };
    case "CLEAR_DATE":
      return {
        ...state,
        payload: { ...state.payload, dateFrom: null, dateTo: null },
      };
    case "CLEAR_SEARCH":
      return { ...state, payload: { ...state.payload, search: "" } };
    default:
      return state;
  }
}
