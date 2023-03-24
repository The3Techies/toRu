
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
  state: { dark: true },
  setState: () => {},
});

export const MyProvider: React.FC<MyComponentProps> = ({ children }) => {
  const [state, setState] = useState<MyState>({ dark: false });

  return (
    <MyContext.Provider value={{ state, setState }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => useContext(MyContext);
