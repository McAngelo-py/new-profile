import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBell, 
  faEnvelope, 
  faSearch, 
  faBars, 
  faChevronDown,
  faMoon,
  faSignOutAlt,
  faQuestionCircle,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import avatar from '../../assets/avatar.jpg';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showFAQ, setShowFAQ] = useState(false);

  return (
    <nav className="top-nav">
      <div className="nav-left">
      </div>
      <div className="nav-right">
        <button className="nav-btn">
          <FontAwesomeIcon icon={faBell} />
          <span className="notification-dot"></span>
        </button>
        <button className="nav-btn">
          <FontAwesomeIcon icon={faEnvelope} />
        </button>
        <div className="nav-profile" onClick={() => setShowDropdown(!showDropdown)}>
          <img src={avatar} alt="Profile" />
          <span>Sarah</span>
          <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" />
          
          {showDropdown && (
            <div className="profile-dropdown">
              <button className="dropdown-item" onClick={() => setShowFAQ(true)}>
                <FontAwesomeIcon icon={faQuestionCircle} />
                Solo Parent FAQ
              </button>
              <div className="dropdown-divider"></div>
              <a href="/logout" className="logout-option">
                <FontAwesomeIcon icon={faSignOutAlt} />
                Logout
              </a>
            </div>
          )}
        </div>
      </div>

      {showFAQ && (
        <div className="modal-overlay">
          <div className="faq-modal">
            <div className="modal-header">
              <h2>Solo Parent FAQ</h2>
              <button className="close-modal" onClick={() => setShowFAQ(false)}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <div className="modal-content">
              <div className="faq-item">
                <h3>What support services are available?</h3>
                <p>We offer counseling, financial planning, and childcare assistance programs specifically designed for solo parents.</p>
              </div>
              <div className="faq-item">
                <h3>How do I apply for solo parent benefits?</h3>
                <p>Submit your application through our portal with required documentation including proof of solo parent status and income verification.</p>
              </div>
              <div className="faq-item">
                <h3>What documents do I need?</h3>
                <p>Basic requirements include valid ID, proof of residence, children's birth certificates, and custody documentation if applicable.</p>
              </div>
              <div className="faq-item">
                <h3>Are there support groups available?</h3>
                <p>Yes, we host weekly support group meetings both online and in-person. Check the Community Events section for schedules.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;