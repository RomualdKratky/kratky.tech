import React from 'react';
import { Link } from 'gatsby';

import SEO from '../components/SEO';

const ContactPage = () => (
  <>
    <SEO title="Page two" />
    <h1>Hi from the contact page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </>
);

export default ContactPage;
