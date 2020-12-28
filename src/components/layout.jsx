import React from 'react';
import PropTypes from 'prop-types';
import 'normalize.css';
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';
import Sidebar from './Sidebar/Sidebar';
import { MIN_WIDTH } from '../styles/consts';

const ContentStyled = styled.div`
  background: white;
  padding: 0rem 2rem;
  display: flex;
  flex-wrap: wrap;
  max-width: 100rem;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: ${MIN_WIDTH}) {
    padding: 3rem 2rem;
  }
`;

const SidebarStyled = styled.div`
  max-width: 32rem;
  flex: 1 1 28rem;
  margin-right: 3rem;
`;

const MainStyled = styled.main`
  flex: 1 1 28rem;
  padding: 3rem 2rem;
`;

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Typography />
    <ContentStyled>
      <SidebarStyled>
        <Sidebar />
      </SidebarStyled>
      <MainStyled>{children}</MainStyled>
    </ContentStyled>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
