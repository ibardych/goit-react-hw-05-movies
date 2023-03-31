import { FilterStyled } from './Filter.styled';
import { FilterButton } from './FilterButton.styled';
import { useState } from 'react';
import { PropTypes } from 'prop-types';

const Filter = ({ onChangeFilter }) => {
  const [filter, setFilter] = useState('week');

  const changeFilter = filter => {
    setFilter(filter);
    onChangeFilter(filter);
  };

  return (
    <FilterStyled>
      <div className="title">Trending movies</div>
      <div className="buttons">
        <FilterButton
          className={filter === 'week' && 'active'}
          type="button"
          onClick={() => changeFilter('week')}
        >
          By week
        </FilterButton>{' '}
        <FilterButton
          className={filter === 'day' && 'active'}
          type="button"
          onClick={() => changeFilter('day')}
        >
          By day
        </FilterButton>
      </div>
    </FilterStyled>
  );
};

Filter.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
