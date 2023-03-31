import { FooterStyled } from './Footer.styled';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  const toTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <FooterStyled>
      <Link to={'/'}>
        <img src={logo} alt="logo" onClick={toTop} />
      </Link>
      <ul>
        <li>©2023</li>
        <li>Made by Iurii Bardych</li>
        <li>React App</li>
      </ul>
    </FooterStyled>
  );
};

export default Footer;
