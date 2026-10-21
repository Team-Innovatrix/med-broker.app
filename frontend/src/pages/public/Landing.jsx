import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../app/App.css';
import BrandLogo from '../../components/common/BrandLogo';
import {
  ArrowRight, BadgeCheck, Zap, Star, Headphones,
  ShieldCheck, Layers, MessageCircle, Users, Wallet,
  Check, Store, TrendingUp, Sparkles, Building2, Calendar, Package
} from 'lucide-react';

export default function Landing() {
  const navigate = useNavigate();

  const sampleMedicines = [
    {
      id: 'med-1',
      name: 'Paracetamol 650 mg',
      generic: 'Analgesic & Antipyretic (Dolo / Calpol Formulation)',
      vendor: 'Cipla Healthcare Ltd.',
      batch: 'CP-8842',
      expiry: '12/2027',
      packaging: '10 × 15 Tablets (Blister)',
      wholesalePrice: '₹18.50',
      mrp: '₹32.00',
      discount: '42% OFF',
      stock: '15,400 strips in stock',
      forecastBadge: 'High Surge (+34%)',
      forecastType: 'high-surge',
      forecastNote: 'AI Sequence Forecast: Seasonal viral infection spike expected across Western & Central India.'
    },
    {
      id: 'med-2',
      name: 'Amoxicillin & Clavulanate 625 mg',
      generic: 'Amoxicillin 500mg + Potassium Clavulanate 125mg',
      vendor: 'Sun Pharma Laboratories',
      batch: 'SP-7193',
      expiry: '09/2027',
      packaging: '10 × 10 Tablets (Alu-Alu)',
      wholesalePrice: '₹142.00',
      mrp: '₹210.00',
      discount: '32% OFF',
      stock: '8,200 strips in stock',
      forecastBadge: 'Stable Peak (98.2% Confidence)',
      forecastType: 'stable',
      forecastNote: 'AI Trend Analysis: Consistent demand across tertiary hospitals and urban clinics.'
    },
    {
      id: 'med-3',
      name: 'Azithromycin 500 mg',
      generic: 'Azithromycin IP 500mg (Broad-Spectrum Macrolide)',
      vendor: "Dr. Reddy's Laboratories",
      batch: 'DR-4029',
      expiry: '11/2027',
      packaging: '5 × 3 Tablets (Blister)',
      wholesalePrice: '₹88.50',
      mrp: '₹135.00',
      discount: '34% OFF',
      stock: '12,850 strips in stock',
      forecastBadge: 'Seasonal Uptrend (+18%)',
      forecastType: 'uptrend',
      forecastNote: 'AI Predictive Model: Weather transition trigger driving distributor bulk procurement.'
    }
  ];

  return (
    <div className="landing-page">
      {/* Header Navigation */}
      <header className="landing-header">
        <div className="container">
          <div className="header-content">
            <button
              type="button"
              className="topnav-logo landing-logo"
              onClick={() => navigate('/')}
              aria-label="PharmaSense home"
              style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
            >
              <BrandLogo size={24} showBadge={true} />
            </button>
            <nav className="header-nav">
              <a href="#showcase" className="nav-link">Live Medicines</a>
              <a href="#features" className="nav-link">Features</a>
              <a href="#benefits" className="nav-link">Benefits</a>
              <button onClick={() => navigate('/about')} className="nav-link">About</button>
              <button onClick={() => navigate('/login')} className="btn-outline">Sign In</button>
              <button onClick={() => navigate('/register')} className="btn-primary">Get Started</button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                AI-Powered Pharmaceutical
                <span className="highlight"> Intelligence & Inventory</span>
              </h1>
              <p className="hero-subtitle">
                Connect with verified Indian vendors, access transparent wholesale medicine catalogs, and eliminate stockouts with PharmaSense deep learning demand forecasting.
              </p>
              <div className="hero-buttons">
                <button onClick={() => navigate('/register')} className="btn-hero-primary">
                  Start Your Journey
                  <ArrowRight size={18} />
                </button>
                <button onClick={() => navigate('/login')} className="btn-hero-secondary">
                  Sign In
                </button>
              </div>
              <div className="hero-stats">
                <div className="stat-item">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Verified Vendors</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">10K+</div>
                  <div className="stat-label">Active Users</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">50K+</div>
                  <div className="stat-label">Products</div>
                </div>
              </div>
            </div>
            <div className="hero-image">
              <div className="floating-card card-1">
                <div className="card-icon blue">
                  <BadgeCheck size={22} />
                </div>
                <div className="card-text">
                  <div className="card-title">Verified</div>
                  <div className="card-desc">100% CDSCO Compliant</div>
                </div>
              </div>
              <div className="floating-card card-2">
                <div className="card-icon cyan">
                  <Zap size={22} />
                </div>
                <div className="card-text">
                  <div className="card-title">Fast Delivery</div>
                  <div className="card-desc">24-48 Hours Express</div>
                </div>
              </div>
              <div className="floating-card card-3">
                <div className="card-icon purple">
                  <Star size={22} />
                </div>
                <div className="card-text">
                  <div className="card-title">Best Prices</div>
                  <div className="card-desc">Tiered Wholesale Rates</div>
                </div>
              </div>
              <div className="floating-card card-4">
                <div className="card-icon orange">
                  <Headphones size={22} />
                </div>
                <div className="card-text">
                  <div className="card-title">24/7 Support</div>
                  <div className="card-desc">Always Available</div>
                </div>
              </div>
              <div className="floating-card card-5">
                <div className="card-icon indigo">
                  <ShieldCheck size={22} />
                </div>
                <div className="card-text">
                  <div className="card-title">AI Forecasting</div>
                  <div className="card-desc">Zero Stockouts</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Medicine Showcase Section */}
      <section id="showcase" className="medicines-showcase-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Wholesale Medicine Catalog Preview</h2>
            <p className="section-subtitle">Real-time inventory listings with AI-predicted seasonal demand patterns</p>
          </div>
          <div className="medicine-showcase-grid">
            {sampleMedicines.map((med) => (
              <div key={med.id} className="medicine-showcase-card">
                <div>
                  <div className="medicine-card-badge-row">
                    <span className="badge-verified">
                      <BadgeCheck size={14} /> Verified Vendor
                    </span>
                    <span className={`badge-ai-forecast ${med.forecastType === 'high-surge' ? 'high-surge' : ''}`}>
                      <Sparkles size={13} /> {med.forecastBadge}
                    </span>
                  </div>

                  <h3 className="medicine-card-name">{med.name}</h3>
                  <p className="medicine-card-generic">{med.generic}</p>

                  <div className="medicine-card-meta">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Building2 size={14} color="#64748b" />
                      <span><strong>Manufacturer:</strong> {med.vendor}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span><strong>Batch:</strong> {med.batch}</span>
                      <span><strong>Exp:</strong> {med.expiry}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Package size={14} color="#64748b" />
                      <span>{med.packaging} &bull; <span style={{ color: '#0284c7', fontWeight: 600 }}>{med.stock}</span></span>
                    </div>
                  </div>

                  <div className="medicine-card-price-row">
                    <span className="medicine-wholesale-price">{med.wholesalePrice}</span>
                    <span className="medicine-mrp-price">{med.mrp}</span>
                    <span className="medicine-unit-label">per strip</span>
                    <span style={{ marginLeft: 'auto', color: '#16a34a', fontWeight: 700, fontSize: '0.8rem' }}>
                      {med.discount}
                    </span>
                  </div>

                  <div className="medicine-ai-prediction-box">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontWeight: 700, marginBottom: '0.2rem' }}>
                      <TrendingUp size={14} color="#2563eb" /> AI Demand Intelligence
                    </div>
                    {med.forecastNote}
                  </div>
                </div>

                <button
                  type="button"
                  className="btn-card-action"
                  onClick={() => navigate('/login')}
                >
                  Order Wholesale
                  <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose PharmaSense?</h2>
            <p className="section-subtitle">AI-first architecture built for pharmaceutical wholesale intelligence</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon blue-gradient">
                <BadgeCheck size={28} />
              </div>
              <h3 className="feature-title">Verified Suppliers</h3>
              <p className="feature-desc">Integrated compliance checking with GSTIN and Drug License verification before listing.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon cyan-gradient">
                <Layers size={28} />
              </div>
              <h3 className="feature-title">Wholesale Trade</h3>
              <p className="feature-desc">Transparent tiered pricing for bulk medicine orders with real-time currency conversion.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon indigo-gradient">
                <Zap size={28} />
              </div>
              <h3 className="feature-title">Demand Prediction</h3>
              <p className="feature-desc">AI evaluates seasonality & 6-month historical orders to predict bulk demand and avoid stockouts.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon orange-gradient">
                <MessageCircle size={28} />
              </div>
              <h3 className="feature-title">AI Health Assistant</h3>
              <p className="feature-desc">NLP diagnosis model assists buyers with symptom-based medication guidance.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon purple-gradient">
                <Users size={28} />
              </div>
              <h3 className="feature-title">Dual RBAC Consoles</h3>
              <p className="feature-desc">Tailored, high-productivity dashboards for Buyers (Customers) and Suppliers (Vendors).</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon pink-gradient">
                <Wallet size={28} />
              </div>
              <h3 className="feature-title">Secure Commerce Gate</h3>
              <p className="feature-desc">Encrypted transactions, automated audit logs, and digital dispatch tracking.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="benefits-section">
        <div className="container">
          <div className="benefits-grid">
            <div className="benefit-block customer-block">
              <div className="benefit-header">
                <div className="benefit-icon">
                  <Users size={32} />
                </div>
                <h3>For Customers & Pharmacies</h3>
              </div>
              <ul className="benefit-list">
                <li>
                  <Check size={18} />
                  Access to verified medicines directly from authorized manufacturers
                </li>
                <li>
                  <Check size={18} />
                  Competitive pricing for retail and wholesale tiers
                </li>
                <li>
                  <Check size={18} />
                  24/7 customer support and AI symptom assistance
                </li>
                <li>
                  <Check size={18} />
                  Transparent delivery and shipment tracking
                </li>
                <li>
                  <Check size={18} />
                  Digital GST invoices and batch test certificates
                </li>
              </ul>
              <button onClick={() => navigate('/register')} className="benefit-btn customer-btn">
                Register as Customer
              </button>
            </div>

            <div className="benefit-block vendor-block">
              <div className="benefit-header">
                <div className="benefit-icon">
                  <Store size={32} />
                </div>
                <h3>For Suppliers & Vendors</h3>
              </div>
              <ul className="benefit-list">
                <li>
                  <Check size={18} />
                  Reach 10,000+ active pharmacies and healthcare buyers
                </li>
                <li>
                  <Check size={18} />
                  AI-driven demand forecasting to prevent stockouts
                </li>
                <li>
                  <Check size={18} />
                  Automated order processing and dispatch workflows
                </li>
                <li>
                  <Check size={18} />
                  Seasonal trend analytics and reorder triggers
                </li>
                <li>
                  <Check size={18} />
                  Direct payout reconciliation and secure settlements
                </li>
              </ul>
              <button onClick={() => navigate('/register')} className="benefit-btn vendor-btn">
                Register as Vendor
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="trust-section">
        <div className="container">
          <div className="trust-content">
            <div className="trust-text">
              <h2 className="trust-title">Trusted by Healthcare Professionals</h2>
              <p className="trust-desc">
                PharmaSense is the preferred platform for pharmacies, hospitals, distributors, and healthcare providers across the country. Our commitment to quality, transparency, and AI-driven predictive logistics powers the future of medicine supply chains.
              </p>
              <div className="trust-features">
                <div className="trust-feature">
                  <ShieldCheck size={20} />
                  <span>100% CDSCO Verified Products</span>
                </div>
                <div className="trust-feature">
                  <ShieldCheck size={20} />
                  <span>Secure Escrow & Direct Bank Transfers</span>
                </div>
                <div className="trust-feature">
                  <ShieldCheck size={20} />
                  <span>Licensed Manufacturers & Distributors Only</span>
                </div>
              </div>
            </div>
            <div className="trust-stats-grid">
              <div className="trust-stat">
                <div className="trust-stat-number">99.8%</div>
                <div className="trust-stat-label">Order Fulfillment Accuracy</div>
              </div>
              <div className="trust-stat">
                <div className="trust-stat-number">24/7</div>
                <div className="trust-stat-label">Support & AI Forecasting</div>
              </div>
              <div className="trust-stat">
                <div className="trust-stat-number">2M+</div>
                <div className="trust-stat-label">Medicine Units Distributed</div>
              </div>
              <div className="trust-stat">
                <div className="trust-stat-number">150+</div>
                <div className="trust-stat-label">Cities Connected Across India</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Experience Modern Pharma Trade?</h2>
            <p className="cta-subtitle">Join pharmacies and verified suppliers on India's premier AI pharmaceutical intelligence platform</p>
            <button onClick={() => navigate('/register')} className="cta-button">
              Create Your Account
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <div style={{ marginBottom: '1rem' }}>
                <BrandLogo size={22} showBadge={true} variant="light" />
              </div>
              <p className="footer-desc" style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.6 }}>
                AI-powered pharmaceutical intelligence and predictive inventory platform connecting buyers with verified suppliers.
              </p>
            </div>
            <div className="footer-col">
              <h4 className="footer-heading">Platform</h4>
              <ul className="footer-links">
                <li><a href="#showcase">Medicine Catalog</a></li>
                <li><a href="#features">AI Features</a></li>
                <li><a href="#benefits">For Vendors</a></li>
                <li><button onClick={() => navigate('/about')} style={{ background: 'none', border: 'none', color: 'inherit', padding: 0, cursor: 'pointer', font: 'inherit' }}>About Us</button></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4 className="footer-heading">Portals</h4>
              <ul className="footer-links">
                <li><button onClick={() => navigate('/login')} style={{ background: 'none', border: 'none', color: 'inherit', padding: 0, cursor: 'pointer', font: 'inherit' }}>Customer Portal</button></li>
                <li><button onClick={() => navigate('/login')} style={{ background: 'none', border: 'none', color: 'inherit', padding: 0, cursor: 'pointer', font: 'inherit' }}>Vendor Portal</button></li>
                <li><button onClick={() => navigate('/vendor/demand-forecasting')} style={{ background: 'none', border: 'none', color: 'inherit', padding: 0, cursor: 'pointer', font: 'inherit' }}>AI Forecasting</button></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4 className="footer-heading">Institution</h4>
              <ul className="footer-links" style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                <li>Dept. of CSE (AIML)</li>
                <li>RCOEM, Nagpur</li>
                <li>Session 2026-27</li>
                <li>support@pharmasense.ai</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 PharmaSense (RCOEM CSE AIML). All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
