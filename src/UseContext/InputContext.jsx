import React,{createContext,useState,useContext} from "react";
import { data } from "../data/Data";


const InputContext = createContext();

export const useInputContext = () => useContext(InputContext);

export const InputProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState(data);

  return (
    <InputContext.Provider value={{ inputValue, setInputValue }}>
      {children}
    </InputContext.Provider>
  );
};