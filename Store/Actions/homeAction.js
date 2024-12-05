import Cookies from "js-cookie";
import { getEvents } from "../../Services";

const city = Cookies.get("userCity");
export async function getTrendingDataIntoStore(token, dispatch) {
  const dateFrom = new Date().toISOString();
  const trending = await getEvents(
    { dateFrom, limit: 20, city: Cookies.get("cityId") },
    "trending",
    token
  );
  if (trending) {
    dispatch({ type: "TRENDING", payload: trending });
    return true;
  }
  return;
}
export async function getLearningsDataIntoStore(token, dispatch) {
  const learnings = await getEvents({ city }, "learnings", token);
  if (learnings) {
    dispatch({ type: "LEARNINGS", payload: learnings });
    return true;
  }
  return;
}

export async function getPropertyDetailsIntoStore(token, dispatch) {
  const properties = await getEvents({ city }, "properties", token);
  if (properties) {
    dispatch({ type: "PROPERTIES", payload: properties });
    return true;
  }
  return;
}
