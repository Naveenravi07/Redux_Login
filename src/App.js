import logo from './logo.svg';
import Signup from './Signup/Signup';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './Login/Login';

function App() {
  return (

    <div className="App">
      <BrowserRouter>
      <Route path='/' exact >
      <Signup />
      </Route>
        <Route path='/login'>
          <Login />
        </Route>
      </BrowserRouter>
    </div >
  );
}

export default App;
