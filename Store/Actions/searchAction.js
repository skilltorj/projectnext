import Cookies from "js-cookie";
import { getSearchedData } from "../../Services";

export const searchAction = async (fieldData, dispatch) => {
  const token = Cookies.get("jwtToken");
  const options = {
    filter: fieldData.filter,
    search: fieldData.search,
    dateFrom: fieldData.dateFrom,
    dateTo: fieldData.dateTo,
    skip: fieldData.skip,
    limit: fieldData.limit,
    city: Cookies.get("userCity"),
  };

  const data = await getSearchedData(options, token);

  const { focusResult, possibleMatchResult } = data;
  if (typeof focusResult === "object") {
    dispatch({
      type: "SEARCH_RESULT",
      payload: focusResult.searchResult,
    });
    dispatch({
      type: "SEARCH__PAYLOAD",
      payload: fieldData,
    });
    dispatch({ type: "SEARCH_POSSIBLE", payload: possibleMatchResult });
  } else {
  }
};
