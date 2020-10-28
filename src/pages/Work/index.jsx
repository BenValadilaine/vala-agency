import React from 'react';
import { FormattedMessage } from 'react-intl';
import './index.scss';

const Work = () => {

  return(
    <div>
      <h1><FormattedMessage id="work.title"/></h1>
      <p><FormattedMessage id="work.content"/></p>
    </div>
  )
};

export default Work;
