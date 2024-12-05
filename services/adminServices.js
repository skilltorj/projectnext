import axios from "axios";
import Cookies from "js-cookie";

const local = "http://localhost:9091/";
const devServer = "https://dev-server.cityquest.app/";
const development = "https://dev-server.cityquest.app/";
const production = "https://server.cityquest.in/";
//const token =
//"Bearer U2FsdGVkX1/M29TwO1gj8EWiLAePrx2dwH9P/9v90j31q8HrDw3VkprxqGUALzYWcjlihAgge8JQetwwwjINLCYeXWyrev/6+1vpRhBXQjffhuRCgn97YXL5Pt05kQ9Wy3nJBPFc/9i24svSWXb2Uip87pkaPBdW9dCrA4uEsgbjPgoqU8vUT0jM6MiuNukiiO5tw3SobFXwEa86ocsBIkmip+HUw8xVn3BgHWbGU8k=";
const BASE_URL = production;

const Token = Cookies.get("adminToken");

//get list need to pass url for all get api
export const getList = async (type, token, params) => {
  const adminToken = Cookies.get("adminToken");
  if (!token && !adminToken) return;
   const headers = {
      headers: {
        Authorization: "Bearer " + token || adminToken,
      },
      params,
    };
  //  }
  try {
    const res = await axios.get(BASE_URL + type, headers);
    return res.data;
  } catch (error) {
    return error?.response?.data;
  }
};
export const getMallList = async (type, token, params) => {
  const userToken = Cookies.get("jwtToken")
  const Token = userToken ? userToken : undefined
  // const adminToken = Cookies.get("adminToken");
  if (!token) return;

   const headers = {
      headers: {
        Authorization: "Bearer " + Token,
      },
      params,
    };
  //  }
  try {
    const res = await axios.get(BASE_URL + type, headers);
    return res.data;
  } catch (error) {
    return error?.response?.data;
  }
};

//login api
export const loginApi = async (email, password) => {
  const payload = {
    email,
    password,
  };
  try {
    const res = await axios.post(BASE_URL + "admin/auth/login", payload);

    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

// Image upload for forms
export const upload = async (payload, token) => {
  const adminToken = Cookies.get("adminToken");
  if (!token && !adminToken) return;
  const headers = {
    headers: {
      Authorization: "Bearer " + token || adminToken,
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin": "*",
    },
  };
  const formData = new FormData();

  payload?.poster && formData.append("poster", payload.poster, "abiram");

  payload.banner &&
    payload.banner.forEach((i) => {
      formData.append("poster", i);
    });
  payload.banner && formData.append("banners", payload.banner);

  payload.brochure && formData.append("brochure", payload.brochure);

  payload.video && formData.append("video", payload.video);
  try {
    const res = await axios({
      url: BASE_URL + "admin/upload",
      headers: headers.headers,
      method: "POST",

      data: formData,
    });
    return res.data;
  } catch (error) {
    return error.response?.data?.message;
  }
};

// delete images
export const deleteImage = async (id, token) => {
  const adminToken = Cookies.get("adminToken");
  if (!token && !adminToken) return;

  const headers = {
    Authorization: "Bearer " + token || adminToken,
  };
  try {
    const res = await axios({
      method: "DELETE",
      url: BASE_URL + "admin/upload/file/morph/" + id,
      headers,
    });
    return res.data;
  } catch (error) {
    return error.response.data.message;
  }
};

export const deleteAsset = async (id, token) => {
  const adminToken = Cookies.get("adminToken");
  if (!token && !adminToken) return;
  const headers = {
    Authorization: "Bearer " + token || adminToken,
  };
  try {
    const res = await axios({
      method: "DELETE",
      url: BASE_URL + "admin/upload/assert/" + id,
      headers,
    });
    return res.data;
  } catch (error) {
    return error.response.data.message;
  }
};

//create post
export const createPost = async (payload, url, params, token) => {
  const adminToken = Cookies.get("adminToken");
  if (!adminToken && !token) return;

  const headers = {
    headers: {
      Authorization: "Bearer " + token || adminToken,
      "Content-Type": "application/json",
    },
    data: payload,
  };

  try {
    const res = await axios.post(BASE_URL + url, headers.data, {
      headers: headers.headers,
      params,
    });

    return res;
  } catch (error) {
    return error?.response?.data;
  }
};

// put request, when given with id as params in the url will edit and submit or crete and submit
export const editPost = async (payload, url, token) => {
  const adminToken = Cookies.get("adminToken");
  if (!adminToken && !token) return;

  const headers = {
    Authorization: "Bearer " + token || adminToken,
  };

  try {
    const res = await axios.put(
      BASE_URL + url,
      payload,

      { headers }
    );
    return res;
  } catch (error) {
    return error.response?.data || "error";
  }
};
//post request for masters need url and payload
export const createMaster = async (url, payload, token) => {
  let adminToken = Cookies.get("adminToken");
  if (!token && !adminToken) return { message: "notoken" };

  const headers = {
    Authorization: "Bearer " + token || adminToken,
  };
  try {
    const res = await axios.post(BASE_URL + url, payload, { headers });
    return res.data;
  } catch (error) {
    return error?.response?.data;
  }
};
//post method with id as query updates and status = draft
export const editAndSaveMaster = async (url, payload, id, token) => {
  let adminToken = Cookies.get("adminToken");
  if (!token && !adminToken) return;
  const headers = {
    Authorization: "Bearer " + token || adminToken,
  };
  try {
    const res = await axios.post(BASE_URL + url, payload, {
      headers,
      params: { id },
    });

    return res.data;
  } catch (error) {
    return error?.response?.data;
  }
};
//delete request
export const deleteMaster = async (url, token) => {
  let adminToken = Cookies.get("jwtToken");
  if (!token && !adminToken) return;

  const headers = {
    Authorization: "Bearer " + token || adminToken,
  };
  try {
    const res = await axios.delete(BASE_URL + url, { headers });
    return res.data;
  } catch (error) {
    return error?.response?.data;
  }
};
//post and publish master
const postAndPublishMaster = async (url) => {};

//put change status api
export const changeStatus = async (payload, token) => {
  const adminToken = Cookies.get("adminToken");
  if (!token && !adminToken) return;

  const headers = {
    Authorization: "Bearer " + token || adminToken,
  };
  try {
    const status = await axios.put(
      BASE_URL + "admin/approved/status",
      payload,
      {
        headers,
      }
    );
    return status.data;
  } catch (error) {
    return error?.response?.data;
  }
};

//userSide malls add to fav //////////////////////////////////////////////////////////////////
export const modifyMallFav = async (id) => {
  const tk = Cookies.get("jwtToken");
  const headers = {
    Authorization: "Bearer " + tk,
  };
  try {
    const res = await axios.post(
      BASE_URL + "admin/mall/favourite?mall=" + id,
      {},
      {
        headers,
      }
    );
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};
/////////////////////////////////////////////////////////////////////////////////////////////userSide malls add to fav //////////////////////////////////////////////////////////////////
export const modifyShopFav = async (id) => {
  const tk = Cookies.get("jwtToken");
  const headers = {
    Authorization: "Bearer " + tk,
  };
  try {
    const res = await axios.post(
      BASE_URL + "admin/shop/favourite?shop=" + id,
      {},
      {
        headers,
      }
    );
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};
///////////////////////////////////////////////////////////////////////////////////////////
