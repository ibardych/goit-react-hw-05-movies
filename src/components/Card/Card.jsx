import { CardStyled } from './Card.styled';
import { AiOutlineLink } from 'react-icons/ai';
import PropTypes from 'prop-types';

const Card = ({ data }) => {
  const { title, poster_path, genres, overview, release_date, homepage } = data;
  return (
    <CardStyled>
      <div className="image">
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        />
      </div>
      <div className="info">
        <div className="title">{title}</div>
        <div className="date">
          Release date: <span>{release_date}</span>
        </div>
        <div className="overview">{overview}</div>

        {homepage && (
          <a
            href={homepage}
            target="_blank"
            className="link"
            rel="noopener noreferrer"
          >
            <AiOutlineLink className="icon" />
            Official webiste
          </a>
        )}
        <div className="genres">
          {genres.map(item => (
            <span key={item.id}>{item.name}</span>
          ))}
        </div>
      </div>
    </CardStyled>
  );
};

Card.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    poster_path: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.object),
    overview: PropTypes.string,
    release_date: PropTypes.string,
    homepage: PropTypes.string,
  }).isRequired,
};

export default Card;
