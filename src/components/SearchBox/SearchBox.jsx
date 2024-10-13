import styles from './SearchBox.module.css';
import {useDispatch} from "react-redux";
import {changeFilter} from "../../redux/filtersSlice.js";

const SearchBox = ({ value }) => {
  const dispatch = useDispatch();

  const dispatchChangeFilter = (name) => dispatch(changeFilter(name));

  const onChange = (e) => {
    dispatchChangeFilter(e.target.value)
  }

  return (
    <div className={styles.searchBox}>
    <label htmlFor="searchBox" className={styles.label}>Find contacts by name</label>
    <input
      type="searchBox"
      name="number"
      onChange={onChange}
      value={value}
      className={styles.input}
    />
  </div>
  )
}

export default SearchBox
