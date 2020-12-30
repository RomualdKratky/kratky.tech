import React from 'react';

import styled from 'styled-components';
import SEO from '../components/SEO';

const ContainerStyled = styled.div`
  margin-top: 8rem;
  p {
    margin: 1rem 0;
  }
`;

const ImprintPage = () => (
  <>
    <SEO title="Impressum" />
    <h1>Impressum</h1>
    <ContainerStyled>
      DI Romuald Kratky
      <p>
        Rudolf-Virchow-Straße 14/2/2444 <br />
        1210 Wien
      </p>
      <p>Unternehmensgegenstand: IT-Dienstleistungen</p>
      <p>
        Mitglied der Fachgruppe Unternehmensberatung und
        Informationstechnologie.
      </p>
      <p>Gerichtsstand: Wien</p>
      <p>UID-Nummer: ATU73313639</p>
      <p>
        <a
          href="https://firmen.wko.at/Web/DetailsInfos.aspx?FirmaID=45600f26-5273-4b0a-a966-fad96f2668aa"
          target="_blank"
          rel="noreferrer"
        >
          WKO.at
        </a>
      </p>
      <p>
        Rechtsgrundlagen <br />§ 24 Mediengesetz (MedienG)
      </p>
      Kontakt <br />
      Email: <a href="mailto:office@kratky.tech">office@kratky.tech</a>
      <br />
    </ContainerStyled>
  </>
);

export default ImprintPage;
