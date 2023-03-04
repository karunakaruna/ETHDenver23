import React, { useRef, useState } from 'react';
import GreetingComponent from '../../containers/Greeting.jsx';
import App from '../../containers/Globe.jsx';
import './Popup.css';

const Popup = () => {

  const [user, setUser] = useState(true)

  return (
    <div className='App'>
      <header className="App-header">
      {user? 
        <App />
        :
        <GreetingComponent />
      }
      </header>
    </div>
  );
};

export default Popup;