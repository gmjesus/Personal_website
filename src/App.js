import React from 'react';
import './App.css';
import About from './Components/About.js'
import Skills from './Components/Skills.js'
import Work from './Components/Work.js'
import Education from './Components/Education.js'
import Contact from './Components/Contact.js'
import NavBar from './Components/NavBar.js'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" render={About} />
          <Route exact path="/about" render={About} />
          <Route exact path="/skills" render={Skills} />
          <Route exact path="/work" render={Work} />
          <Route exact path="/education" render={Education} />
          <Route exact path="/contact" render={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
