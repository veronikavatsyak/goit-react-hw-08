import { useId } from "react";
import s from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
const SearchBox = () => {
  const value = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const searchId = useId();
  return (
    <div>
      <label id={searchId}>Find contacts by name </label>
      <input
        className={s.input}
        id={searchId}
        type="text"
        name="find"
        value={value}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      ></input>
    </div>
  );
};

export default SearchBox;
