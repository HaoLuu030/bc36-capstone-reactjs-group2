import { Spin } from "antd";
import { createContext, useEffect, useState } from "react";
import "./index.scss";

const DEFAULT_STATE = {
  isLoading: true,
};

export const LoadingContext = createContext(DEFAULT_STATE);

export const LoadingProvider = (props) => {
  const [state, setState] = useState(DEFAULT_STATE);

  useEffect(() => {
    document.querySelector("body").style.overflow = state.isLoading
      ? "hidden"
      : "auto";
    document.querySelector("body").style.height = state.isLoading
      ? "100vh"
      : "auto";
    console.log(document.querySelector("body"));
  }, [state.isLoading]);

  return (
    <LoadingContext.Provider value={[state, setState]}>
      {state.isLoading && (
        <div className="spin">
          <Spin size="large" />
        </div>
      )}
      {props.children}
    </LoadingContext.Provider>
  );
};
