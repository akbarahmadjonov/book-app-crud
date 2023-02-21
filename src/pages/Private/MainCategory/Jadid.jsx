import React from "react";
import { Link } from "react-router-dom";
import {
  CardBody,
  CardBottomImg,
  CardDesc,
  CardTitle,
  CardTopImg,
  CatCard,
} from "./Jadid.style";

export const Jadid = () => {
  return (
    <>
      <div className="row gy-4">
        <div className="col-md-3">
          <Link to="">
            <CatCard>
              <img height="224px" width="295px" src="" alt="" />
              <CardBody>
                <CardTopImg src="" alt="" />
                <CardTitle></CardTitle>
                <CardDesc></CardDesc>
                <CardBottomImg src="" alt="" />
              </CardBody>
            </CatCard>
          </Link>
        </div>
      </div>
    </>
  );
};
