import React from 'react';
import '../styling/Team.css';
import syedImage from '../assets/syedImage.png'

function Team() {
  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: 'Roksana Khalid',
      role: 'Founder & CEO',
      image: syedImage,
      linkedin: 'https://linkedin.com',
      github: 'https://github.com'
    },
    {
      id: 2,
      name: 'Muhammad Inaamullah',
      role: 'Founder & CEO',
      image: syedImage,
      linkedin: 'https://linkedin.com',
      github: 'https://github.com'
    },
    {
      id: 3,
      name: 'Syed Shah Hussain Badshah',
      role: 'Founder & CEO',
      image: syedImage,
      linkedin: 'https://linkedin.com',
      github: 'https://github.com'
    },
    {
      id: 4,
      name: 'Ronnie',
      role: 'Founder & CEO',
      image: syedImage,
      linkedin: 'https://linkedin.com',
      github: 'https://github.com'
    },
    {
      id: 5,
      name: 'Yia',
      role: 'Founder & CEO',
      image: syedImage,
      linkedin: 'https://linkedin.com',
      github: 'https://github.com'
    },
    {
      id: 6,
      name: 'Unknown',
      role: 'Founder & CEO',
      image: syedImage,
      linkedin: 'https://linkedin.com',
      github: 'https://github.com'
    }
  ];

  return (
    <div className="team-container">
      <h1 className="team-title">Team behind LanguageHIIT</h1>
      
      <div className="team-grid">
        {teamMembers.map((member) => (
          <div className="team-card" key={member.id}>
            <div className="member-image-container">
              <img 
                src={member.image} 
                alt={`${member.name}`} 
                className="member-image" 
              />
            </div>
            <h2 className="member-name">{member.name}</h2>
            <p className="member-role">{member.role}</p>
            <div className="member-social">
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                <svg className="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href={member.github} target="_blank" rel="noopener noreferrer" className="social-link">
                <svg className="social-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
