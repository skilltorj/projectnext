"use client";
import React, { createContext, useReducer } from "react";
import { accessTokenReducer } from "./reducers/accessTokenReducer";
import { helpAndSupportReducer } from "./reducers/helpAndSupportReducer";
import homePageReducer, { homeInitialState } from "./reducers/homePageReducer";
import loadingPageReducer from "./reducers/loaderPageReducer";
import loginDialogBoxReducer from "./reducers/loginDialogBoxReducer";
import searchReducer, { initialSearchState } from "./reducers/searchReducer";
import selectedCityReducer from "./reducers/selectedCityReducer";
import userReducer, { initialUserState } from "./reducers/userReducer";
import cartReducer, { cartInitialState } from "./reducers/cartReducer";

// Create Context
export const Context = createContext([]);

function ContextProvider({ children }) {
  const [selectedCityState, dispatch] = useReducer(selectedCityReducer, [
    "Coimbatore",
  ]);
  const [user, userDispatch] = useReducer(userReducer, initialUserState);
  const [searchResults, searchDispatch] = useReducer(
    searchReducer,
    initialSearchState
  );
  const [loading, loadingDispatch] = useReducer(loadingPageReducer, false);
  const [loginDialogbox, loginDialogboxDispatch] = useReducer(
    loginDialogBoxReducer,
    false
  );
  const [accessToken, setAccessToken] = useReducer(accessTokenReducer, {
    accessToken: "",
    emailVerified: false,
  });
  const [homePage, homePageDispatch] = useReducer(
    homePageReducer,
    homeInitialState
  );
  const [helpAndSupportData, helpAndSupportDispatch] = useReducer(
    helpAndSupportReducer,
    {}
  );
  const [cart, cartDispatch] = useReducer(cartReducer, cartInitialState);

  return (
    <Context.Provider
      value={{
        selectedCityState,
        dispatch,
        user,
        userDispatch,
        searchResults,
        searchDispatch,
        loading,
        loadingDispatch,
        loginDialogbox,
        loginDialogboxDispatch,
        accessToken,
        setAccessToken,
        homePage,
        homePageDispatch,
        helpAndSupportData,
        helpAndSupportDispatch,
        cart,
        cartDispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;
