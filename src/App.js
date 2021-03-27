import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import ProtectedRoute from './ProtectedRoute/ProtectedRoutes';
import HomePage from './Pages/HomePage/HomePage';
import LoginPage from './Pages/LoginPage/LoginPage';
import Games from './Pages/Games/GameLanding/GameLanding';
import Nav from './Panels/Nav/Nav';
import WordScramble from './Pages/Games/WordScramble/WordScramble';
import PriceRight from './Pages/Games/PriceRight/PriceRight';
import PriceRightInput from './Pages/Games/PriceRight/PriceRightInput';
import LandingPage from './Pages/LandingPage/LandingPage';
import BabyGuess from './Pages/Games/BabyGuess/BabyGuess';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import VideoPage from './Pages/VideoPage/VideoPage';

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <Router>
      <Nav />
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Switch>
        <Redirect exact from='/' to='/home' />
        <ProtectedRoute
          exact
          path='/login'
          user={user}
          component={LoginPage}
          authRedirect='/games'
          hostRedirect='/games'
        />
        <ProtectedRoute
          exact
          path='/landing'
          user={user}
          component={LandingPage}
        />
        <ProtectedRoute
          exact
          path='/firstyear'
          user={user}
          component={VideoPage}
        />
        <ProtectedRoute
          exact
          path='/home'
          user={user}
          component={HomePage}
          authRedirect='/games'
          hostRedirect='/games'
        />
        <Route exact path='/games' component={Games} />
        <Route exact path='/wordscramble' component={WordScramble} />
        <Route exact path='/babyguess' component={BabyGuess} />
        <Route exact path='/pricerightinput' component={PriceRightInput} />
        <Route exact path='/priceisright' component={PriceRight} />
      </Switch>
    </Router>
  );
};

export default App;
