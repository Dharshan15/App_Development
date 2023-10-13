import React from 'react';
import  TopBar  from './TopBar';
import Footer from './Footer.js';
import '../css/Faq.css'

const Faq = () => {

  const faqData = [
    {
      question: 'How do I create a new project?',
      answer: 'To create a new project, follow these steps: 1. Log in to your project management system. 2. Go to the dashboard. 3. Click on "Create New Project." 4. Fill in the project details and click "Create."'
    },
    {
      question: 'How can I invite team members to a project?',
      answer: 'To invite team members to a project, go to the project settings page. Click on "Invite Members" and enter their email addresses. They will receive an invitation to join the project.'
    },
    {
      question: 'What is the process for assigning tasks?',
      answer: 'To assign tasks, open the project you are working on. Click on the task you want to assign and select a team member from the dropdown list. Save the assignment, and the team member will be notified.'
    },
    {
      question: 'Can I set project deadlines and milestones?',
      answer: 'Yes, you can set project deadlines and milestones in the project settings. Click on "Add Deadline" or "Add Milestone" and specify the date and details.'
    },
    {
      question: 'How do I track project progress?',
      answer: 'You can track project progress on the project dashboard. It displays task completion, upcoming deadlines, and overall project status.'
    },
  ];

  return (
    <>
    <TopBar/>
    <div className="faq-container">
      <h2>Frequently Asked Questions (Project Management System)</h2>
      <ul className="faq-list">
        {faqData.map((item, index) => (
          <li key={index}>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </li>
        ))}
      </ul>
    </div>
    <Footer/>
    </>
  );
};

export default Faq;