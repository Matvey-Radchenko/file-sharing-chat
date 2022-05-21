import React, { useContext } from 'react';
import { Context } from '../../Context/Context';
import './NavBar.css';

function NavBar() {
  const { user, setUser, setModal } = useContext(Context);

  return (
    <div className="navBar">
      <div className="logo">
        <img src="https://www.looper.com/img/gallery/yodas-story-explained/intro-1568760078.jpg" alt="logo" height="50px" />
        logo will be here...
      </div>
      <div className="buttons">
        <div className="btn">ДРУЗЬЯ</div>
        <div className="border" />
        { user
          ? (
            <button
              onClick={() => setUser(false)}
              className="btn"
              type="button"
            >
              ВЫХОД
            </button>
          )
          : (
            <button
              onClick={() => setModal(true)}
              className="btn"
              type="button"
            >
              АВТОРИЗАЦИЯ
            </button>
          )}
      </div>
    </div>
  );
}

export default NavBar;
