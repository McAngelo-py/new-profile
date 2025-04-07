import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUser,
  faFile,
  faCheckCircle,
  faEdit,
  faBell,
  faEye,
  faDownload,
  faCloudUploadAlt
} from '@fortawesome/free-solid-svg-icons';
import './Profile.css';
import avatar from '../../assets/avatar.jpg';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('details');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [uploadProgress, setUploadProgress] = useState({});

  // Add responsive window resize listener
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="profile-container">
      <div className="dashboard-main">
        <div className="profile-header">
          <div className="profile-cover">
            <div className="profile-info">
              <div className="profile-pic-container">
                <img src={avatar} alt="Sarah" className="profile-pic" />
                <button className="edit-profile-pic" aria-label="Edit profile picture">
                  <FontAwesomeIcon icon={faEdit} />
                </button>
              </div>
              <div className="profile-text">
                <h1>{windowWidth <= 480 ? 'Sarah A.' : 'Sarah Anderson'}</h1>
                <p className="user-email">sarah.anderson@email.com</p>
                <div className="profile-tags">
                  <span className="tag verified-tag">
                    <FontAwesomeIcon icon={faCheckCircle} />
                    Verified
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="dashboard-content">
          <div className="content-grid">
            <div className="details-section">
              <div className="tabs">
                <button 
                  className={`tab ${activeTab === 'details' ? 'active' : ''}`}
                  onClick={() => setActiveTab('details')}
                >
                  <FontAwesomeIcon icon={faUser} />
                  <span>{windowWidth > 480 ? 'Details' : ''}</span>
                </button>
                <button 
                  className={`tab ${activeTab === 'documents' ? 'active' : ''}`}
                  onClick={() => setActiveTab('documents')}
                >
                  <FontAwesomeIcon icon={faFile} />
                  <span>{windowWidth > 480 ? 'Documents' : ''}</span>
                </button>
              </div>

              <div className="tab-content">
                {activeTab === 'details' ? (
                  <div className="details-content">
                    <div className="detail-item">
                      <div className="detail-header">
                        <h4>Contact Information</h4>
                        <button className="edit-button" aria-label="Edit contact information">
                          <FontAwesomeIcon icon={faEdit} />
                        </button>
                      </div>
                      <p>Email: sarah.anderson@email.com</p>
                      <p>Phone: (555) 123-4567</p>
                      <p className="address-line">Address: 123 Parent Street, Family Town, ST 12345</p>
                    </div>
                    <div className="detail-item">
                      <div className="detail-header">
                        <h4>Emergency Contacts</h4>
                        <button className="edit-button" aria-label="Edit emergency contacts">
                          <FontAwesomeIcon icon={faEdit} />
                        </button>
                      </div>
                      <p>Mary Johnson (Sister): (555) 234-5678</p>
                      <p>John Anderson (Brother): (555) 345-6789</p>
                    </div>
                    <div className="detail-item">
                      <div className="detail-header">
                        <h4>Preferences</h4>
                        <button className="edit-button" aria-label="Edit preferences">
                          <FontAwesomeIcon icon={faEdit} />
                        </button>
                      </div>
                      <p>Preferred Contact: Email</p>
                      <p>Notification Settings: Enabled</p>
                      <p>Language: English</p>
                    </div>
                  </div>
                ) : (
                  // In the documents section, add this before the documents list:
                  <div className="documents-content">
                    
                      
                      <div className="upload-stats">
                        <div className="upload-progress-container">
                          <div 
                            className="upload-progress-bar" 
                            style={{ width: `${(4/5) * 100}%` }}
                          />
                          <span className="upload-count">4 of 5 Required Documents</span>
                        </div>
                        <span className="upload-status">80% Complete</span>
                      
                    </div>
                    {[
                      {name: "Medical Insurance.pdf", size: "2.4 MB", updated: "2 weeks ago", progress: 100},
                      {name: "Emergency Contact Form.pdf", size: "1.1 MB", updated: "1 month ago", progress: 100},
                      {name: "Work Schedule.pdf", size: "0.8 MB", updated: "3 days ago", progress: 75},
                      {name: "Support Network Contacts.pdf", size: "1.5 MB", updated: "2 months ago", progress: 100}
                    ].map((doc, index) => (
                      <div className="document-item" key={index}>
                        <div className="document-icon">
                          <FontAwesomeIcon icon={faFile} />
                        </div>
                        <div className="document-info">
                          <span className="document-name">{doc.name}</span>
                          <span className="document-meta">
                            PDF • {doc.size} • Updated {doc.updated}
                          </span>
                          
                        </div>
                        <div className="document-actions">
                          <button 
                            className="action-button view-button" 
                            aria-label={`View ${doc.name}`}
                          >
                            <FontAwesomeIcon icon={faEye} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Add this new section before the announcements-section */}
            <div className="children-section">
              <div className="section-header">
                <h2>Children</h2>
                <button className="add-child-button" aria-label="Add child">
                  <FontAwesomeIcon icon={faEdit} />
                </button>
              </div>
              <div className="children-list">
                {[
                  { name: "Emma Anderson", age: 8, grade: "3rd Grade" },
                  { name: "Lucas Anderson", age: 5, grade: "Kindergarten" }
                ].map((child, index) => (
                  <div className="child-card" key={index}>
                    <div className="child-info">
                      <h4>{child.name}</h4>
                      <p>{child.age} years old • {child.grade}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="announcements-section">
              <div className="section-header">
                <h2>Announcements</h2>
                <button className="notification-settings" aria-label="Notification settings">
                  <FontAwesomeIcon icon={faBell} />
                </button>
              </div>
              <div className="announcements-list">
                {[
                  {
                    title: "System Update", 
                    content: "New features coming next week!", 
                    date: "2 days ago",
                    type: "update"
                  },
                  {
                    title: "Holiday Schedule", 
                    content: "Check the updated holiday calendar", 
                    date: "5 days ago",
                    type: "event"
                  },
                  {
                    title: "Community Event", 
                    content: "Join us for the monthly parent meetup", 
                    date: "1 week ago",
                    type: "community"
                  }
                ].map((announcement, index) => (
                  <div className={`announcement-item ${announcement.type}`} key={index}>
                    <div className="announcement-content">
                      <h4>{announcement.title}</h4>
                      <p>{announcement.content}</p>
                    </div>
                    <span className="announcement-date">{announcement.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;