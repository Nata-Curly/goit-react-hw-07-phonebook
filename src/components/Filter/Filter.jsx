import { useDispatch, useSelector } from 'react-redux';
import { FilterInput, FilterLabel } from './Filter.styled';
// import PropTypes from 'prop-types';
import { getFilter } from 'redux/selectors';
// import * as filterActions from 'redux/filterSlice';
// import { statusFilter } from 'redux/constants';
import { setFilter } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const handleFilter = ({ target }) => { dispatch(setFilter(target.value.toLowerCase().trim())); };

//  const setFilter = filter => {
//     dispatch(filterActions.setFilter(filter));
//   };
  // const handleChange = ({target}) => {
  //       dispatch(setFilter(target.value))
  //   }


    return ( 
        <FilterLabel>
        Find contact by name <FilterInput type="text" value={filter} onChange={handleFilter}/>
        </FilterLabel>
     );
}

Filter.propTypes = {
  // value: PropTypes.string.isRequired,
  // onChange: PropTypes.func.isRequired
}

export default Filter;