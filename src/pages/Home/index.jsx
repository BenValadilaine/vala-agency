import React from "react";
import { FormattedMessage } from 'react-intl';
import './index.scss';

const Home = () => {

  return(
    <div className="home">
      <h1><FormattedMessage id="home.title"/></h1>
      <h3><FormattedMessage id="home.content.one"/></h3>
      <h3><FormattedMessage id="home.content.two"/></h3>
    </div>
  )
};

export default Home;
