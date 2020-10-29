import React from 'react';
import { useParams } from "react-router-dom";
import { FormattedMessage } from 'react-intl';
import './index.scss';

const Projects = ({casename}) => {

  return(
    <div className="card">
      <h3><FormattedMessage id={`${casename}.title`}/></h3>
      <p><FormattedMessage id={`${casename}.content`} /></p>
    </div>
  )
};

export default Projects;
