import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import LoginPage from './Pages/LoginPage/LoginPage';
import Games from './Pages/Games/GameLanding';
import Nav from './Panels/Nav/Nav';
import './App.css';
import WordScramble from './Pages/Games/WordScramble/WordScramble';
import { UseTime } from './UseTime';

const App = () => {
  const [time, setTime] = useState(0);

  const providerValue = useMemo(() => ({ time, setTime }), [time, setTime]);
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/login' component={LoginPage} />
        <UseTime.Provider value={providerValue}>
          <Route exact path='/games' component={Games} />
          <Route exact path='/wordscramble' component={WordScramble} />
        </UseTime.Provider>
      </Switch>
    </Router>
  );
};

export default App;
