"use client"
import React, { createContext, useState } from 'react';

const GlobalContext = createContext();

const MyGlobalContext = ({ children }) => {
    const [globalState, setGlobalState] = useState({
        dropdown: false,
      });
    

  return (
    <GlobalContext.Provider value={{ globalState, setGlobalState }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, MyGlobalContext };
