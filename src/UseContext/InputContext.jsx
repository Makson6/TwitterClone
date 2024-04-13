import React,{createContext,useState,useContext} from "react";

const InputContext = createContext();

export const useInputContext = () => useContext(InputContext);

export const InputProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <InputContext.Provider value={{ inputValue, setInputValue }}>
      {children}
    </InputContext.Provider>
  );
};