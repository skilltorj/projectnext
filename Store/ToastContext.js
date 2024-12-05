import { Toast } from "primereact/toast";
import React from "react";
import { useRef } from "react";
import { createContext } from "react";
import { useContext } from "react";

export const ToastContext = createContext();

function ToastContextProvider({ children }) {
  const userToastRef = useRef(null);

  function showSuccess(message, detail) {
    userToastRef.current.show({
      severity: "success",
      summary: message,
      detail: detail,
    });
  }

  function showError(message, detail) {
    userToastRef.current.show({
      severity: "error",
      summary: message,
      detail: detail,
    });
  }

  return (
    <ToastContext.Provider value={{ showSuccess, showError }}>
      <Toast ref={userToastRef} />
      {children}
    </ToastContext.Provider>
  );
}

export default ToastContextProvider;
