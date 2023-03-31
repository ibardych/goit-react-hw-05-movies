import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { SearchbarStyled } from './Searchbar.styled';
import { FormStyled } from './Form.styled';
import { Input } from './Input.styled';
import SearchButton from './SearchButton';
import { useSearchParams } from 'react-router-dom';

const Searchbar = ({ searchQuery, onHandleSearch }) => {
  const [query, setQuery] = useState('');
  const [searchParams] = useSearchParams();

  const searchParamsQuery = searchParams.get('query');

  useEffect(() => {
    setQuery(searchQuery);
  }, [searchQuery]);

  const submitHandler = e => {
    e.preventDefault();
    onHandleSearch(query);
  };

  const handleInputChange = e => {
    setQuery(e.target.value);
  };

  return (
    <SearchbarStyled>
      <FormStyled onSubmit={submitHandler}>
        <Input
          name="searchQuery"
          type="text"
          value={query || searchParamsQuery || ''}
          placeholder="Search movies"
          onChange={handleInputChange}
        />
        <SearchButton type="submit" />
      </FormStyled>
    </SearchbarStyled>
  );
};

Searchbar.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  onHandleSearch: PropTypes.func.isRequired,
};

export default Searchbar;
