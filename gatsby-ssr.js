/* eslint-disable react/jsx-props-no-spreading, react/jsx-filename-extension */
import React from 'react';
import Layout from './src/components/Layout';

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
