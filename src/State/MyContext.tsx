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
    dark: false,
    fontColor: "text-[#214966] ",
    bgColor: "bg-[#FFFFFF] ",
    bgApp: "bg-[#ECECEC] ",
    shadowColor: "shadow-[#3b5d6c] ",
    borderColer: "border-[#214966] ",
  },
  setState: () => {},
});

export const MyProvider: React.FC<MyComponentProps> = ({ children }) => {
  const [state, setState] = useState<MyState>({
    dark: false,
    fontColor: "text-[#214966] ",
    bgColor: "bg-[#FFFFFF] ",
    bgApp: "bg-[#ECECEC] ",
    shadowColor: "shadow-[#3b5d6c] ",
    borderColer: "border-[#214966] ",
  });

  return (
    <MyContext.Provider value={{ state, setState }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => useContext(MyContext);
