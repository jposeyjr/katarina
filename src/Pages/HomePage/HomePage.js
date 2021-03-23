import React from 'react';
import UserForm from '../../Panels/UserForm/UserForm';
import { WelcomeText } from './styles';

const HomePage = () => {
  return (
    <div className='root'>
      <div className='gridContainer'>
        <div className='rootHome'>
          <h1>Virtual Baby Shower</h1>
          <WelcomeText>
            Welcome to the virtual baby shower, were you can have the baby
            shower experience with so much less work! Play fun games, invite all
            your family and friends with ease, share your registry and keep
            everyone updated on changes!
          </WelcomeText>
        </div>
        <div className='userForm'>
          <UserForm />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
