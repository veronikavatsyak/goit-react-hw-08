import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const AuthNav = () => {
  return (
    <div className={s.container}>
      <NavLink className={buildLinkClass} to="/register">
        Register
      </NavLink>
      <NavLink to="/login">Login</NavLink>
    </div>
  );
};
export default AuthNav;
