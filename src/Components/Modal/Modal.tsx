import React, { useState, useContext } from 'react';
import { Transition } from 'react-transition-group';
import { Context } from '../../Context/Context';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';

import './Modal.css';

function Modal() {
  const [active, setActive] = useState('signin');
  const { modal, setModal } = useContext(Context);

  return (
    <Transition
      in={modal}
      timeout={500}
      mountOnEnter
      unmountOnExit
    >
      {(state) => (
        <div
          onClick={() => setModal(false)}
          onKeyDown={(e) => { if (e.key === 'Escape') { setModal(false); } }}
          className="modal"
          role="menu"
          tabIndex={0}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => { if (e.key === 'Escape') { setModal(false); } }}
            className={`modal-info ${state}`}
            role="menu"
            tabIndex={0}
          >
            <button
              onClick={() => setActive('signin')}
              className={active === 'signin' ? 'tab tab-on' : 'tab tab-off'}
              type="button"
            >
              ВХОД
            </button>
            <button
              onClick={() => setActive('signup')}
              type="button"
              className={active === 'signup' ? 'tab tab-on' : 'tab tab-off'}
            >
              РЕГИСТРАЦИЯ
            </button>
            {active === 'signin' ? <SignIn /> : <SignUp />}
          </div>
        </div>
      )}
    </Transition>
  );
}

export default Modal;
