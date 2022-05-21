import React, { createContext, useState } from 'react';

interface contextProps {
  user: boolean,
  modal:boolean,
  // eslint-disable-next-line no-unused-vars
  setUser: (value: boolean | ((prev: boolean) => boolean)) => void,
  // eslint-disable-next-line no-unused-vars
  setModal: (value: boolean | ((prev: boolean) => boolean)) => void,
}

const initState = {
  user: false,
  modal: false,
  setUser: () => {},
  setModal: () => {},
};

export const Context = createContext<contextProps>(initState);

interface props {
  children: JSX.Element
}

export function ContextProvider({ children }: props) {
  const [user, setUser] = useState(false);
  const [modal, setModal] = useState<boolean>(false);

  return (
    <Context.Provider value={{
      modal,
      setModal,
      user,
      setUser,
    }}
    >
      {children}
    </Context.Provider>
  );
}
