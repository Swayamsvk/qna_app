import React, { useReducer } from "react";
import uuid from "uuid";
import QaContext from "./QaContext";
import QaReducer from "./QaReducer";

// import types

const QaState = (props) => {
  const initialState = {
    Qa: [],
  };

  const [state, dispatch] = useReducer(QaReducer, initialState);

  return <QaContext.Provider value={{ qas: state.qas }}></QaContext.Provider>;
};

export default QaState;
