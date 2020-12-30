import React from 'react';

import styled from 'styled-components';
import SEO from '../components/SEO';

const ContainerStyled = styled.div`
  margin-top: 8rem;
  text-align: center;
  p {
    margin: 1rem 0;
  }
`;

const ContactPage = () => (
  <>
    <SEO title="Kontakt" />
    <h1>Kontakt</h1>
    <ContainerStyled>
      <h2>Romuald Kratky</h2>
      <p>romuald@kratky.tech</p>
      <p>Rudolf-Virchow-Straße 14/2/2444</p>
      <p>1210 Wien, Austria</p>
      <p>UID-Nr.: ATU73313639 </p>
    </ContainerStyled>
  </>
);

export default ContactPage;
