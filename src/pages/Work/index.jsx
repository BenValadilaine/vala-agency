import React from 'react';
import { useParams } from "react-router-dom";
import { FormattedMessage } from 'react-intl';
import './index.scss';

const Work = () => {
  let { projectSlug } = useParams();


  return(
    <section>
      <div>
        <h1><FormattedMessage id="work.title"/></h1>
        <p><FormattedMessage id="work.content"/></p>
      </div>
      <div className="card">
        <h4><FormattedMessage id={`${projectSlug}.title`}/></h4>
        <p><FormattedMessage id={`${projectSlug}.content`} /></p>
      </div>
    </section>
  )
};

export default Work;
