import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

const PropertiesContext = createContext;

const PropertiesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <PropertiesProvider.Provider value={[state, dispatch]}>
      {children}
    </PropertiesProvider.Provider>
  );
};
export default PropertiesProvider;
