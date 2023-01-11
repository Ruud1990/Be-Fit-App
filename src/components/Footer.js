import React from 'react';
import {social} from '../assets/data';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-group">
          <p>created by Krzysztof Prońko</p>
        </div>
        <div className="dash"></div>
        <div className="footer-group">
          <p>
             &copy; Be Fit App
            <span id="date"></span>
          </p>
        </div>
        <div className="dash"></div>
        <div className="footer-group">
        <ul className='social-icons-footer'>
            {social.map((socialIcon) => {
              const { id, url, icon } = socialIcon;
              return (
                <li key={id}>
                  <a href={url}>{icon}</a>
                </li>
              );
            })}
          </ul>
        </div>
    </div>
  )
}

export default Footer