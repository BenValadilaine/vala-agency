import React, { useState } from 'react';
import {  Link } from "react-router-dom";
import { FormattedMessage } from 'react-intl';
import './index.scss';
import Projects from '../../components/Projects';

const Work = () => {
  const [casename, setCasename] = useState('platon-study-case');

  return(
    <section>
      <div>
        <h1><FormattedMessage id="work.title"/></h1>
        <h4><FormattedMessage id="work.content"/></h4>
        <div className="projectButtons">
          <button onClick={() => setCasename('platon-study-case')} >Platon</button>
          <button onClick={() => setCasename('solane-study-case')} >solane</button>
          <button onClick={() => setCasename('sedal-study-case')} >Sedal</button>
        </div>

        <Projects casename={casename}/>
      </div>


    </section>
  )
};

export default Work;
