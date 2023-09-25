import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addMember, updateMember, deleteMember } from './redux/teamMemberSlice';
import TopBar from './TopBar';
import Footer from './Footer';
import '../css/TeamMembers.css'

const TeamMembers = ({ members, dispatch }) => {
  const [newMember, setNewMember] = useState({ name: '', role: '' });
  const [editingMember, setEditingMember] = useState(null);
  const [isInputVisible, setInputVisible] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  
  useEffect(() => {
    const storedMembers = JSON.parse(localStorage.getItem('teamMembers'));
    if (storedMembers) {
      dispatch(updateMember(storedMembers));
      setNewMember({ name: '', role: '' }); 
    }
  }, [dispatch]);
  

  
  const combinedMembers = members.concat(
    JSON.parse(localStorage.getItem('teamMembers')) || []
  ).filter((member, index, self) => 
    index === self.findIndex((m) => m.id === member.id)
  );
  

  const toggleInputVisibility = () => {
    setInputVisible(!isInputVisible);
    if (!isInputVisible) {
      setNewMember({ name: '', role: '' });
    }
  };

  const handleAddMember = () => {
    if (newMember.name && newMember.role) {
      const member = { id: Date.now(), ...newMember };
      dispatch(addMember(member));
      setNewMember({ name: '', role: '' });
      setInputVisible(false);

      // Update local storage
      const updatedMembers = [...combinedMembers, member];
      localStorage.setItem('teamMembers', JSON.stringify(updatedMembers));
    }
  };

  const handleUpdateMember = () => {
    if (editingMember !== null && newMember.name && newMember.role) {
      const updatedMember = { id: editingMember, ...newMember };
      dispatch(updateMember(updatedMember));
      setEditingMember(null);
      setNewMember({ name: '', role: '' });
      setInputVisible(false);

      // Update local storage
      const updatedMembers = combinedMembers.map((member) =>
        member.id === editingMember ? updatedMember : member
      );
      localStorage.setItem('teamMembers', JSON.stringify(updatedMembers));
    }
  };

  const handleDeleteMember = (memberId) => {
    dispatch(deleteMember(memberId));

    // Update local storage
    const updatedMembers = combinedMembers.filter((member) => member.id !== memberId);
    localStorage.setItem('teamMembers', JSON.stringify(updatedMembers));
  };

  const handleEdit = (memberId) => {
    const memberToEdit = combinedMembers.find((member) => member.id === memberId);
    if (memberToEdit) {
      setEditingMember(memberId);
      setNewMember({ name: memberToEdit.name, role: memberToEdit.role });
      setInputVisible(true);
    }
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
            <div><Link to="/project" style={{ textDecoration: 'none',  listStyleType: 'none' }}>Tasks</Link></div>
            <div><Link to="/members" style={{ textDecoration: 'none',  listStyleType: 'none' }}>Members</Link></div>
          </ul>
        </div>
      )}
      <div>
      <div className='team-header'>Team Members</div>
      <svg onClick={toggleInputVisibility} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff3d3d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-square"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
      {isInputVisible && (
        <div>
          <h2>{editingMember ? 'Edit Member' : 'Add Member'}</h2>
          <input
            type="text"
            placeholder="Name"
            value={newMember.name}
            onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Role"
            value={newMember.role}
            onChange={(e) => setNewMember({ ...newMember, role: e.target.value })}
          />
          {editingMember ? (
            <button onClick={handleUpdateMember}>Update Member</button>
          ) : (
            <button onClick={handleAddMember}>Add Member</button>
          )}
        </div>
      )}
      <ul className='member-ul'>
        {combinedMembers.map((member) => (
          <li className='member-li' key={member.id}>
            <div className='member-individual'>
            <div>Name: {member.name}</div>  <div>Role: {member.role}</div>
            <svg onClick={() => handleEdit(member.id)} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ed3f3f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>
            <svg onClick={() => handleDeleteMember(member.id)} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ff3d3d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </div>
    <Footer/>

    
    </>
  );
};

const mapStateToProps = (state) => ({
  members: state.teamMembers,
});

export default connect(mapStateToProps)(TeamMembers);
