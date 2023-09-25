import React from 'react';
import TopBar from './TopBar';
import Footer from './Footer';

const Terms = () => {
  return (
    <>
      <TopBar />
      <main className="wrap">
  <section className="containert">
    <div className="container__heading">
      <h2 className="terms-heading">Terms & Conditions</h2>
    </div>
    <div className="container__content">
      <p className="terms-paragraph">Last Updated: 23/09/2023</p>
      <p className="terms-paragraph">
        Please read these Terms and Conditions carefully before using the DN
        Project Management Application operated by DN Project Management, Inc.
        By accessing or using the DN Project Management Application, you agree
        to be bound by these Terms. If you do not agree to all these Terms, you
        may not use the Application.
      </p>
      <ol className="terms-list">
        <li className="terms-list-item">Application Overview</li>
        <p className="terms-paragraph">
          The DN Project Management Application is a platform that helps users
          manage and collaborate on various projects. Users may use the
          Application to create, assign, and track tasks, share project updates,
          and communicate with team members.
        </p>
        <li className="terms-list-item">User Accounts</li>
        <p className="terms-paragraph">
          Users must create an account to access certain features of the
          Application. Users are responsible for maintaining the
          confidentiality of their account credentials. Users must provide
          accurate and up-to-date information during registration. Users are
          responsible for all activities that occur under their account.
        </p>
        <li className="terms-list-item">Services</li>
        <p className="terms-paragraph">
          Services offered through the Application may include but are not
          limited to project planning, task management, and collaboration
          tools. The Company does not provide project management services
          directly but provides tools for users to manage their projects.
        </p>
        <li className="terms-list-item">Privacy and Data Security</li>
        <p className="terms-paragraph">
          We are committed to protecting user privacy. Our Privacy Policy
          outlines how we collect, use, and safeguard user data. By using the
          Application, you consent to the practices described in our Privacy
          Policy.
        </p>
        <li className="terms-list-item">User Responsibilities</li>
        <p className="terms-paragraph">
          Users must use the Application responsibly and in accordance with
          applicable laws and regulations. Users must not engage in any
          fraudulent, abusive, or harmful activities on the Application. Users
          must respect the privacy and rights of other users and
          collaborators.
        </p>
        <li className="terms-list-item">Payments and Fees</li>
        <p className="terms-paragraph">
          Users may be required to pay fees for certain premium features or
          services. Payment terms and methods are detailed in the Application's
          Payment Policy.
        </p>
        <li className="terms-list-item">Termination</li>
        <p className="terms-paragraph">
          The Company reserves the right to terminate or suspend user accounts
          at its discretion, with or without notice. Users may terminate their
          accounts at any time by following the Application's account closure
          procedure.
        </p>
        <li className="terms-list-item">Intellectual Property</li>
        <p className="terms-paragraph">
          The Application and its content, including but not limited to text,
          graphics, logos, and images, are protected by intellectual property
          laws. Users may not reproduce, distribute, or create derivative works
          based on the Application without prior written permission.
        </p>
        <li className="terms-list-item">Disclaimer</li>
        <p className="terms-paragraph">
          The Company does not guarantee the success or outcome of projects
          managed through the Application. Users use the Application and
          services at their own risk.
        </p>
        <li className="terms-list-item">Limitation of Liability</li>
        <p className="terms-paragraph">
          The Company shall not be liable for any indirect, incidental,
          special, or consequential damages arising from the use of the
          Application or services.
        </p>
        <li className="terms-list-item">Governing Law</li>
        <p className="terms-paragraph">
          These Terms shall be governed by and construed in accordance with the
          laws of your relevant jurisdiction.
        </p>
        <li className="terms-list-item">Changes to Terms</li>
        <p className="terms-paragraph">
          The Company reserves the right to modify these Terms at any time.
          Updates will be posted on the Application, and continued use of the
          Application constitutes acceptance of the modified Terms.
        </p>
      </ol>
      <p className="terms-paragraph">
        For questions or concerns regarding these Terms, please contact us at
        contact@dnprojectmanagement.com.
      </p>
    </div>
    <div className="containert__nav">
      <p className="ack">
        By using the DN Project Management Application, you acknowledge that you
        have read and understood these Terms and agree to be bound by them.
      </p>
    </div>
  </section>
</main>

      <Footer />
    </>
  );
};

export default Terms;