import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/LoginSignUp.css';
import { useDispatch } from 'react-redux';
import { login } from '../components/redux/authSlice';
import { userLogin, userRegister } from './api';

const LoginSignUp = () => {
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });

    const [signupData, setSignupData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLoginChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    const handleSignupChange = (e) => {
        setSignupData({ ...signupData, [e.target.name]: e.target.value });
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        
        userLogin(loginData)
        .then((response) => {
          dispatch(login(loginData.email));
          console.log(response.data);
          localStorage.setItem('Token',response.data.token);
          console.log(loginData);
          navigate('/dashboard');
        })
        // .catch((error) => {
        //     console.error(error.response.data); 
        //     if (error.response.status === 401) {
        //     alert('Invalid username or password');
        //     } else if (error.response.status === 404) {
        //     alert('Username does not exist');
        //     } else {
        //     alert('An error occurred during login');
        //     }
        // });
    };  

    const handleSignupSubmit = (e) => {
        e.preventDefault();

        userRegister(signupData)
        .then((response) => {
          dispatch(login(signupData.name));
          console.log(response.data);

          console.log(signupData);
          navigate('/dashboard');
        })
        // .catch((error) => {
        //     console.error(error.response.data);
        //     if (error.response.status === 400 && error.response.data.includes('Already existing user')) {
        //     alert('Already existing user! Please login.');
        //     } else {
        //     alert('An error occurred during signup');
        //     }
        // });
    };
  
  

  return (
    <>
      <div className="container">
        <div className="container1">
          <input id="register_toggle" type="checkbox" />
          <div className="slider">
            <form className="form" onSubmit={handleLoginSubmit}>
              <span className="title">Login</span>
              <div className="form_control">
                <input
                  required
                  className="input"
                  type="text"
                  name="email"
                  placeholder="email"
                  value={loginData.name}
                  onChange={handleLoginChange}
                />
              </div>
              <div className="form_control">
                <input
                  required
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                />
              </div>
              <button type="submit">Login</button>

              <span className="bottom_text">
                Don't have an account?{' '}
                <label className="swtich" htmlFor="register_toggle">
                  Sign Up
                </label>{' '}
              </span>
            </form>
            <form className="form" onSubmit={handleSignupSubmit}>
              <span className="title">Sign Up</span>
              <div className="form_control">
                <input
                  required
                  className="input"
                  type="text"
                  name="name"
                  placeholder="Username"
                  value={signupData.name}
                  onChange={handleSignupChange}
                />
              </div>
              
              <div className="form_control">
                <input
                  required
                  className="input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={signupData.email}
                  onChange={handleSignupChange}
                />
              </div>
              <div className="form_control">
                <input
                  required
                  className="input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={signupData.password}
                  onChange={handleSignupChange}
                />
              </div>
              <button type="submit">Sign Up</button>
              <span className="bottom_text">
                Already have an account?{' '}
                <label className="swtich" htmlFor="register_toggle">
                  Log In
                </label>{' '}
              </span>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSignUp;
