import { UserContext } from '../contexts/userContext';
import { useContext } from 'react';

const Login = () => {
  const { user, storeUser } = useContext(UserContext);
  
  return (
    <div>
      Login
      <input type="text" name="s" />
      <button onClick={() => storeUser('ab0f799312bb6d794c97a70310a8cc35')}>login</button>
    </div>
  )
}

export default Login;