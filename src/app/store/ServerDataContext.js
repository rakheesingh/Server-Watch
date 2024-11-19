import React, { createContext, useReducer } from "react";
import { getAllServerName } from "../features/serverMetrics/utils";

//Server ID selected by user in dashbaord
export const ServerContext = createContext();

const initialState = {
  serverId: getAllServerName()?.[0],
};

const actionsType = {
  SET_SERVER: "SET_SERVER",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionsType.SET_SERVER:
      return {
        ...state,
        serverId: action.payload,
      }
    default: return state
  }
};

function ServerDataContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <ServerContext.Provider value={{...state, dispatch}}>{children}</ServerContext.Provider>;
}

export default ServerDataContext;
