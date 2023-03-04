import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import icon from '../assets/img/icon-128.png';
import lens from '../assets/svg/lens.svg';
import metamask from '../assets/svg/metamask.svg';
import '../pages/Popup/Popup.css';

import { getUrl }from '../js/url.js';

export default function GreetingComponent() {
  return(
    <div>
      <img src={icon} className="App-logo" alt="logo" />
      <p>Welcome to Compass!</p>
      <p>Please sign in</p>
      <Button className='loginButton' onClick={getUrl}><img height="95%" src={lens} alt="lens" /></Button>
      <Button className='loginButton' onClick={getUrl}><img height="95%" src={metamask} alt="metamask" /></Button>
    </div>
  )
}
