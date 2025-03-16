import "../styling/Home.css"

function Home() {
  return (
    <div className="container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="title">LanguageHIIT</h1>
        <p className="tagline">Ditch the endless grammar drills.</p>
        <p className="description">
          LanguageHiit makes learning a language feel like a workout—short, structured, and results-driven.
        </p>
        <button className="get-started-btn">Get started!</button>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="feature-card">
          <div className="feature-icon user-icon">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
              <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0z" />
              <path d="M12 14c-3.866 0-7 1.79-7 4v2h14v-2c0-2.21-3.134-4-7-4z" />
            </svg>
          </div>
          <h2 className="feature-title">Match with a Peer</h2>
          <p className="feature-description">
            Get paired with a learner at your level for engaging, real-time conversations.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon clock-icon">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </div>
          <h2 className="feature-title">10-Minute Guided Chats</h2>
          <p className="feature-description">
            Stay on track with structured prompts designed to make every minute count.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon check-icon">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
          <h2 className="feature-title">Stay Accountable and Improve</h2>
          <p className="feature-description">
            Track progress, receive feedback, and join curated workshops for deeper learning.
          </p>
        </div>
      </section>

      {/* Community Section */}
      <section className="community-section">
        <h2 className="community-title">Join the LanguageHIIT community!</h2>
        <p className="community-description">
          Connect with fellow language learners on our **Discord server**! Get support, join discussion, and stay
          motivated on your journey.
        </p>
        <button className="discord-btn">Join our Discord</button>
      </section>
    </div>
  )
}

export default Home

