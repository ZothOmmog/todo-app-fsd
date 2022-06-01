import React from "react";
import { Router } from "./Router";

type ProvidersProps = { children: React.ReactNode };

export const Providers: React.FC<ProvidersProps> = (props) => {
  const { children } = props;

  return <Router>{children}</Router>;
};
