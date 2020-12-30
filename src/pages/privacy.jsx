/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import styled from 'styled-components';
import SEO from '../components/SEO';

const ContainerStyled = styled.div`
  font-size: 12px;
  margin-top: 2rem;
  p {
    margin: 1rem 0;
  }
`;

const PrivacyPage = () => (
  <>
    <SEO title="Datenschutz" />
    <h1>Datenschutz</h1>
    <ContainerStyled>
      <div />
      <h2>Erklärung zur Informationspflicht</h2>
      <h3>(Datenschutzerklärung)</h3>
      <p>
        Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir
        verarbeiten Ihre Daten daher ausschließlich auf Grundlage der
        gesetzlichen Bestimmungen (DSGVO, TKG 2003). In diesen
        Datenschutzinformationen informieren wir Sie über die wichtigsten
        Aspekte der Datenverarbeitung im Rahmen unserer Website.
      </p>
      <p>
        Beim Besuch unserer Webseite wird Ihre IP-Adresse, Beginn und Ende der
        Sitzung für die Dauer dieser Sitzung erfasst. Dies ist technisch bedingt
        und stellt damit ein berechtigtes Interesse iSv Art 6 Abs 1 lit f DSGVO
        dar. Soweit im Folgenden nichts anderes geregelt wird, werden diese
        Daten von uns nicht weiterverarbeitet.
      </p>
      <h3>Kontakt mit uns</h3>
      <p>
        Wenn Sie per Formular auf der Website oder per E-Mail Kontakt mit uns
        aufnehmen, werden Ihre angegebenen Daten zwecks Bearbeitung der Anfrage
        und für den Fall von Anschlussfragen sechs Monate bei uns gespeichert.
        Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
      </p>
      <h3>Cookies</h3>
      <p>
        Unsere Website verwendet so genannte Cookies. Dabei handelt es sich um
        kleine Textdateien, die mit Hilfe des Browsers auf Ihrem Endgerät
        abgelegt werden. Sie richten keinen Schaden an.
      </p>
      <p>
        Wir nutzen Cookies dazu, unser Angebot nutzerfreundlich zu gestalten.
        Einige Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese
        löschen. Sie ermöglichen es uns, Ihren Browser beim nächsten Besuch
        wiederzuerkennen.
      </p>
      <p>
        Wenn Sie dies nicht wünschen, so können Sie Ihren Browser so einrichten,
        dass er Sie über das Setzen von Cookies informiert und Sie dies nur im
        Einzelfall erlauben.
      </p>
      <p>
        Bei der Deaktivierung von Cookies kann die Funktionalität unserer
        Website eingeschränkt sein.
      </p>
      <h3>Web-Analyse mit Anonymisierungsfunktion</h3>
      <p>
        Unsere Website verwendet Google Analytics, einen Webanalysedienst der
        Firma Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043
        USA, nachfolgend „Google“ genannt.
      </p>
      <p>
        Google-Analytics verwendet sog. „Cookies“, Textdateien, die auf Ihrem
        Computer gespeichert werden und hierdurch eine Analyse der Benutzung der
        Website durch Sie ermöglichen.
      </p>
      <p>
        Die dadurch erzeugten Informationen werden auf den Server des Anbieters
        übertragen und dort gespeichert.
      </p>
      <p>
        Wir verwenden auf unserer Website Google-Analytics mit einer
        IP-Anonymisierungsfunktion. Ihre IP-Adresse wird in diesem Fall von
        Google schon innerhalb von Mitgliedstaaten der Europäischen Union oder
        in anderen Vertragsstaaten des Abkommens über den Europäischen
        Wirtschaftsraum gekürzt und dadurch anonymisiert.
      </p>
      <p>
        Google wird diese Informationen benutzen, um Ihre Nutzung unserer Seite
        auszuwerten, um Reports über die Websiteaktivitäten für uns
        zusammenzustellen und um weitere mit der Websitenutzung und der
        Internetnutzung verbundene Dienstleistungen zu erbringen. Auch wird
        Google diese Informationen gegebenenfalls an Dritte übertragen, sofern
        dies gesetzlich vorgeschrieben oder soweit Dritte diese Daten im Auftrag
        von Google verarbeiten.
      </p>
      <p>
        Google wird, nach eigenen Angaben, in keinem Fall Ihre IP-Adresse mit
        anderen Daten von Google in Verbindung bringen. Sie können die
        Installation der Cookies durch eine entsprechende Einstellung Ihrer
        Browser-Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie
        in diesem Fall gegebenenfalls nicht sämtliche Funktionen unserer Website
        vollumfänglich nutzen können.
      </p>
      <p>
        Des Weiteren bietet Google für die gängigsten Browser eine
        Deaktivierungsoption an, welche Ihnen mehr Kontrolle darüber gibt,
        welche Daten von Google erfasst und verarbeitet werden. Sollte Sie diese
        Option aktivieren, werden keine Informationen zum Website-Besuch an
        Google Analytics übermittelt. Die Aktivierung verhindert aber nicht,
        dass Informationen an uns oder an andere von uns gegebenenfalls
        eingesetzte Webanalyse-Services übermittelt werden. Weitere
        Informationen zu der von Google bereitgestellten Deaktivierungsoption
        sowie zu der Aktivierung dieser Option, erhalten Sie über nachfolgenden
        Link:{' '}
        <a
          href="https://tools.google.com/dlpage/gaoptout?hl=de"
          target="_blank"
          rel="noreferrer"
        >
          https://tools.google.com/dlpage/gaoptout?hl=de
        </a>
      </p>
      <p>
        Außerdem können Sie sich über diesen Link{' '}
        <a href="javascript:gaOptout();">von Google Analytics abmelden.</a>
      </p>

      <h3>Ihre Rechte</h3>
      <p>
        Ihnen stehen bezüglich Ihrer bei uns gespeicherten Daten grundsätzlich
        die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung,
        Datenübertragbarkeit, Widerruf und Widerspruch zu.
      </p>
      <h3>Kontaktdaten</h3>
      <p>
        <p>Romuald Kratky</p>
        <p>Rudolf-Virchow-Straße 14/2/2444, 1210 Wien, Austria</p>
        <p>
          <a href="mailto:office@kratky.tech">office@kratky.tech</a>
        </p>
      </p>
    </ContainerStyled>
  </>
);

export default PrivacyPage;
