import { BackButtonStyled } from './BackButton.styled';
import { Link } from 'react-router-dom';
import { BsChevronLeft } from 'react-icons/bs';
import { PropTypes } from 'prop-types';

const BackButton = ({ backlink }) => {
  return (
    <BackButtonStyled>
      <Link to={backlink} className="link">
        <BsChevronLeft /> Back
      </Link>
    </BackButtonStyled>
  );
};

export default BackButton;

BackButton.propTypes = PropTypes = {
  backlink: PropTypes.object.isRequired,
};
