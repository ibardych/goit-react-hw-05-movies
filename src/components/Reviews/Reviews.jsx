import { ReviewsStyled } from './Reviews.styled';
import { useParams } from 'react-router-dom';
import { useFetchPages } from './../../hooks/useFetch';
import { useCallback, useState } from 'react';
import { getReviews } from 'services';
import { fetchStatus } from './../../constants/fetch.status';
import { Button } from './../Styled/Button.styled';
import Message from 'components/Message/Message';
import { Loader } from 'components/Styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [page, setPage] = useState(1);

  const getMovieReviews = useCallback(async () => {
    return await getReviews({ movieId, page });
  }, [movieId, page]);

  const { data, status } = useFetchPages(getMovieReviews, page === 1);

  const { results: reviews, totalPages, reachedEnd } = data;

  const loadMore = () => {
    setPage(page + 1);
  };

  console.log(data);

  return (
    <>
      {reviews && reviews.length && (
        <ReviewsStyled>
          {reviews.map(({ id, author, content, updated_at }, index) => (
            <li key={index}>
              <div className="author">{author}</div>
              <div className="date">{updated_at.slice(0, 10)}</div>
              <div className="content">{content}</div>
            </li>
          ))}
        </ReviewsStyled>
      )}

      {reviews && !reviews.length && (
        <Message>We don't have any reviews for this movie</Message>
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

export default Reviews;
