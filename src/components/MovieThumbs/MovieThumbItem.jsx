import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { MovieThumbItemStyled } from './MovieThumbItem.styled';

const MovieThumbItem = ({ movie }) => {
  const { id, poster_path, title } = movie;

  const location = useLocation();

  return (
    <MovieThumbItemStyled>
      <Link to={`${id}`} state={{ from: location }} className="container">
        <div className="image-wrapper">
          <div className="image">
            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={title}
            />
          </div>
        </div>
        <div className="title">{title}</div>
      </Link>
    </MovieThumbItemStyled>
  );
};

MovieThumbItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    poster_path: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export default MovieThumbItem;
