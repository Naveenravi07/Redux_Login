import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signup } from '../Redux/Auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';
function Signup() {
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);
  const dispatch = useDispatch();
  const { loggedin, user } = useSelector((state) => state.auth);
  const history = useHistory();
  // const notify = () =>

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

    toast('🦄 Signup Success!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
  };

  return (
    <div className='signup_parent_wrap'>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />

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
          <h4 onClick={()=>history.push('/login')}>Already have an account ?</h4>
        </div>
      </div>
    </div>
  );
}

export default Signup;
