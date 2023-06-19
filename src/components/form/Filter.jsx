import css from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';

const Filter = () => {
  const filter = useSelector(state => state.filter.value);
  const dispatch = useDispatch();
  const handleChange = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <label className={css.Label}>
      <span>Find contacts by name:</span>
      <input
        className={css.Input}
        type="text"
        value={filter}
        onChange={handleChange}
        name="filter"
      />
    </label>
  );
};

export default Filter;
