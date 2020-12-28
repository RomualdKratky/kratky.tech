import React from 'react';
import PropTypes from 'prop-types';
import { FaEnvelope, FaGithub, FaLinkedin, FaXingSquare } from 'react-icons/fa';
import styled from 'styled-components';

const StyledContainer = styled.div`
  margin-bottom: 2rem;
  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    li {
      padding: 0;
      display: flex;
      align-content: center;
      align-items: center;
      justify-content: center;
      height: 5rem;
      width: 5rem;
      line-height: 5rem;
      border-radius: 50%;
      text-align: center;
      border: 1px solid var(--lightgrey);
    }
    li > a {
      border: 0;
      display: flex;
      color: var(--grey);
      :hover {
        color: var(--black);
      }
    }
    li > a > svg {
      display: inline-block;
      width: 1.4em;
      height: 1.4em;
    }
  }
`;

const Contacts = ({ contacts }) => {
  const icons = {
    email: <FaEnvelope />,
    github: <FaGithub />,
    linkedin: <FaLinkedin />,
    xing: <FaXingSquare />,
  };
  return (
    <StyledContainer>
      <ul>
        {Object.keys(contacts).map((name) =>
          !contacts[name] ? null : (
            <li key={name}>
              <a
                href={contacts[name]}
                rel="noopener noreferrer"
                target="_blank"
              >
                {icons[name]}
              </a>
            </li>
          ),
        )}
      </ul>
    </StyledContainer>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.shape({
    linkedin: PropTypes.string,
    xing: PropTypes.string,
    email: PropTypes.string,
    github: PropTypes.string,
  }).isRequired,
};

export default Contacts;
