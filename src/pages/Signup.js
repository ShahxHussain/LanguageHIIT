import { useState } from "react"
import "../styling/Signup.css"

function Signup() {
  const [email, setEmail] = useState("")

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle email signup logic here
    console.log("Signing up with email:", email)
  }

  const handleGoogleSignup = () => {
    // Handle Google signup logic here
    console.log("Signing up with Google")
  }

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h1 className="app-name">Signup - LanguageHIIT</h1>

        <div className="signup-form-container">
          <h2 className="signup-title">Create an account</h2>
          <p className="signup-subtitle">Enter your email to sign up for this app</p>

          <form onSubmit={handleSubmit} className="signup-form">
            <input
              type="email"
              className="email-input"
              placeholder="email@domain.com"
              value={email}
              onChange={handleEmailChange}
              required
            />

            <button type="submit" className="email-signup-btn">
              Sign up with email
            </button>
          </form>

          <div className="divider">
            <span>or continue with</span>
          </div>

          <button className="google-signup-btn" onClick={handleGoogleSignup}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="Google logo"
              className="google-icon"
            />
            Google
          </button>

          <p className="terms-text">
            By clicking continue, you agree to our{" "}
            <a href="/terms" className="terms-link">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" className="terms-link">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Signup

