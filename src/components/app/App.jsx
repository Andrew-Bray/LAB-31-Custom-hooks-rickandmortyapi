import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CharacterPages from '../../pages/CharacterPages';
import CharacterById from '../../pages/CharacterById';
import Header from '../header/Header';
import './app.css';
import ThemeProvider from '../../state/siteTheme';

export default function App() {
  return (
    <Router>
      <ThemeProvider>
        <Header />
        <Switch>
          <Route exact path="/" component={CharacterPages} />
          <Route  
            path="/character/:id" 
            component={CharacterById} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}
