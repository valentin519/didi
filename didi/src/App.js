import React from 'react';
import './App.css';
import AboutMe from './component/AboutMe';
import Navbar from './component/Navbar';
import Price from './component/Price';
import {Switch, Route} from 'react-router-dom';
import Devis from './component/Devis'
import Contact from './component/Contact';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Switch>
        <Route exact path ='/' component={AboutMe} />
        <Route path ='/tarifs' component={Price} />
        <Route path ='/contact' component={Contact} />
        <Route path = '/devis' component={Devis} />
        </Switch>
    </div>
  );
}

export default App;
