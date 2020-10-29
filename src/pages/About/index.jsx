import React from 'react';
import { FormattedMessage } from 'react-intl';
import './index.scss';

const About = () => {

  return(
    <div className="about">
      <h1><FormattedMessage id="about.title"/></h1>
      <p><FormattedMessage id="about.content.one"/></p>
      <p><FormattedMessage id="about.content.two"/></p>
    </div>
  )
};

export default About;
