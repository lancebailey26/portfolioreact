/* eslint-disable react/react-in-jsx-scope */

import AOS from 'aos';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import './App.css';
import { useEffect, React } from 'react';
import ReactGA from 'react-ga';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Intro from './components/intro.js';
import Blog from './components/blog.js';
import Navigation from './components/nav.js';
import Github from './components/github.js';
import Kit from './components/kit.js';
AOS.init();
ReactGA.initialize('UA-247643103-1');

function App () {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <main>
    <Navigation/>
    <Router>
        <Switch>
            <Route exact path="/">
                <Intro />
                <Github/>
            </Route>
            <Route exact path="/blog">
                <Blog/>

            </Route>
            <Route exact path='/kit'>
            <Kit/>
            </Route>
        </Switch>
    </Router>
</main>);
}

export default App;
