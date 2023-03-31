import { LinkStyled } from './../Styled/Link.styled';
import { NavigationStyled } from './Navigation.styled';

const Navigation = () => {
  return (
    <NavigationStyled>
      <ul>
        <li>
          <LinkStyled to="/">Home</LinkStyled>
        </li>
        <li>
          <LinkStyled to="/movies">Movies</LinkStyled>
        </li>
      </ul>
    </NavigationStyled>
  );
};

export default Navigation;
