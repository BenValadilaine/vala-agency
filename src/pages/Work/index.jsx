import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { FormattedMessage } from 'react-intl';
import './index.scss';
import Projects from '../../components/Projects';

const Work = () => {

  return(
    <section>
      <div>
        <h1><FormattedMessage id="work.title"/></h1>
        <p><FormattedMessage id="work.content"/></p>
        <div className="projectButtons">
          <Link to="/work/platon-study-case"><button>Platon</button></Link>
          <Link to="/work/solane-study-case"><button>Solane</button></Link>
          <Link to="/work/sedal-study-case"><button>Sedal</button></Link>
        </div>
      </div>

      <Router>
        <Switch>
          <Route path="/work/:projectSlug">
            <Projects />
          </Route>
        </Switch>
      </Router>
    </section>
  )
};

export default Work;
