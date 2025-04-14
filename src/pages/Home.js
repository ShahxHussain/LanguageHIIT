import React from 'react';
import "../styling/Home.css";
import { Users, Clock, CheckCircle, Star, MessageCircle } from 'lucide-react';

function Home() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      language: "Spanish",
      text: "LanguageHIIT's structured approach helped me become conversational in Spanish within just 3 months!",
      rating: 5,
      avatar: "/images/avatars/sarah.jpg"
    },
    {
      name: "Michael Chen",
      language: "French",
      text: "The 10-minute practice sessions fit perfectly into my busy schedule. It's amazing how much progress I've made.",
      rating: 5,
      avatar: "/images/avatars/michael.jpg"
    },
    {
      name: "Emma Wilson",
      language: "Japanese",
      text: "The community aspect keeps me motivated. I love practicing with other learners at my level.",
      rating: 5,
      avatar: "/images/avatars/emma.jpg"
    }
  ];

  return (
    <div className="home-container">
      {/* Hero Section with Video Background */}
      <section className="hero-section">
        <video autoPlay loop muted className="hero-video">
          <source src="/videos/language-learning.mp4" type="video/mp4" />
        </video>
        <div className="hero-content">
          <h1 className="hero-title">LanguageHIIT</h1>
          <p className="hero-tagline">Ditch the endless grammar drills.</p>
          <p className="hero-description">
            LanguageHiit makes learning a language feel like a workout—short, structured, and results-driven.
          </p>
          <button className="hero-button">Get started!</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="section-title">Why Choose LanguageHIIT?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <Users size={40} />
            </div>
            <h3 className="feature-title">Match with a Peer</h3>
            <p className="feature-description">
              Get paired with a learner at your level for engaging, real-time conversations.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Clock size={40} />
            </div>
            <h3 className="feature-title">10-Minute Guided Chats</h3>
            <p className="feature-description">
              Stay on track with structured prompts designed to make every minute count.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <CheckCircle size={40} />
            </div>
            <h3 className="feature-title">Stay Accountable and Improve</h3>
            <p className="feature-description">
              Track progress, receive feedback, and join curated workshops for deeper learning.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2 className="section-title">What Our Users Say</h2>
        <p className="section-subtitle">Join thousands of satisfied language learners</p>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <div className="testimonial-header">
                <img src={testimonial.avatar} alt={testimonial.name} className="testimonial-avatar" />
                <div className="testimonial-info">
                  <h3 className="testimonial-name">{testimonial.name}</h3>
                  <p className="testimonial-language">Learning {testimonial.language}</p>
                </div>
              </div>
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#FFD700" color="#FFD700" />
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* Community Section */}
      <section className="community-section">
        <div className="community-content">
          <h2 className="community-title">Join the LanguageHIIT community!</h2>
          <p className="community-description">
            Connect with fellow language learners on our Discord server! Get support, join discussions, and stay
            motivated on your journey.
          </p>
          <button className="discord-button">
            <img src="/images/discord-logo.png" alt="Discord" className="discord-logo" />
            Join our Discord
          </button>
        </div>
      </section>

      {/* Floating Discord Button */}
      <a 
        href="https://discord.gg/languagehiit" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="floating-discord-button"
      >
        <MessageCircle size={24} />
        <span>Join Discord</span>
      </a>
    </div>
  );
}

export default Home;

