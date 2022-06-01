import React from "react";
import { BrowserRouter } from "react-router-dom";

export const Router: React.FC<{ children: React.ReactNode }> = (props) => {
  const { children } = props;

  return <BrowserRouter>{children}</BrowserRouter>;
};
