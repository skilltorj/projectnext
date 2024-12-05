import axios from "axios";
import { htmlToText } from "html-to-text";
import Cookies from "js-cookie";
import { getFromDate, getTODate } from "./util";

const development = "https://cityquest-dev-api.kultivate.cloud/";
const production = "https://server.cityquest.in/";
const local = "http://localhost:9091/";
const devServer = "https://dev-server.cityquest.app/";
/*  https://dev-app.cityquest.app/ */

const BASE_URL = production;
const Token = "Bearer ehatstasttaas";

export const getToken = async () => {
  const token = Cookies.get("jwtToken");
  return token ? `Bearer ` + token : `Bearer sidjhkdkhrdfhdkn`;
};
//for mobile otp
export async function generateOtp(mobileNo) {
  try {
    const res = await axios.post(BASE_URL + "auth/signin", {
      mobile_no: mobileNo,
    });
    sessionStorage.setItem("accessToken", res.data.access_token);
    return res.data;
  } catch (error) {
    return error.response.data.message;
  }
}

export async function verifyOtp(payload) {
  try {
    const res = await axios.post(BASE_URL + "auth/verify-otp", {
      access_token: payload.token,
      otp: payload.otp,
    });
    return res.data;
  } catch (error) {
    return;
  }
}
// get user profile after otp verified
export async function getUserProfile(cT) {
  const token = cT || (await Cookies.get("jwtToken"));
  let options = {};
  if (token) {
    options = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
  }
  try {
    const res = await axios({
      url: BASE_URL + "customer/profile",
      method: "get",
      headers: options.headers,
    });
    return res.data;
  } catch (error) {
    return;
  }
}
// singin using google,fb login need to send accessId
export async function verifySocialLogin(payload) {
  try {
    const res = await axios.post(BASE_URL + "auth/social/login", {
      provider: payload.provider,
      idToken: payload.idToken,
      webLogin: true,
    });

    return res;
  } catch (err) {
    return;
  }
}

export const emailLogin = async (payload) => {
  const options = {
    headers: {
      Authorization: "Bearer " + Cookies.get("jwtToken") || "Bearer " + Token,
    },
    provider: "email",
    email: payload.email,
    password: payload.password,
  };

  try {
    const eRef = await axios.post(BASE_URL + "auth/login", options);
    return eRef.data || "not";
  } catch (error) {
    return error.response.data.message;
  }
};
// get category for each module
export const getCategories = async (type, params) => {
  try {
    const res = await axios.get(BASE_URL + `${type}/categories`, {
      method: "GET",
      headers: {
        Authorization: Token,
      },
      params,
    });
    let data = res.data;

    return data.categories;
  } catch (error) {
    return error.response.data.message;
  }
};

export const getAllEvents = async () => {
  const options = {
    headers: {
      Authorization: getToken(),
    },
  };

  try {
    const res = await fetch(BASE_URL + "events/", {
      method: "GET",
      ...options,
    });
    const data = await res.json();
    return data.events;
  } catch (error) {
    return;
  }
};
// get list api for all modules except education
export const getEvents = async (payload, type, cT) => {
  const options = {
    headers: {
      Authorization: cT ? "Bearer " + cT : Token,
    },
    params: {
      ...payload,
      dateFrom:
        (payload.dateFrom && getFromDate(payload.dateFrom)) ||
        (type !== "learnings" && type !== "offers"
          ? getFromDate(new Date()).toISOString()
          : ""),
      dateTo: payload.dateTo && getTODate(payload.dateTo),
    },
  };

  try {
    let res = await axios({
      url: BASE_URL + `${type}`,
      method: "GET",
      headers: options.headers,
      params: options.params,
    });

    const data = (await res).data[type === "helpline" ? "contacts" : type];

    return data.map((event) => ({
      ...event,
      description: event.description ? htmlToText(event.description) : null,
    }));
  } catch (error) {
    return;
  }
};
export const getMallStores = async (payload, tk) => {
  const headers = {
    Authorization: "Bearer " + tk || Token,
  };
  try {
    const mallStores = await axios.get(BASE_URL + "shop/list", {
      params: payload,
      headers: headers,
    });
    return mallStores.data.results;
  } catch (error) {}
};
// location for filters
export const getEventLocations = async (type, query) => {
  const options = {
    headers: {
      Authorization: Token,
    },
    params: query,
  };
  try {
    const res = await axios.get(BASE_URL + `${type}/locations`, options);
    const data = await res.data.locations;

    return data;
  } catch (error) {
    return;
  }
};
//search page / smart search api
export const getSearchedData = async (payload, token) => {
  const options = {
    headers: {
      Authorization: token ? "Bearer " + token : Token,
    },
    params: {
      ...payload,
      dateFrom:
        payload.dateFrom ||
        (payload.filter !== "offers" && payload.filter !== "learning"
          ? new Date().toISOString()
          : null),
    },
  };
  try {
    const res = await axios.get(BASE_URL + "search/smart/", options);
    return res.data;
  } catch (error) {
    return;
  }
};
// for details page
export const getById = async (type, id, token) => {
  const options = {
    headers: {
      Authorization: token ? "Bearer " + token : Token,
    },
  };
  try {
    const res = await axios.get(BASE_URL + type + "/" + id, options);
    return res.data;
  } catch (error) {}
};
// featured carousel
export const getFeatured = async (cT) => {
  const categories = ["events", "learnings", "offers", "properties"];
  const token = cT ? "Bearer " + cT : Token;
  const options = {
    header: {
      Authorization: token,
    },
    params: {
      skip: 0,
      limit: 10,
      dateFrom: new Date().toISOString(),
    },
  };
  try {
  } catch (error) {
    return;
  }
  return featured;
};
// favourites
export const getFavourites = async (token, payload) => {
  if (!token) return "";
  let options = {
    headers: {
      Authorization: "Bearer " + token,
    },
    params: payload,
  };
  try {
    let res = await axios.get(BASE_URL + "favourites", options);
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};
// add or remove favourites
export const modifyFavourites = async (eventId, type) => {
  let token = Cookies.get("jwtToken");
  if (!token) return { statusCode: 401 };
  let options = {};
  if (token) {
    options = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
  }
  if (!token) return;
  try {
    const res = await axios.patch(
      `${BASE_URL}${type}/favourite/${eventId}`,
      "",
      options
    );
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};


export const modifyMallFavourites = async (eventId, type) => {
  let token = Cookies.get("jwtToken");
  if (!token) return { statusCode: 401 };
  let options = {};
  if (token) {
    options = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
  }
  try {
    const id = eventId;
    const res = await axios.post(
      `${BASE_URL}${type}/favourite?mall=${id}`, // Corrected interpolation
      {},
      options // Use the options object
    );
    console.log("modifyMallFavourites response", res); 
    return res.data;
  } catch (error) {
    console.error("modifyMallFavourites error", error); 
    console.log("eventId", eventId);
    return error.response.data;
  }
};






// bulilder prodile for property filter
export const getBuilderProfile = async (cT) => {
  const option = {
    headers: {
      Authorization: cT ? "Bearer " + cT : Token,
    },
  };
  try {
    const res = await axios.get(
      BASE_URL + "properties/builder/profile/",
      option
    );
    return res.data.profiles;
  } catch (error) {
    return;
  }
};

// profile update
export async function updateProfile(payload, cT) {
  const token = await Cookies.get("jwtToken");
  const fileName =
    payload.blob &&
    `${new Date().getTime()}.${String(payload.blob.type).split("/")[1]}`;
  const formData = new FormData();

  formData.append("full_name", payload.full_name);
  !payload.blob
    ? formData.append("picture", payload.profilePicture)
    : formData.append("picture", payload.blob, fileName);
  payload.email && formData.append("email", payload.email);
  payload.mobile_no && formData.append("mobile_no", payload.mobile_no);
  !payload.mobile_no && formData.append("mobile_no", '');

  try {
    const res = await axios({
      url: BASE_URL + "customer/profile",
      headers: {
        Authorization: "Bearer " + cT || token,
        "Content-Type": "multipart/form-data",
       
      },

      method: "put",
      data: formData,
    });
    return res;
  } catch (error) {
    return error.response.data.message || "something went wrong";
  }
}

export const deleteProfilePicture = async () => {
  const token = Cookies.get("jwtToken");
  if (!token) return "no user found";
  const headers = { Authorization: "Bearer " + token };
  try {
    const deletePicture = await axios({
      url: BASE_URL + "customer/profile-picture",
      method: "DELETE",
      headers,
    });
    return deletePicture.data;
  } catch (error) {
    return error.response.data;
  }
};

export const setRemainder = async (type, id, cT) => {
  const token = cT ? "Bearer " + cT : "Bearer " + Cookies.get("jwtToken");

  if (!token) return alert("please login to continue");

  let options = {
    headers: {
      Authorization: token,
    },
  };
  try {
    const remRes = axios.patch(
      BASE_URL + type + "/reminder/" + id,
      "",
      options
    );
    return remRes;
  } catch (error) {
    return;
  }
};
export const searchApi = async (type, search, cT) => {
  const token = cT ? cT : Token;
  const options = {
    headers: {
      Authorization: "Bearer " + token,
    },
    params: {
      skip: 0,
      limit: 10,
      search,
    },
  };
  try {
    const searchRes = await axios.get(BASE_URL + type + "/", options);
    return searchRes;
  } catch (error) {
    return;
  }
};
//otp for email verification
export const emailGenOtp = async (email) => {
  const options = {
    headers: {
      Authorization: Token,
    },

    provider: "email",
    email: email,
  };
  try {
    const emailOtp = await axios.post(BASE_URL + "auth/signin/email", options);
    return emailOtp.data;
  } catch (error) {
    return error.response.data.message;
  }
};

export const forgotPassword = async (email) => {
  const option = {
    headers: {
      Authorization: Token,
    },
    provider: "email",
    email: email,
  };
  try {
    const forgotRes = await axios.post(
      BASE_URL + "auth/password/forgot",
      option
    );
    return forgotRes.data;
  } catch (error) {
    return error.response.data.message || "something went wrong";
  }
};

export const verifyEmailOtp = async (payload) => {
  const option = {
    headers: {
      Authorization: Token,
    },
    otp: payload.otp,
    access_token: payload.token,
  };
  try {
    const ver = await axios.post(BASE_URL + "auth/verify-otp/email", option);
    return ver.data;
  } catch (error) {
    return;
  }
};
export const resetPassword = async (password, token) => {
  if (!token) return;

  const option = {
    provider: "email",
    password,
  };
  const headers = {
    Authorization: "Bearer " + token,
  };
  try {
    const passwordReset = await axios({
      url: BASE_URL + "auth/password/reset",
      data: option,
      method: "post",
      headers,
    });
    return passwordReset.data;
  } catch (error) {
    return;
  }
};
export const getSchoolBoards = async (params) => {
  const token = Cookies.get("jwtToken");
  const option = {
    headers: {
      Authorization: token ? "Bearer " + token : Token,
    },
    params,
  };
  try {
    const schoolBords = await axios.get(BASE_URL + "school/boards", option);
    return schoolBords.data.boards;
  } catch (error) {}
};
export const getCollegeCategories = async (params) => {
  const token = Cookies.get("jwtToken");
  const option = {
    headers: {
      Authorization: token ? "Bearer " + token : Token,
    },
    params,
  };
  try {
    const colCats = await axios.get(BASE_URL + "college/category", option);
    return colCats.data.category;
  } catch (error) {
    return;
  }
};
export const getSchoolListByCategory = async (cT, id) => {
  const token = cT ? "Bearer " + cT : Token;
  const option = {
    headers: {
      Authorization: token,
    },
  };
  try {
    const schoolList = await axios.get(BASE_URL + "school/list/" + id, option);
    return schoolList.data.types;
  } catch (error) {
    return;
  }
};
export const getCollegeListByCategory = async (cT, id) => {
  const token = cT ? "Bearer " + cT : Token;
  const option = {
    headers: {
      Authorization: token,
    },
  };
  try {
    return await axios.get(`${BASE_URL}college/list/${id}`);
  } catch (error) {
    return;
  }
};
export const getCollegeDetailbyId = async (cT, id) => {
  const token = cT ? "Bearer " + cT : Token;
  const option = {
    headers: {
      Authorization: token,
    },
  };
  try {
    const college = await axios({
      method: "GET",
      url: BASE_URL + "college/details/" + id,
      headers: option.headers,
    });
    return college.data.college;
  } catch (error) {}
};
export const getSchoolDetailbyId = async (cT, id) => {
  const token = cT ? "Bearer " + cT : Token;
  const option = {
    headers: {
      Authorization: token,
    },
  };
  try {
    const school = await axios({
      method: "GET",
      url: BASE_URL + "school/details/" + id,
      headers: option.headers,
    });
    return school.data.school;
  } catch (error) {}
};
export const getHelpAndSupport = async () => {
  const option = {
    headers: {
      Authorization: Token,
    },
  };
  try {
    const helpAndSupport = await axios.get(BASE_URL + "help-support", option);
   // console.log("helpppp",helpAndSupport)

    return helpAndSupport.data.info;
  } catch (error) {
    console.log("error help",error)
    return error?.response?.data;

  }
};

// education carousel
export const getEducationFeatured = async (cT) => {
  const headers = {
    Authorization: cT ? "Bearer " + cT : Token,
  };

  try {
    const fE = await axios({
      method: "GET",
      url: BASE_URL + "featured/education",
      headers: headers,
    });
    return fE.data.featured;
  } catch (error) {
    return;
  }
};
export const getFilteredEducation = async (type, payload) => {
  const token = Cookies.get("jwtToken");

  const options = {
    headers: {
      Authorization: token ? "Bearer " + token : Token,
    },
    params: payload,
  };

  try {
    const list = await axios.get(BASE_URL + type + "/filter", options);
    return list.data;
  } catch (error) {
    return error;
  }
};
export async function getSchoolLocations(params) {
  const token = await Cookies.get("jwtToken");
  let options = {};
  options = {
    headers: {
      Authorization: token ? "Bearer " + token : Token,
    },
    params,
  };
  try {
    const res = await axios.get(BASE_URL + "school/locations", options);
    return res.data.locations;
  } catch (error) {
    return;
  }
}

export async function getCollegeLocations(params) {
  const token = Cookies.get("jwtToken");
  let options = {};

  options = {
    headers: {
      Authorization: token ? "Bearer " + token : Token,
    },
    params,
  };
  try {
    const res = await axios.get(BASE_URL + "college/location", options);
    return res.data.locations;
  } catch (error) {}
}
export async function postFeedBack(feedback) {
  const option = {
    headers: {
      Authorization: Token,
    },
    feedback,
  };
  try {
    const feedbackRes = await axios.post(BASE_URL + "feedback", option);
    return feedbackRes.data.message;
  } catch (error) {
    return error.response.data.message || "something wrong";
  }
}
export async function getnotification(token, payload) {
  const options = {
    headers: {
      Authorization: "Bearer " + token,
    },
    params: payload,
  };
  try {
    const notification = await axios({
      url: BASE_URL + "notifications",
      method: "get",
      headers: options.headers,
      params: options.params,
    });
    return notification.data;
  } catch (error) {
    return [] || "something went wrong";
  }
}

//crackers
export const getCrackersListingData= async (categoryId, token) => {
  const options = {
    headers: {
      Authorization: token ? "Bearer " + token : Token,
    },
  };
  try {
    const res = await axios.get(BASE_URL + "crackers/" + categoryId, options);
    return res.data;
  } catch (error) {}
};


//post order
export async function postOrder(orderData, token) {
  const option = {
    headers: {
      Authorization: token ? "Bearer " + token : Token,
    },
  };

  // Log the incoming orderData and options being sent to the API
  console.log("Sending orderData to the API:", orderData);
  console.log("Request headers:", option);

  try {
    const response = await axios.post(BASE_URL + "admin/orders/create", orderData, option);

    // Log the success response from the API
    console.log("API response:", response.data);
    return response.data.results;
  } catch (error) {
    // Log any error response from the API
    console.error("Error response from API:", error.response?.data);

    // Return a meaningful message based on the error
    return error.response?.data?.message || "Something went wrong";
  }
}


export const getDiscountData= async (token) => {
  const options = {
    headers: {
      Authorization: token ? "Bearer " + token : Token,
    },
  };
  try {
    const res = await axios.get(BASE_URL + "crackers/discount/list", options);
    return res.data;
  } catch (error) {}
};

export const getDeliveryFeeData= async (token) => {
  const options = {
    headers: {
      Authorization: token ? "Bearer " + token : Token,
    },
  };
  try {
    const res = await axios.get(BASE_URL + "crackers/deliveryfee/list", options);
    return res.data;
  } catch (error) {}
};

export const getDiscountTextData= async (token) => {
  const options = {
    headers: {
      Authorization: token ? "Bearer " + token : Token,
    },
  };
  try {
    const res = await axios.get(BASE_URL + "crackers/discounttext/list", options);
    return res.data;
  } catch (error) {}
};