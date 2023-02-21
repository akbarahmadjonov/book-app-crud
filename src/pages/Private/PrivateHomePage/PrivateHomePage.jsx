import Logo from "../../../assets/images/home-logo.svg";
import ArrowDown from "../../../assets/images/arrow-down.svg";
import { Link, NavLink, Outlet, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "../../../components/Styles/GlobalStyled";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Content,
  Wrapper,
  Wrapper__inner,
  Container,
  Img,
  AvatarDiv,
  Span,
  Button,
  DropdownUl,
  DropdownWrapper,
  DropdownLi,
} from "./PrivateHomePage.styled";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { setToken } from "../../../components/redux/token/tokenActions";
import { setUser } from "../../../components/redux/user/userActions";
import { PrivateHero } from "./PrivateHero/PrivateHero";
import { LogoutLink } from "../AddAuthor/AddAuthor.styled";
import { BASE_URL } from "../../../API/api";

export const PrivateHomePage = () => {
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
          console.log(res.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const showDropdown = () => {
    setShow(!show);
    console.log(show);
  };

  return (
    <>
      <GlobalStyle />
      <Container className="container">
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
            <Button onClick={showDropdown}>
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
                    className={({ isActive }) =>
                      isActive ? "" : "dropdownLink"
                    }
                    to="/profile"
                  >
                    Profile
                  </NavLink>
                </DropdownLi>
                <DropdownLi>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "" : "dropdownLink"
                    }
                    to="/addauthor"
                  >
                    Add author
                  </NavLink>
                </DropdownLi>
                <DropdownLi>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "" : "dropdownLink"
                    }
                    to="/addbook"
                  >
                    Add book
                  </NavLink>
                </DropdownLi>
                <DropdownLi>
                  <LogoutLink
                    className={({ isActive }) => (isActive ? "" : dropdownLink)}
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
        {/* Components */}
        <PrivateHero />
        {/* Components */}
      </Container>
    </>
  );
};
