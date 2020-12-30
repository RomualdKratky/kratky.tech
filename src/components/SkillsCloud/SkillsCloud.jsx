import React, { useEffect, useRef, useState } from 'react';
import ReactWordcloud from 'react-wordcloud';
import styled from 'styled-components';

import {
  currentWordValue,
  rotationAngles,
  colors,
  fontFamilies,
  scales,
  spirals,
  wordValues,
} from './options';
import { words as defaultWords } from './words';
import SEO from '../SEO';
import { MIN_WIDTH } from '../../styles/consts';

const choose = (array) => array[Math.floor(Math.random() * array.length)];

const CloudContainerStyled = styled.div`
  width: 100%;
  height: 100%;
`;

const ContainerStyled = styled.div`
  width: 610px;
  margin-top: 4rem;
  @media (max-width: 1000px) {
    width: calc(100vw - 430px);
  }
  @media (max-width: ${MIN_WIDTH}) {
    width: calc(100vw - 80px);
  }
`;

const SkillStyled = styled.div`
  @keyframes appear {
    0% {
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      filter: blur(0px);
      opacity: 1;
    }
  }
  h3 {
    text-align: center;
    margin-top: 2rem;
    color: var(--grey);
    animation: appear 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
`;

const SkillsCloud = () => {
  const wordIndex = useRef(0);
  const randomWordValue = (word, index) => ({
    ...word,
    value: index === wordIndex.current ? currentWordValue : choose(wordValues),
  });
  const [words, setWords] = useState(defaultWords.map(randomWordValue));

  useEffect(() => {
    const interval = setInterval(() => {
      wordIndex.current = (wordIndex.current + 1) % words.length;
      setWords(words.map(randomWordValue));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const options = {
    colors,
    fontFamily: choose(fontFamilies),
    fontSizes: [16, 32],
    padding: 1,
    rotationAngles: choose(rotationAngles),
    spiral: choose(spirals),
    scale: choose(scales),
    transitionDuration: 500,
    enableTooltip: false,
  };

  return (
    <>
      <SEO title="Home" />

      <ContainerStyled>
        <CloudContainerStyled>
          <ReactWordcloud options={options} words={words} />
        </CloudContainerStyled>

        <SkillStyled>
          <h3 key={words[wordIndex.current].text}>
            {words[wordIndex.current].text}
          </h3>
        </SkillStyled>
      </ContainerStyled>
    </>
  );
};

export default SkillsCloud;
