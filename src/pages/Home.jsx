import Filter from 'components/Filter/Filter';
import { GalleryStyled } from 'components/Gallery/Gallery.styled';
import GalleryItem from 'components/Gallery/GalleryItem';
import { Button, Loader } from 'components/Styled';
import { fetchStatus } from 'constants';
import { useFetchPages } from 'hooks/useFetch';
import { useCallback, useState } from 'react';
import { getTrandingMovies } from 'services';

const Home = () => {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('week');

  const getMovies = useCallback(async () => {
    return await getTrandingMovies({ page, filter });
  }, [page, filter]);

  const { data, status } = useFetchPages(getMovies, page === 1);

  const { results: movies, totalPages, reachedEnd } = data;

  const loadMore = () => {
    setPage(page + 1);
  };

  const changeFilter = filter => {
    setFilter(filter);
  };

  return (
    <div>
      <Filter onChangeFilter={changeFilter} />
      {movies !== undefined && movies.length !== 0 && (
        <GalleryStyled>
          {movies.map((movie, index) => (
            <GalleryItem key={index} movie={movie} />
          ))}
        </GalleryStyled>
      )}
      {status === fetchStatus.LOADING && <Loader className="pending" />}

      {totalPages > 1 && !reachedEnd && status !== fetchStatus.LOADING && (
        <Button type="button" onClick={loadMore}>
          Load more
        </Button>
      )}
    </div>
  );
};

export default Home;
