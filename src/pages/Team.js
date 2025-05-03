import React from 'react';
import '../styling/Team.css';
import { Github, Linkedin, Mail } from 'lucide-react';

import syed from '../assets/Syed.png';
import roksana from '../assets/Roksana.jpg';
import Ronnie from '../assets/Ronnie.jpg';
import inaam from '../assets/Inaam.jpeg';
import yia from '../assets/yia.png'
import claire from '../assets/claire.jpg'


// Create images object
const teamImages = {

  roksana: roksana,
  ronnie: Ronnie,
  syed: syed,
  inaam: inaam,
  yia: yia,
  claire: claire,

};

function Team() {
  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: 'Roksana Khalid',
      role: 'Founder & CEO',
      image: teamImages.roksana,
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      email: 'roksana@languagehiit.com'
    },
    {
      id: 2,
      name: 'Muhammad Inaamullah',
      role: 'Founder & CEO',
      image: teamImages.inaam,
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      email: 'inaam@languagehiit.com'
    },
    {
      id: 3,
      name: 'Syed Shah Hussain Badshah',
      role: 'Founder & CEO',
      image: teamImages.syed,
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      email: 'shahhussain@languagehiit.com'
    },
    {
      id: 4,
      name: 'Ronnie Osei',
      role: 'Project Manager',
      image: teamImages.ronnie,
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      email: 'ronnie@languagehiit.com'
    },
    {
      id: 5,
      name: 'Yia',
      role: 'Founder & CEO',
      image: teamImages.yia,
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      email: 'yia@languagehiit.com'
    },
    {
      id: 6,
      name: 'Claire Brainer',
      role: 'Founder & CEO',
      image: teamImages.claire,
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
      email: 'unknown@languagehiit.com'
    }
  ];

  return (
    <div className="team-container">
      <div className="team-header">
        <h1 className="team-title">Meet Our Team</h1>
        <p className="team-subtitle">The passionate individuals behind LanguageHIIT</p>
      </div>
      
      <div className="team-grid">
        {teamMembers.map((member) => (
          <div className="team-card" key={member.id}>
            <div className="member-image-container">
              <img 
                src={member.image} 
                alt={member.name} 
                className="member-image" 
              />
              <div className="member-overlay">
                <div className="social-links">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                    <Linkedin size={24} />
                  </a>
                  <a href={member.github} target="_blank" rel="noopener noreferrer" className="social-link">
                    <Github size={24} />
                  </a>
                  <a href={`mailto:${member.email}`} className="social-link">
                    <Mail size={24} />
                  </a>
                </div>
              </div>
            </div>
            <div className="member-info">
              <h2 className="member-name">{member.name}</h2>
              <p className="member-role">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
