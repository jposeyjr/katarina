import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import LoginPage from './Pages/LoginPage/LoginPage';
import Games from './Pages/Games/GameLanding/GameLanding';
import Nav from './Panels/Nav/Nav';
import './App.css';
import WordScramble from './Pages/Games/WordScramble/WordScramble';

const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/games' component={Games} />
        <Route exact path='/wordscramble' component={WordScramble} />
      </Switch>
    </Router>
  );
};

export default App;
