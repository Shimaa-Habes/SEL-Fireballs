import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Package, Shield, Truck } from 'lucide-react';

const Home = () => {
  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div className="container">
          <h1 style={styles.heroTitle}>Welcome to E-Commerce</h1>
          <p style={styles.heroSubtitle}>
            Discover amazing products at unbeatable prices
          </p>
          <Link to="/products" className="btn btn-primary" style={styles.heroBtn}>
            Shop Now
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section style={styles.features}>
        <div className="container">
          <h2 style={styles.sectionTitle}>Why Choose Us?</h2>
          <div style={styles.featuresGrid}>
            <div style={styles.featureCard}>
              <ShoppingBag size={40} color="#4f46e5" />
              <h3 style={styles.featureTitle}>Wide Selection</h3>
              <p style={styles.featureText}>
                Browse thousands of products across multiple categories
              </p>
            </div>

            <div style={styles.featureCard}>
              <Package size={40} color="#4f46e5" />
              <h3 style={styles.featureTitle}>Quality Products</h3>
              <p style={styles.featureText}>
                All products are carefully selected for quality
              </p>
            </div>

            <div style={styles.featureCard}>
              <Truck size={40} color="#4f46e5" />
              <h3 style={styles.featureTitle}>Fast Delivery</h3>
              <p style={styles.featureText}>
                Get your orders delivered quickly and safely
              </p>
            </div>

            <div style={styles.featureCard}>
              <Shield size={40} color="#4f46e5" />
              <h3 style={styles.featureTitle}>Secure Shopping</h3>
              <p style={styles.featureText}>
                Your data and transactions are always protected
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={styles.cta}>
        <div className="container" style={styles.ctaContent}>
          <h2 style={styles.ctaTitle}>Ready to Start Shopping?</h2>
          <p style={styles.ctaText}>
            Join thousands of satisfied customers today!
          </p>
          <Link to="/register" className="btn" style={styles.ctaBtn}>
            Create Account
          </Link>
        </div>
      </section>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
  },
  hero: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    padding: '6rem 0',
    textAlign: 'center',
  },
  heroTitle: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  heroSubtitle: {
    fontSize: '1.25rem',
    marginBottom: '2rem',
    opacity: 0.9,
  },
  heroBtn: {
    fontSize: '1.1rem',
    padding: '1rem 2rem',
  },
  features: {
    padding: '4rem 0',
    backgroundColor: 'white',
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '3rem',
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
  },
  featureCard: {
    textAlign: 'center',
    padding: '2rem',
    backgroundColor: '#f9fafb',
    borderRadius: '8px',
  },
  featureTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    margin: '1rem 0',
  },
  featureText: {
    color: '#6b7280',
  },
  cta: {
    backgroundColor: '#4f46e5',
    color: 'white',
    padding: '4rem 0',
  },
  ctaContent: {
    textAlign: 'center',
  },
  ctaTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  ctaText: {
    fontSize: '1.1rem',
    marginBottom: '2rem',
    opacity: 0.9,
  },
  ctaBtn: {
    backgroundColor: 'white',
    color: '#4f46e5',
    padding: '1rem 2rem',
    fontSize: '1.1rem',
    fontWeight: '600',
  },
};

export default Home;