import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ContainerStyled = styled.div`
  color: var(--lightgrey);
`;

const Copyright = ({ copyright }) => (
  <ContainerStyled>
    © {new Date().getFullYear()}, {copyright}
  </ContainerStyled>
);

Copyright.propTypes = {
  copyright: PropTypes.string.isRequired,
};

export default Copyright;
