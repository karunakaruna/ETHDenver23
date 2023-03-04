import React, { useRef, useState } from 'react';
import logo from '../../assets/img/logo.svg';
import icon from '../../assets/img/icon-128.png';
import GreetingComponent from '../../containers/Greeting.jsx';
import './Popup.css';

const Popup = () => {

  const [user, setUser] = useState(false)

  return (
    <div className='App'>
      <header className="App-header">
      {user? 
        <div>Success</div>
        :
        <GreetingComponent />
      }
      </header>
    </div>
  );
};

export default Popup;