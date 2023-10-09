import React, { useContext, useState, createContext } from "react";

const GlobalStateContext = createContext();

export function GlobalStateProvider({ children }) {
  const [globalState, setGlobalState] = useState({});
  return (
    <GlobalStateContext.Provider value={[globalState, setGlobalState]}>
      {children}
    </GlobalStateContext.Provider>
  );
}

export function useMyState(variableName) {
  const [globalState, setGlobalState] = useContext(GlobalStateContext);

  if (!globalState.hasOwnProperty(variableName)) {
    setGlobalState((prevState) => ({
      ...prevState,
      [variableName]: undefined,
    }));
  }

  const setState = (newValue) => {
    setGlobalState((prevState) => ({ ...prevState, [variableName]: newValue }));
  };

  return [globalState[variableName], setState];
}
