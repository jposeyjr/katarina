import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import LoginPage from './Pages/LoginPage/LoginPage';
import Games from './Pages/Games/GameLanding/GameLanding';
import Nav from './Panels/Nav/Nav';
import './App.css';
import WordScramble from './Pages/Games/WordScramble/WordScramble';
import PriceRight from './Pages/Games/PriceRight/PriceRight';
import { useDispatch, useSelector } from 'react-redux';
import ProtectedRoute from './Pages/Games/Utilz/ProtectedRoutes';

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <ProtectedRoute
          exact
          path='/login'
          user={user}
          component={LoginPage}
          authRedirect='/games'
        />
        <ProtectedRoute
          exact
          path='/games'
          component={Games}
          authRedirect='/games'
        />
        <Route exact path='/wordscramble' component={WordScramble} />
        <Route exact path='/priceisright' component={PriceRight} />
      </Switch>
    </Router>
  );
};

export default App;
