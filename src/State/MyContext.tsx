
import React, { createContext, useContext, useState } from "react";
import { MyState } from "./MyState";

interface MyContextValue {
  state: MyState;
  setState: React.Dispatch<React.SetStateAction<MyState>>;
}

interface MyComponentProps {
  children: React.ReactNode;
}

const MyContext = createContext<MyContextValue>({
  state: {
    dark: true,
    fontColor: "text-[#FFFFFF] ",
    bgColor: "bg-[#161616] ", bgApp: "bg-[#262627] ",
    shadowColor: "shadow-[#e0e0e0] ",
    borderColer: "border-[#FFFFFF] "

  },
  setState: () => { },
});

export const MyProvider: React.FC<MyComponentProps> = ({ children }) => {
  const [state, setState] = useState<MyState>({
    dark: true,
    fontColor: "text-[#FFFFFF] ", 
    bgColor: "bg-[#161616] ",
     bgApp: "bg-[#262627] ", 
     shadowColor: "shadow-[#e0e0e0] ", 
     borderColer: "border-[#FFFFFF] "
  });

  return (
    <MyContext.Provider value={{ state, setState }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => useContext(MyContext);
