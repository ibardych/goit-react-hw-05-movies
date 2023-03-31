import PropTypes from 'prop-types';
import { PopularQueriesStyled } from './PopularQueries.styled';

const PopularQueries = ({
  queries,
  searchQuery,
  searchURLQuery,
  OnHandlePopularQuery,
}) => {
  return (
    <PopularQueriesStyled>
      <div className="title">Popular genres</div>
      {queries.map(query => (
        <div
          key={query}
          onClick={() => OnHandlePopularQuery(query)}
          className={`query ${
            query === searchQuery || query === searchURLQuery ? 'active' : ''
          }`}
        >
          {query}
        </div>
      ))}
    </PopularQueriesStyled>
  );
};

PopularQueries.propTypes = {
  queries: PropTypes.arrayOf(PropTypes.string).isRequired,
  searchQuery: PropTypes.string,
  searchURLQuery: PropTypes.string,
  OnHandlePopularQuery: PropTypes.func.isRequired,
};

export default PopularQueries;
