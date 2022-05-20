import React from 'react';
import './NavBar.css';

interface NavBarProps {
  // eslint-disable-next-line no-unused-vars
  setModal: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

function NavBar({ setModal }:NavBarProps) {
  return (
    <div className="navBar">
      <div className="logo">
        <img src="https://www.looper.com/img/gallery/yodas-story-explained/intro-1568760078.jpg" alt="logo" height="50px" />
        logo will be here...
      </div>
      <div className="buttons">
        <div className="btn">ДРУЗЬЯ</div>
        <div className="border" />
        <button
          onClick={() => setModal(true)}
          className="btn"
          type="button"
        >
          АВТОРИЗАЦИЯ

        </button>
      </div>
    </div>
  );
}

export default NavBar;
