import React from "react";
import { Routes as RRoutes, Route } from "react-router-dom";
import { Home } from "./Home/Home";
import { UserTemplate } from "./UserTemplate/UserTemplate";
import { PageNotFound } from "./PageNotFound/PageNotFound";

export const Routes = () => {
  return (
    <RRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/user/*" element={<UserTemplate />} />
      <Route path="*" element={<PageNotFound />} />
    </RRoutes>
  );
};
