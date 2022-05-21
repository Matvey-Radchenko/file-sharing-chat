import React, { useContext } from 'react';
import './SignIn.css';
import { IoMdMail } from 'react-icons/io';
import { RiLockPasswordFill } from 'react-icons/ri';
import { Context } from '../../Context/Context';

// interface SignInProps {
// eslint-disable-next-line no-unused-vars
// setActive: (value: string | ((prev: string) => string)) => void;
// }

function SignIn() {
  const { setUser, setModal } = useContext(Context);

  return (
    <div className="signIn">
      <div className="caption">Email</div>
      <div className="inp-block">
        <h3 className="pic">
          <IoMdMail />
        </h3>
        <input className="inp" type="text" placeholder="example@company.com" />
      </div>
      <div className="caption">Пароль</div>
      <div className="inp-block">
        <h3 className="pic">
          <RiLockPasswordFill />
        </h3>
        <input className="inp" type="text" placeholder="Пароль" />
      </div>
      <button
        onClick={() => {
          setModal(false);
          setUser(true);
        }}
        className="btn-in"
        type="submit"
      >
        Войти
      </button>
    </div>
  );
}

export default SignIn;
