import React from 'react';
import '../css/LoginSignUp.css';

const LoginSignUp = () => {

  

  return (
    <>
      <div className="container">
        <div className="container1">
          <input id="register_toggle" type="checkbox" />
          <div className="slider">
            <form className="form" >
              <span className="title">Login</span>
              <div className="form_control">
                <input
                  required
                  className="input"
                  type="text"
                  name="username"
                  placeholder="Username"
                />
              </div>
              <div className="form_control">
                <input
                  required
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
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
            <form className="form" >
              <span className="title">Sign Up</span>
              <div className="form_control">
                <input
                  required
                  className="input"
                  type="text"
                  name="username"
                  placeholder="Username"
                />
              </div>
              <div className="form_control">
                <input
                  required
                  className="input"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div className="form_control">
                <input
                  required
                  className="input"
                  type="password"
                  name="password"
                  placeholder="Password"
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
