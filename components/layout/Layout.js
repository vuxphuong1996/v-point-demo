import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FooterTop from '../utils/FooterTop';

import './Layout.scss';

const Layout = (props) => (
  <div className="layoutWrapper">
    <Header />
    {props.children}
    <FooterTop />
    <Footer />
  </div>
);

export default Layout;
