import { createContext, useReducer } from "react";
import teamsReducer, { teamsInitialState } from "../reducers/teamsReducer";

export const TeamsContext = createContext();

const TeamsContextProvider = (props) => {
  const [teamsState, dispatchTeamsState] = useReducer(
    teamsReducer,
    teamsInitialState
  );

  return (
    <TeamsContext.Provider value={{ teamsState, dispatchTeamsState }}>
      {props.children}
    </TeamsContext.Provider>
  );
};

export default TeamsContextProvider;
