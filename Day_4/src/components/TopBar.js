import React from 'react';
import { connect } from 'react-redux';
import Logo from '../images/logo.png';
import '../css/TopBar.css';

const TopBar = ({ username }) => {

  return (
    <>
      <section className='vs'>
        <nav className='landingNav'>
          <img className="logoLand" src={Logo} alt="Logo" />
          <ul className='landingUl'>
            <li className='LandList'>Home</li>
            <li className='LandList'>Task</li>
            <li className='LandList'>Cost</li>
            <li className='LandList'>Resource</li>
            <li className='LandList'>Risk</li>
            <li className='LandList'>logout</li>
            <li className='LandList'>{username}</li>
          </ul>
        </nav>
      </section>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    username: state.user.username,
  };
};

export default connect(mapStateToProps)(TopBar);
