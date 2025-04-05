import s from "./SearchBox.module.css";
import { useId } from "react";

export const SearchBox = ({ value, onChange }) => {
  const searchId = useId();
  return (
    <div className={s.searchBox}>
      <label htmlFor={searchId} className={s.paragraph}>
        Find contacts by name
      </label>
      <input
        className={s.input}
        type="text"
        value={value}
        id={searchId}
        name="search_name"
        placeholder="Enter name"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
