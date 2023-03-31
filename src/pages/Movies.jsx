import Searchbar from 'components/Searchbar/Searchbar';
import { Button, Loader } from 'components/Styled';
import { fetchStatus } from 'constants';
import { useFetchPages } from 'hooks/useFetch';
import { useState, useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { findMoviesByQuery } from 'services';
import MovieThumbs from './../components/MovieThumbs/MovieThumbs';
import Message from './../components/Message/Message';
import { BiUpArrow } from 'react-icons/bi';
import PopularQueries from './../components/PopularQueries/PopularQueries';
import { POPULAR_QUERIES } from 'constants';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

  const URLparams = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );

  const getMovies = useCallback(async () => {
    return await findMoviesByQuery({ query: query || URLparams.query, page });
  }, [URLparams, query, page]);

  const { data, status } = useFetchPages(getMovies, page === 1);

  const { results: movies, totalPages } = data;

  const handleChangeQuery = query => {
    setSearchParams(query !== '' ? { query } : {});
    setQuery(query);
    setPage(1);
  };

  const loadMore = () => {
    setPage(page + 1);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const handleSearch = searchQuery => {
    const query = searchQuery.replace(/[&?=]/g, '').toLowerCase().trim();
    setSearchParams(query !== '' ? { query } : {});
    setQuery(query);
    setPage(1);
  };

  const reachedEnd = totalPages === page;

  return (
    <>
      <Searchbar onHandleSearch={handleChangeQuery} searchQuery={query} />

      <PopularQueries
        queries={POPULAR_QUERIES}
        searchQuery={query}
        searchURLQuery={URLparams.query}
        OnHandlePopularQuery={handleSearch}
      />

      {movies !== undefined && !!movies.length && (
        <MovieThumbs movies={movies} />
      )}

      {movies && !movies.length && (query || searchParams.get('query')) && (
        <Message>Sorry, we couldn't find any results</Message>
      )}

      {movies && !movies.length && !query && !searchParams.get('query') && (
        <Message>Please enter or select search query</Message>
      )}

      {reachedEnd && page !== 1 && (
        <>
          <Message>That's all we have</Message>
          <Button type="button" className="icon" onClick={scrollToTop}>
            <BiUpArrow />
          </Button>
        </>
      )}

      {status === fetchStatus.LOADING && <Loader className="pending" />}

      {totalPages > 1 && !reachedEnd && status !== fetchStatus.LOADING && (
        <Button type="button" onClick={loadMore}>
          Load more
        </Button>
      )}
    </>
  );
};

export default Movies;
