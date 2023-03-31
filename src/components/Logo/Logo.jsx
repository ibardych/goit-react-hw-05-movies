import { LogoStyled } from './Logo.styled';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <LogoStyled>
      <Link to={'/'}>
        <span>Cine</span>Scope
      </Link>
    </LogoStyled>
  );
};

export default Logo;
