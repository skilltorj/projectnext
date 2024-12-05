export const homeInitialState = {
  featured: [],
  events: [],
  properties: [],
  offers: [],
  education: [],
  learnings: [],
  trending: [],
};

export default function homePageReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "TRENDING":
      return { ...state, trending: payload };
    case "LEARNINGS":
      return { ...state, learnings: payload };
    case "PROPERTIES":
      return { ...state, properties: payload };
    default:
      return state;
  }
}
