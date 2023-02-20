import "bootstrap/dist/css/bootstrap.min.css";
import { Link, NavLink, Outlet } from "react-router-dom";
import { InnerSpan, InnerWrapper, RowWrapper } from "./Profile.styled";

export const Profile = () => {
  return (
    <RowWrapper className="row">
      <InnerWrapper className="col-4">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "actives w-100 d-block p-4"
              : "noActive w-100 d-block p-4"
          }
          to="/mainprofile"
        >
          <InnerSpan>1</InnerSpan>
          Profile
        </NavLink>
      </InnerWrapper>
      <InnerWrapper className="col-4">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "actives w-100 d-block p-4"
              : " noActive w-100 d-block p-4"
          }
          to="/security"
        >
          <InnerSpan>2</InnerSpan>
          Security
        </NavLink>
      </InnerWrapper>
      <InnerWrapper className="col-4">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "actives w-100 d-block p-4"
              : "noActive w-100 d-block p-4"
          }
          to="/settings"
        >
          <InnerSpan>3</InnerSpan>
          Settings
        </NavLink>
      </InnerWrapper>
      <Outlet />
    </RowWrapper>
  );
};
