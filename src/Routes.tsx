import React from "react";
import { Routes as RRoutes, Route } from "react-router-dom";
import { Home } from "./Home/Home";
import { UserTemplate } from "./UserTemplate/UserTemplate";
import { PageNotFound } from "./PageNotFound/PageNotFound";
import { UnderConstruction } from "./Common/UnderConstruction/UnderConstruction";
import { Investments } from "./Investments/Investments";

export const Routes = () => {
  return (
    <RRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/user/*" element={<UserTemplate />} />
      <Route path="/investments" element={<Investments />} />
      <Route path="/account" element={<UnderConstruction />} />
      <Route path="/settings" element={<UnderConstruction />} />
      <Route path="*" element={<PageNotFound />} />
    </RRoutes>
  );
};
