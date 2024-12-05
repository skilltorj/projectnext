import {
  emailLogin,
  getUserProfile,
  verifyOtp,
  verifySocialLogin,
} from "../../Services";
import jsCookie from "js-cookie";
import router from "next/router";

const loginAction = async (action, dispatch) => {
  switch (action.type) {
    case "GOOGLE":
      const res = await verifySocialLogin(action.payload);

      if (!res) {
        return;
      }
      if (res.data.statusCode === 200) {
        jsCookie.set(
          "jwtToken",
          res.data.result.token /* { expires: 1 / 24 } */
        );
        const profileRes = await getUserProfile();
        dispatch({
          type: "LOGIN",
          payload: profileRes.user,
        });
        //location.reload(true);
        return;
      }
      return "inavlid";
    case "EMAIL":
      const eRes = await emailLogin(action.payload);
      if (!eRes) {
        return "Something went wrong";
      }
      if (typeof eRes === "string") {
        return eRes;
      } else {
        jsCookie.set("jwtToken", eRes.token.token /* { expires: 1 / 24 } */);
        const profileRes = await getUserProfile();
        dispatch({
          type: "LOGIN",
          payload: profileRes.user,
        });
        location.reload(true);
      }
      return;
    case "OTP":
      const payload = {
        token: sessionStorage.getItem("accessToken"),
        otp: action.payload,
      };
      // validating otp
      const otpres = await verifyOtp(payload);
      if (!otpres) {
        return;
      }
      // if otp is valid
      if (otpres.statusCode === 200) {
        jsCookie.set("jwtToken", otpres.token.token, { expires: 3 / 24 });

        const profileRes = await getUserProfile();
        dispatch({
          type: "LOGIN",
          payload: profileRes.user,
        });
        //location.reload(true);
        return true;
      }
      return;
    case "LOGGED_IN":
      const profileRes = await getUserProfile();
      if (profileRes) {
        dispatch({
          type: "LOGIN",
          payload: profileRes.user || null,
        });
        return;
      } else {
        dispatch({ type: "LOGOUT", router: router });
      }

    default:
      return dispatch({ type: "LOGIN", payload: action.payload });
  }
};

export default loginAction;
