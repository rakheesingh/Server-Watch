import React, { createContext, useReducer } from "react";

export const ServerContext = createContext();

const initialState = {
  serverId: "ServerA",
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

function ServerData({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <ServerContext.Provider value={{...state, dispatch}}>{children}</ServerContext.Provider>;
}

export default ServerData;
