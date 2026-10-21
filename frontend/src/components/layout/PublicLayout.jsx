import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../app/App.css';

import BrandLogo from '../common/BrandLogo';

export default function PublicLayout({ children }) {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      {/* Header Navigation */}
      <header className="landing-header">
        <div className="container">
          <div className="header-content">
            <div style={{cursor: 'pointer'}} onClick={() => navigate('/')}>
              <BrandLogo />
            </div>
            <nav className="header-nav">
              <a href="/#features" className="nav-link">Features</a>
              <a href="/#benefits" className="nav-link">Benefits</a>
              <button onClick={() => navigate('/about')} className="nav-link">About</button>
              <button onClick={() => navigate('/login')} className="btn-outline">Sign In</button>
              <button onClick={() => navigate('/register')} className="btn-primary">Get Started</button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div style={{minHeight: '60vh', padding: '3rem 0'}}>
        {children}
      </div>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <h4 className="footer-heading">PharmaSense</h4>
              <p className="footer-desc">AI-powered pharmaceutical intelligence and predictive inventory platform connecting buyers with verified suppliers.</p>
            </div>
            <div className="footer-col">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-links">
                <li><a href="/#features">Features</a></li>
                <li><a href="/#benefits">Benefits</a></li>
                <li><button onClick={() => navigate('/about')}>About Us</button></li>
                <li><button onClick={() => navigate('/login')}>Sign In</button></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4 className="footer-heading">Support</h4>
              <ul className="footer-links">
                <li><button onClick={() => navigate('/support/help-center')}>Help Center</button></li>
                <li><button onClick={() => navigate('/support/contact-us')}>Contact Us</button></li>
                <li><button onClick={() => navigate('/support/faq')}>FAQ</button></li>
                <li><button onClick={() => navigate('/support/terms')}>Terms of Service</button></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4 className="footer-heading">Contact</h4>
              <ul className="footer-links">
                <li>support@pharmasense.ai</li>
                <li>+91 1800-XXX-XXXX</li>
                <li>24/7 Customer Support</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} PharmaSense (RCOEM CSE AIML). All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
