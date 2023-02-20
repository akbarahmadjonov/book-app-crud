import { NavLink, Link } from "react-router-dom";
import { PrivateHomePage } from "../PrivateHomePage/PrivateHomePage";
import {
  RoutesLink,
  RoutesWrapper,
  Wrapper,
  WrapperTitle,
} from "./MainCategory.styled";

export const MainCategory = () => {
  let activeStyle = {
    marginRight: "20px",
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "27px",
    color: "#C9AC8C",
    textDecoration: "none",
    fontFamily: "Poppins",
  };

  let nonActiveStyle = {
    marginRight: "20px",
    opacity: "0.4",
    textDecoration: "none",
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "27px",
    color: "rgba(13, 13, 13, 0.6)",
    textDecoration: "none",
    fontFamily: "Poppins",
  };

  return (
    <>
      <PrivateHomePage />
      <Wrapper>
        <WrapperTitle>Asosiy kategoriyalar</WrapperTitle>
      </Wrapper>
      <RoutesLink>
        <RoutesWrapper>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : nonActiveStyle)}
            to="/temuriylar"
          >
            Temuriylar davri
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : nonActiveStyle)}
            to="/jadid"
          >
            Jadid adabiyoti
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : nonActiveStyle)}
            to="/sovet"
          >
            Sovet davri
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : nonActiveStyle)}
            to="/mustaqillik"
          >
            Mustaqillik davri
          </NavLink>
        </RoutesWrapper>
      </RoutesLink>
    </>
  );
};
