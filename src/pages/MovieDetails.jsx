import BackButton from 'components/BackButton/BackButton';
import Card from 'components/Card/Card';
import { LinkTab } from 'components/Styled/LinkTab.styled';
import { fetchStatus } from 'constants';
import { useFetch } from 'hooks/useFetch';
import { useCallback } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieDetailsById } from 'services';
import { SubtitleStyled } from './../components/Styled/Subtitle.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/movies';

  const getMovieDetails = useCallback(async () => {
    return await getMovieDetailsById({ movieId });
  }, [movieId]);

  const { data, status } = useFetch(getMovieDetails);

  return (
    <div>
      <BackButton backlink={backLinkHref}></BackButton>
      {status !== fetchStatus.LOADING && data && data.id && (
        <>
          <Card data={data} />
          <SubtitleStyled>Additional information</SubtitleStyled>
          <LinkTab to={'cast'} state={{ from: backLinkHref }}>
            Cast
          </LinkTab>
          <LinkTab to={'reviews'} state={{ from: backLinkHref }}>
            Reviews
          </LinkTab>
        </>
      )}
      <Outlet />
    </div>
  );
};

export default MovieDetails;
