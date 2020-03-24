import React, {
  createContext,
  useState,
  FunctionComponent,
  ReactNode,
} from 'react';

interface IContextProps {
  user: IUser;
  storeUser: any;
  logout: any;
}

interface IUser {
  token?: string;
}

export const UserContext = createContext({} as IContextProps);

const UserContextProvider: FunctionComponent = props => {
  // console.log(initialData);
  const [user, setUser] = useState({
    token: 'ab0f799312bb6d794c97a70310a8cc35',
  });

  const storeUser = (user: IUser) => {
    document.cookie = 's=ab0f799312bb6d794c97a70310a8cc35;';
    setUser({ token: 'ab0f799312bb6d794c97a70310a8cc35' });
  };

  const logout = () => {
    setUser({ token: 'ab0f799312bb6d794c97a70310a8cc35' });
  };

  return (
    <UserContext.Provider value={{ user, storeUser, logout }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
