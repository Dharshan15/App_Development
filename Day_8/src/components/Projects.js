import React, { useState } from 'react';
import '../css/Projects.css'
import { Link } from 'react-router-dom';
import TopBar from './TopBar';
import Task from './Task';
import InProgress from './InProgress';
import Done from './Done';
import Footer from './Footer';

export const Projects = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
    <TopBar/>
    <div className={`dashboard-container ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      
      <div className="sidebar-toggle" onClick={toggleSidebar}>
        {isSidebarOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#da4949" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#da4949" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        )}
      </div>

      {isSidebarOpen && (
        <div className="sidebar sidebar-right">
          <div className="logo">Projects</div>
          <ul>
            <div className='sideList'><Link to="/project"  style={{ textDecoration: 'none',  listStyleType: 'none' }}>Tasks</Link></div>
            <div className='sideList'><Link to="/members"  style={{ textDecoration: 'none',  listStyleType: 'none'  }}>Members</Link></div>
          </ul>
        </div>
      )}
    <Task/>
    <InProgress/>
    <Done/>
    </div>
    <Footer/>

    </>
  )
}

export default Projects;