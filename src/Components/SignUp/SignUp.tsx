import React from 'react';
import './SignUp.css';
import { IoMdMail } from 'react-icons/io';
import { RiLockPasswordFill } from 'react-icons/ri';
import { BsPersonLinesFill } from 'react-icons/bs';

function SignUp() {
  return (
    <div className="signIn">
      <div className="caption">Имя</div>
      <div className="inp-block">
        <h3 className="pic">
          <BsPersonLinesFill />
        </h3>
        <input className="inp" type="text" placeholder="Имя" />
      </div>
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

      <button className="btn-in" type="submit">Зарегестрироваться</button>
    </div>
  );
}

export default SignUp;
