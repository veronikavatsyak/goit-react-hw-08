import { Navigation } from "../Navigation/Navigation";

import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import s from "./AppBar.module.css";

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={s.header}>
      <div>
        <Navigation />
      </div>
      <div>{isLoggedIn ? <UserMenu /> : <AuthNav />}</div>
    </header>
  );
};
