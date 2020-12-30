import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

const ContainerStyled = styled.div`
  color: var(--lightgrey);
  a {
    color: var(--lightgrey);
    :hover {
      color: var(--blue);
    }
  }
`;

const Copyright = ({ copyright }) => (
  <ContainerStyled>
    <div>
      © {new Date().getFullYear()}, {copyright}
    </div>
    <div className="imprint">
      <Link to="/imprint">Impressum</Link>
      {' | '}
      <Link to="/privacy">Datenschutz</Link>
    </div>
  </ContainerStyled>
);

Copyright.propTypes = {
  copyright: PropTypes.string.isRequired,
};

export default Copyright;
