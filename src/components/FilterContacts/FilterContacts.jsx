import { useDispatch } from 'react-redux';
import { addToFilter } from 'redux/filter/filter.reducer';

export const FilterContacts = () => {
  const dispatch = useDispatch();

  const handleInputChange = event => {
    const value = event.target.value;
    dispatch(addToFilter(value));
  };

  return (
    <div>
      <h3>Find contacts by name</h3>
      <input
        id="name"
        type="text"
        name="name"
        onChange={handleInputChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      />
    </div>
  );
};
