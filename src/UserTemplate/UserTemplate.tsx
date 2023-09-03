import React, { useState } from "react";
import s from "./UserTemplate.styles";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { RetailUser } from "../RetailUser/RetailUser";
import { Button } from "../Common/Button/Button";
import { UnderConstruction } from "../Common/UnderConstruction/UnderConstruction";

export const UserTemplate = () => {
  const { pathname } = useLocation();
  const location = pathname.split("/")[2];
  const navigate = useNavigate();

  return (
    <s.Wrapper>
      <s.FirstSection>
        <div>Are you a retail or enterprise user?</div>
        <s.ButtonsWrapper>
          <Button
            selected={location === "retail"}
            onClick={() => navigate("/user/retail")}
          >
            Retail
          </Button>
          <Button
            selected={location === "enterprise"}
            onClick={() => navigate("/user/enterprise")}
          >
            Enterprise
          </Button>
        </s.ButtonsWrapper>
      </s.FirstSection>
      <Routes>
        <Route path="/retail" element={<RetailUser />} />
        <Route path="/enterprise" element={<UnderConstruction />} />
      </Routes>
    </s.Wrapper>
  );
};
