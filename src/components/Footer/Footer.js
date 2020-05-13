import React from 'react';
import Button from '../Button';
import './footer.scss';

const Footer = () => (
  <footer>
    <p>Created using the 
      <Button
        type="anchor"
        href="https://developer.mapquest.com/"
      >MapQuest
      </Button>
      
      and
      <Button
        type="anchor"
        href="https://openweathermap.org/"
      >OpenWeather
      </Button>
      APIs.
    </p>
  </footer>
);

export default Footer;
