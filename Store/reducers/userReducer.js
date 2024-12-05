import Cookies from "js-cookie";
import router from "next/router";

export const initialUserState = {
  isLoggedIn: false,

  myListings: [],
};

export default function userReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "LOGIN":
      //router && router.push() && router.push("/");
      return { ...state, isLoggedIn: true, ...payload };
    case "LOGOUT":
      Cookies.remove("jwtToken");
      Cookies.remove("prToken");
      //location.reload(true);
      router?.push("/");

      return {
        ...state,
        id: "",
        profile_picture: null,
        full_name: null,
        email: null,
        isLoggedIn: false,
        mobile_no: null,
      };

    //location.reload(true);
    default:
      return state;
  }
}
