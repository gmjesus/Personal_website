import React from 'react';
import './App.css';
import About from './Components/About.js'
import Skills from './Components/Skills.js'
import Work from './Components/Work.js'
import Education from './Components/Education.js'
import Contact from './Components/Contact.js'
import NavBar from './Components/NavBar.js'
import NotFound from './Components/NotFound.js'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/work" component={Work} />
          <Route exact path="/education" component={Education} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
