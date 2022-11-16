import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signup } from '../Redux/Auth';
function Signup() {
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);
  const dispatch = useDispatch();
  const { loggedin, user } = useSelector((state) => state.auth);

  const handleLogin = (e) => {
    e.preventDefault();
    const user = {
      username: name,
      password,
    };

    dispatch(
      signup({
        loggedin: true,
        username: user.username,
      })
    );
  };

  return (
    <div className='signup_parent_wrap'>
      <div className='details'>
        <h4> Logged In : {loggedin ? 'true' : 'false'} </h4>
        <h4> UserName : {user.name ? ` ${user.name}` : 'no user'} </h4>
      </div>
      <div className='signup_parent'>
        <div className='form_wrap'>
          <div className='title'>
            <h1>SIGN UP</h1>
          </div>
          <form onSubmit={handleLogin}>
            <h2 style={{ padding: 10 }}>Username</h2>
            <input type='text' name='' id='' onChange={(e) => setName(e.target.value)} />
            <h2>Password</h2>
            <input type='text' name='' id='' onChange={(e) => setPassword(e.target.value)} />

            <button type={'submit'}>
              <span>Submit</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
