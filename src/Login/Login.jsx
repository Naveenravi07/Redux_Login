import React, { useState, useEffect } from 'react';
import Auth from '../Redux/Auth';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const history = useHistory();
  const [name, setName] = useState(null);
  const [password, setpaword] = useState(null);
  const [lock,setLock]=useState(false)
  const value = useSelector((state) => state.auth);
  useEffect(() => {
    if (value.loggedin) {
        setLock(true)
      toast('🦄 You Are Already Logged In You Are Being Redirected ', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: 'dark',
      });
    }
    setTimeout(() => {
      if (value.loggedin) {
        history.push('/');
      }
    }, 2000);
  }, []);
  const handleLogin = () => {};
  return (
    <div>
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
      <div className='login_parent'>
        <div className='form_wrap'>
          <div className='title'>
            <h1>LOGIN</h1>
          </div>
          <form onSubmit={handleLogin}>
            <h2 style={{ padding: 10 }}>Username</h2>
            <input type='text' disabled={value.loggedin} onChange={(e) => setName(e.target.value)} />
            <h2>Password</h2>
            <input type='text' disabled={value.loggedin}  onChange={(e) => setpaword(e.target.value)} />

            <button type={'submit'}>
              <span>Submit</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
