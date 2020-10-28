import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import './index.scss';
// translations
import versFr from './translations/fr';
import versEn from './translations/en';
// components
import Navbar from './components/Navbar';
// pages
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';

const messages = {
    fr: versFr,
    en: versEn,
};

const App = () => {
  const [language, setLanguage] = useState('fr');

  return(
    <IntlProvider locale={language} messages={messages[language]}>
      <Router>
          <Navbar setLanguage={setLanguage}/>
        <Switch>

          <Route path="/about">
            <About />
          </Route>
          <Route path="/work/:projectSlug">
            <Work />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>

        </Switch>
      </Router>
    </IntlProvider>
  )
};

ReactDOM.render(<App />, document.querySelector("#root"));
