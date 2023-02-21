import React from "react";
import { Category } from "../../../components/Category/Category";
import { CategoryBook } from "../MainCategory/CategoryBook";
import { PrivateHomePage } from "../PrivateHomePage/PrivateHomePage";

export const PrivateHomeBook = () => {
  return (
    <>
      <PrivateHomePage />
      <Category/>
    </>
  );
};
