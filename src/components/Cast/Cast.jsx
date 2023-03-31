import { useCallback } from 'react';
import { CastStyled } from './Cast.styled';
import { useFetch } from './../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { getCast } from 'services';
import { SubtitleStyled } from './../Styled/Subtitle.styled';
import { fetchStatus } from './../../constants/fetch.status';
import { Loader } from 'components/Styled';

const Cast = () => {
  const { movieId } = useParams();

  const getMovieCast = useCallback(async () => {
    return await getCast({ movieId });
  }, [movieId]);

  const { data, status } = useFetch(getMovieCast);

  return (
    <>
      {data && data.cast && data.cast.length !== 0 && (
        <>
          <CastStyled>
            {data.cast.map(
              ({ id, character, original_name, profile_path }, index) =>
                profile_path && (
                  <li key={index}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                      alt={character}
                    />
                    <div className="title">{character}</div>
                    <div className="subtitle">{original_name}</div>
                  </li>
                )
            )}
          </CastStyled>
        </>
      )}
      {data &&
        data.crew &&
        data.crew.length !== 0 &&
        data.crew.length !== undefined && (
          <>
            <SubtitleStyled>Crew</SubtitleStyled>
            <CastStyled>
              {data.crew.map(
                ({ id, job, original_name, profile_path }, index) =>
                  profile_path && (
                    <li key={index}>
                      <img
                        src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                        alt={original_name}
                      />
                      <div className="title">{job}</div>
                      <div className="subtitle">{original_name}</div>
                    </li>
                  )
              )}
            </CastStyled>
          </>
        )}

      {status === fetchStatus.LOADING && <Loader className="pending" />}
    </>
  );
};

export default Cast;
