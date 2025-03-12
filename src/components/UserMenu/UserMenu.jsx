import { useDispatch, useSelector } from "react-redux";
import s from "./UserMenu.module.css";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button
        className={s.menuBtn}
        type="button"
        onClick={() => dispatch(logout())}
      >
        Logout
      </button>
    </div>
  );
};
export default UserMenu;
