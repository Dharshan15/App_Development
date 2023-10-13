import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TopBar from './TopBar';
import Footer from './Footer';
import '../css/TeamMembers.css';

const TeamMembers = () => {
  const [newMember, setNewMember] = useState({ name: '', role: '' });
  const [editingMember, setEditingMember] = useState(null);
  const [isInputVisible, setInputVisible] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [teams, setTeams] = useState([]); // Array to store teams with members
  const [newTeamName, setNewTeamName] = useState(''); // Store the new team name
  const [isCreatingTeam, setIsCreatingTeam] = useState(false); // To control team creation input
  const [currentTeamIndex, setCurrentTeamIndex] = useState(null); // Track the currently edited team

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleInputVisibility = (teamIndex) => {
    if (currentTeamIndex === teamIndex) {
      // Close the input fields
      setInputVisible(false);
      setCurrentTeamIndex(null);
    } else {
      // Open the input fields for the selected team
      setInputVisible(true);
      setCurrentTeamIndex(teamIndex);
    }
    setNewMember({ name: '', role: '' }); // Reset member input fields
    setIsCreatingTeam(false); // Close team creation input
  };

  const createNewTeam = () => {
    if (newTeamName.trim() !== '') {
      setTeams((prevTeams) => [
        ...prevTeams,
        { name: newTeamName, members: [] }
      ]);
      setNewTeamName('');
      setIsCreatingTeam(false);
    }
  };

  const handleAddMember = (teamIndex) => {
    if (newMember.name && newMember.role) {
      const member = { id: Date.now(), ...newMember };
      const updatedTeams = [...teams];
      updatedTeams[teamIndex].members.push(member);
      setTeams(updatedTeams);
      setNewMember({ name: '', role: '' });
      setInputVisible(false);
    }
  };

  const handleUpdateMember = (teamIndex, memberId) => {
    if (editingMember !== null && newMember.name && newMember.role) {
      const updatedMember = { id: editingMember, ...newMember };
      const updatedTeams = [...teams];
      const team = updatedTeams[teamIndex];
      team.members = team.members.map((member) =>
        member.id === editingMember ? updatedMember : member
      );
      setTeams(updatedTeams);
      setEditingMember(null);
      setNewMember({ name: '', role: '' });
      setInputVisible(false);
    }
  };

  const handleDeleteMember = (teamIndex, memberId) => {
    const updatedTeams = [...teams];
    const team = updatedTeams[teamIndex];
    team.members = team.members.filter((member) => member.id !== memberId);
    setTeams(updatedTeams);
  };

  const handleEdit = (teamIndex, memberId) => {
    const team = teams[teamIndex];
    const memberToEdit = team.members.find((member) => member.id === memberId);
    if (memberToEdit) {
      setEditingMember(memberId);
      setNewMember({ name: memberToEdit.name, role: memberToEdit.role });
      setInputVisible(true);
      setCurrentTeamIndex(teamIndex);
    }
  };

  return (
    <>
      <TopBar />
      <div className={`dashboard-container ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <div className="sidebar-toggle" onClick={toggleSidebar}>
          {/* Sidebar toggle button */}
        </div>
        {isSidebarOpen && (
          <div className="sidebar sidebar-right">
            <div className="logo">Projects</div>
            <ul>
              <div>
                <Link to="/project" style={{ textDecoration: 'none', listStyleType: 'none' }}>
                  Tasks
                </Link>
              </div>
              <div>
                <Link to="/members" style={{ textDecoration: 'none', listStyleType: 'none' }}>
                  Members
                </Link>
              </div>
            </ul>
          </div>
        )}
        <div>
          <div className="team-header">Teams</div>
          <div className="team-input">
            {isCreatingTeam ? (
              <div>
                <input
                  type="text"
                  placeholder="New Team Name"
                  value={newTeamName}
                  onChange={(e) => setNewTeamName(e.target.value)}
                />
                <button onClick={createNewTeam}>Create Team</button>
              </div>
            ) : (
              <button onClick={() => setIsCreatingTeam(true)}>+ Add Team</button>
            )}
          </div>
          {teams.map((team, teamIndex) => (
            <div key={teamIndex} className="team">
              <div className="team-name">{team.name}</div>
              <svg
                onClick={() => toggleInputVisibility(teamIndex)}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ff3d3d"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="M8 12h8" />
                <path d="M12 8v8" />
              </svg>
              {isInputVisible && currentTeamIndex === teamIndex && (
                <div>
                  <h2>{editingMember ? 'Edit Member' : 'Add Member'}</h2>
                  <input
                    type="text"
                    placeholder="Name"
                    value={newMember.name}
                    className="Task-inputBox"
                    onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
                  />
                  <input
                    type="text"
                    placeholder="Role"
                    value={newMember.role}
                    className="Task-inputBox"
                    onChange={(e) => setNewMember({ ...newMember, role: e.target.value })}
                  />
                  {editingMember !== null ? (
                    <button onClick={() => handleUpdateMember(teamIndex)}>Update Member</button>
                  ) : (
                    <button onClick={() => handleAddMember(teamIndex)}>Add Member</button>
                  )}
                </div>
              )}
              <ul className="member-ul">
                {team.members.map((member) => (
                  <li className="member-li" key={member.id}>
                    <div className="member-individual">
                      <div>Name: {member.name}</div> <div>Role: {member.role}</div>
                      <svg
                        onClick={() => handleEdit(teamIndex, member.id)}
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#ed3f3f"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                        <path d="m15 5 4 4" />
                      </svg>
                      <svg
                        onClick={() => handleDeleteMember(teamIndex, member.id)}
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#ff3d3d"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M3 6h18" />
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                        <line x1="10" x2="10" y1="11" y2="17" />
                        <line x1="14" x2="14" y1="11" y2="17" />
                      </svg>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TeamMembers;
