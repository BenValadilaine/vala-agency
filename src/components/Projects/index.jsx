import React from 'react';
import { useParams } from "react-router-dom";
import { FormattedMessage } from 'react-intl';

const Projects = () => {
  let { projectSlug } = useParams();

  return(
    <div className="card">
      <h4><FormattedMessage id={`${projectSlug}.title`}/></h4>
      <p><FormattedMessage id={`${projectSlug}.content`} /></p>
    </div>
  )
};

export default Projects;
