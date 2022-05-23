import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../../Context/Context';
import './NavBar.css';

function NavBar() {
  const { user, setUser, setModal } = useContext(Context);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <Link to="/" className="logo">
        <img src="https://www.looper.com/img/gallery/yodas-story-explained/intro-1568760078.jpg" alt="logo" height="50px" />
        logo will be here...
      </Link>
      <div className="buttons">
        { user
          ? (
            <>
              <Link className="btn" to="/friends">
                ДРУЗЬЯ
              </Link>
              <div className="border" />
              <button
                onClick={() => {
                  navigate('/');
                  setUser(false);
                }}
                className="btn"
                type="button"
              >
                ВЫХОД
              </button>
            </>
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
