import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { FormattedMessage } from 'react-intl';
import './index.scss';

const Work = () => {
//  const [projectSlug, setProjectSlug] = useState("");
  let { projectSlug } = useParams();

  useEffect(()=>{
    console.log(projectSlug);
  }, []);

  return(
    <section>
      <div>
        <h1><FormattedMessage id="work.title"/></h1>
        <p><FormattedMessage id="work.content"/></p>
        <div className="projectButtons">
          <button>Platon</button>
          <button>Solane</button>
          <button>Sedal</button>
        </div>
      </div>

      <div className="card">
        <h4><FormattedMessage id={`${projectSlug}.title`}/></h4>
        <p><FormattedMessage id={`${projectSlug}.content`} /></p>
      </div>
    </section>
  )
};

export default Work;
