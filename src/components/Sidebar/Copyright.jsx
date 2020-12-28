import React from 'react';
import PropTypes from 'prop-types';

const Copyright = ({ copyright }) => (
  <div>
    © {new Date().getFullYear()}, {copyright}
  </div>
);

Copyright.propTypes = {
  copyright: PropTypes.string.isRequired,
};

export default Copyright;
