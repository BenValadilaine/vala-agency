import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './index.scss';
// components
import Navbar from './components/Navbar';
// pages
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';

const App = () => {

  return(
    <main>
      <Router>
          <Navbar />

          <Route path="/about">
            <About />
          </Route>
          <Route path="/work">
            <Work />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        <Switch>

        </Switch>
      </Router>
    </main>
  )
};

ReactDOM.render(<App />, document.querySelector("#root"));
