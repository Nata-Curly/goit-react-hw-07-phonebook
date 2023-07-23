import { useDispatch, useSelector } from 'react-redux';
import { FilterInput, FilterLabel } from './Filter.styled';
import PropTypes from 'prop-types';
import { selectFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const handleFilter = ({ target }) => { dispatch(setFilter(target.value.toLowerCase().trim())); };

    return ( 
        <FilterLabel>
        Find contact by name <FilterInput type="text" value={filter} onChange={handleFilter}/>
        </FilterLabel>
     );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
}

export default Filter;