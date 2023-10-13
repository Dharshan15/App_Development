import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';
import '../css/TopBar.css';

const TopBar = ({ username }) => {

  return (
    <>
      <section className='vs'>
        <nav className='landingNav'>
          <img className="logoLand" src={Logo} alt="Logo" />
          <ul className='landingUl'>
            <Link to='/dashboard'style={{ textDecoration: 'none' }}>
              <li className='LandList'>Dashboard</li>
            </Link>
            <Link to='/members'style={{ textDecoration: 'none' }}>
              <li className='LandList'>Members</li>
            </Link>
          <Link to='/project'style={{ textDecoration: 'none' }}>
              <li className='LandList'>Project</li>
            </Link>
            {/* <Link  to='/cost'style={{ textDecoration: 'none' }}>
              <li className='LandList'>Cost</li>
            </Link> */}
            <Link  to='/'style={{ textDecoration: 'none' }}>
              <li className='LandList'>Logout</li>
            </Link>
            {/* <li className='LandList'>Risk</li> */}
            <li className='LandList1'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
</svg><Link to='/profile' className='username' style={{ textDecoration: 'none' }}>{username}</Link></li>
          </ul>
        </nav>
      </section>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    username: state.auth.name, 
  };
};

export default connect(mapStateToProps)(TopBar);
