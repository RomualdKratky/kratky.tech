import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavStyled = styled.nav`
  margin-bottom: 2rem;
  ul {
    list-style: none;
    padding: 0px;
    li {
      margin-bottom: 0.8rem;
    }
  }
`;

const Menu = ({ menu }) => (
  <NavStyled>
    <ul>
      {menu.map((item) => (
        <li key={item.path}>
          <Link to={item.path} activeClassName="active">
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </NavStyled>
);

Menu.propTypes = {
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      path: PropTypes.string,
    }),
  ).isRequired,
};

export default Menu;
