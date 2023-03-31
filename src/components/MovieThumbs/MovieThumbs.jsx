import MovieThumbItem from './MovieThumbItem';
import { MovieThumbsStyled } from './MovieThumbs.styled';
import PropTypes from 'prop-types';

const MovieThumbs = ({ movies }) => {
  return (
    <MovieThumbsStyled>
      {movies.map(
        (movie, index) =>
          movie.poster_path && <MovieThumbItem key={index} movie={movie} />
      )}
    </MovieThumbsStyled>
  );
};

MovieThumbs.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MovieThumbs;
