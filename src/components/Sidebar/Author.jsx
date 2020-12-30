import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import rk from '../../images/rk.jpg';

const ContainerStyled = styled.div`
  margin-bottom: 2rem;
  h1 {
    margin-top: 1rem;
  }
  p {
    color: var(--grey);
  }
`;

const LinkStyled = styled(Link)`
  color: var(--black);
  :hover {
    color: var(--black);
  }
`;

const ImageStyled = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 50%;
`;

const Author = ({ author }) => (
  <ContainerStyled>
    <LinkStyled to="/">
      <ImageStyled src={rk} width="80" height="80" alt={author.name} />
    </LinkStyled>

    <h1>
      <LinkStyled to="/">{author.name}</LinkStyled>
    </h1>

    <p>{author.bio}</p>
  </ContainerStyled>
);

Author.propTypes = {
  author: PropTypes.shape({
    photo: PropTypes.string,
    name: PropTypes.string,
    bio: PropTypes.string,
  }).isRequired,
};

export default Author;
