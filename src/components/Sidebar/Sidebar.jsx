import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Author from './Author';
import Contacts from './Contacts';
import Copyright from './Copyright';
import Menu from './Menu';
import { useSiteMetadata } from '../../hooks';
import { MIN_WIDTH } from '../../styles/consts';

const SidebarStyles = styled.div`
  padding: 3rem 2rem;
  position: sticky;
  top: 3rem;
  @media (min-width: ${MIN_WIDTH}) {
    ::after {
      background: #e6e6e6;
      background: linear-gradient(
        to bottom,
        #e6e6e6 0%,
        #e6e6e6 48%,
        #fff 100%
      );
      position: absolute;
      content: '';
      width: 1px;
      height: 540px;
      top: 30px;
      right: -10px;
      bottom: 0;
    }
  }
`;
const Sidebar = () => {
  const { author, copyright, menu } = useSiteMetadata();

  return (
    <SidebarStyles>
      <Author author={author} />
      <Menu menu={menu} />
      <Contacts contacts={author.contacts} />
      <Copyright copyright={copyright} />
    </SidebarStyles>
  );
};

export default Sidebar;
