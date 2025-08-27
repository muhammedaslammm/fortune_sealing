"use client";
import { createContext, useState } from "react";

export const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [menuStat, setMenuStat] = useState(false);

  const value = { menuStat, setMenuStat };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
