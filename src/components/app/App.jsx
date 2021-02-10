import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CharacterPages from '../../pages/CharacterPages';
import CharacterById from '../../pages/CharacterById';
import Header from '../header/Header';
import './app.css';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={CharacterPages} />
        <Route  
          path="/character/:id" 
          component={CharacterById} />
      </Switch>
    </Router>
  );
}
