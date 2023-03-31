import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { GalleryItemStyled } from './GalleryItem.styled';

const GalleryItem = ({ movie }) => {
  const { id, poster_path, title, vote_average, vote_count, popularity } =
    movie;

  const location = useLocation();

  return (
    <GalleryItemStyled>
      <Link
        to={`movies/${id}`}
        state={{ from: location }}
        className="container"
      >
        <div className="image-wrapper">
          <div className="image">
            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={title}
            />
          </div>
        </div>
        <div className="title">{title}</div>
        <div className="stats">
          <p className="item">
            <b>Votes </b>
            {vote_count}
          </p>
          <p className="item">
            <b>Average</b>
            {vote_average}
          </p>
          <p className="item">
            <b>Popularity</b>
            {popularity}
          </p>
        </div>
      </Link>
    </GalleryItemStyled>
  );
};

GalleryItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    poster_path: PropTypes.string,
    title: PropTypes.string,
    vote_average: PropTypes.number,
    vote_count: PropTypes.number,
    popularity: PropTypes.number,
  }).isRequired,
};

export default GalleryItem;
