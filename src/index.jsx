import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './index.scss';
// components
import Navbar from './components/Navbar';
// pages
import Home from './pages/Home';

const App = () => {

  return(
    <main>
      <Router>
        <Switch>
          <Navbar />

          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </main>
  )
};

ReactDOM.render(<App />, document.querySelector("#root"));
