import React from 'react';
import styled from 'styled-components';

import SEO from '../components/SEO';

const ContainerStyled = styled.div`
  margin-top: 4rem;
`;

const AboutPage = () => (
  <>
    <SEO title="Über mich" />
    <h1>Über mich</h1>
    <ContainerStyled>
      <p>
        Ich bin seit mehr als 20 Jahren als Software Entwickler tätig und habe
        in unterschiedlichen Firmen und Positionen Erfahrungen gesammelt.
      </p>
      <p>
        2018 habe ich mich dazu entschieden diese Erfahrungen, Hard- und
        Soft-Skills, als freiberuflicher Software Entwickler meinen Kunden
        anzubieten.
      </p>
      <p>Dabei bin ich spezialisiert auf </p>
      <ul>
        <li>Web Applikationen</li>
        <li>Mobile Applikationen.</li>
      </ul>
      <p>
        Ich biete meinen Kunden
        <ul>
          <li>kurzfristige Unterstützung bei akuten Problemstellungen </li>
          <li>mittel- bis langfristige Projektzusammenarbeit</li>
          <li>komplette Applikationsentwicklung.</li>
        </ul>
      </p>
      <p>Auf unsere baldige Zusammenarbeit freue ich mich.</p>
    </ContainerStyled>
  </>
);

export default AboutPage;
