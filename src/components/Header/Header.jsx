import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { LogoutLink } from "../../pages/Private/AddAuthor/AddAuthor.styled";
import {
  Content,
  DropdownLi,
  DropdownUl,
  DropdownWrapper,
  Img,
  Span,
  Wrapper,
  Wrapper__inner,
} from "./Header.styled";
import Logo from "./../../assets/images/home-logo.svg";
import ArrowDown from "./../../assets/images/arrow-down.svg";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/user/userActions";
import { setToken } from "../redux/token/tokenActions";
import axios from "axios";
import { BASE_URL } from "../../API/api";

export const Header = () => {
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  const token = useSelector((state) => state.token.token);
  const user = useSelector((state) => state.user.user);

  dispatch(setToken(localStorage.getItem("token")));

  useEffect(() => {
    axios
      .get("http://localhost:5000/user/me", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        if (res.status === 201) {
          dispatch(setUser(res.data));
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const showDropdown = () => {
    setShow(!show);
  };
  return (
    <div className="container">
      <Wrapper>
        <Wrapper__inner>
          <NavLink to="/">
            <Img src={Logo} alt="Logo" />
          </NavLink>
        </Wrapper__inner>
        <Content>
          <NavLink
            className={({ isActive }) =>
              isActive ? "activeStyle" : "nonActiveStyle"
            }
            to="/"
          >
            Bosh sahifa
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "activeStyle" : "nonActiveStyle"
            }
            to="/privatebook"
          >
            Kitoblar
          </NavLink>
          <Button className="bg-transparent border-0 " onClick={showDropdown}>
            {user.image ? (
              <img
                className="rounded-circle me-3"
                src={BASE_URL + "/" + user.image}
                width="50"
                height="50"
              />
            ) : (
              <Span>
                {user?.first_name?.at(0)}.{user?.last_name?.at(0)}
              </Span>
            )}
            <img src={ArrowDown} alt="Arrow header" />
          </Button>
          <DropdownWrapper className={show ? "" : "d-none"}>
            <DropdownUl>
              <DropdownLi>
                <NavLink
                  className={({ isActive }) => (isActive ? "" : "dropdownLink")}
                  to="/profile"
                >
                  Profile
                </NavLink>
              </DropdownLi>
              <DropdownLi>
                <NavLink
                  className={({ isActive }) => (isActive ? "" : "dropdownLink")}
                  to="/addauthor"
                >
                  Add author
                </NavLink>
              </DropdownLi>
              <DropdownLi>
                <NavLink
                  className={({ isActive }) => (isActive ? "" : "dropdownLink")}
                  to="/addbook"
                >
                  Add book
                </NavLink>
              </DropdownLi>
              <DropdownLi>
                <LogoutLink
                  className={({ isActive }) => (isActive ? "" : "dropdownLink")}
                  onClick={() =>
                    dispatch(setToken(localStorage.removeItem("token")))
                  }
                  title="Do you really want to sign out?"
                >
                  <i class="fa-solid fa-right-from-bracket"></i> Logout
                </LogoutLink>
              </DropdownLi>
            </DropdownUl>
          </DropdownWrapper>
        </Content>
      </Wrapper>
    </div>
  );
};
