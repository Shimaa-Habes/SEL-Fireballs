import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { authService } from '../services/authService';
import { ShieldCheck } from 'lucide-react';

const Verify = () => {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();
  const { verify } = useAuth();
  
  const userId = location.state?.userId;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      await verify(userId, code);
      setSuccess('Account verified successfully!');
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (err) {
      setError(err.response?.data?.message || 'Verification failed');
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      await authService.resendVerification(userId);
      setSuccess('Verification code resent!');
    } catch (err) {
      setError('Failed to resend code');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <ShieldCheck size={50} color="#4f46e5" />
          <h2 style={styles.title}>Verify Your Account</h2>
          <p style={styles.subtitle}>
            Please enter the verification code sent to your email or phone.
          </p>
        </div>

        {error && <div className="alert alert-error">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Verification Code</label>
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
              maxLength={6}
              className="input"
              placeholder="Enter 6-digit code"
              style={styles.codeInput}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary"
            style={styles.submitBtn}
          >
            {loading ? 'Verifying...' : 'Verify Account'}
          </button>
        </form>

        <div style={styles.footer}>
          <p style={styles.resendText}>Didn't receive the code?</p>
          <button
            onClick={handleResend}
            disabled={loading}
            style={styles.resendBtn}
          >
            Resend Code
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    backgroundColor: '#f5f5f5',
  },
  card: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '400px',
  },
  header: {
    textAlign: 'center',
    marginBottom: '2rem',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginTop: '1rem',
    marginBottom: '0.5rem',
  },
  subtitle: {
    color: '#6b7280',
    fontSize: '0.9rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  label: {
    fontWeight: '500',
    fontSize: '0.9rem',
  },
  codeInput: {
    fontSize: '1.5rem',
    letterSpacing: '0.5rem',
    textAlign: 'center',
  },
  submitBtn: {
    width: '100%',
    marginTop: '1rem',
  },
  footer: {
    textAlign: 'center',
    marginTop: '1.5rem',
  },
  resendText: {
    fontSize: '0.9rem',
    color: '#6b7280',
    marginBottom: '0.5rem',
  },
  resendBtn: {
    background: 'transparent',
    border: 'none',
    color: '#4f46e5',
    fontWeight: '500',
    cursor: 'pointer',
    textDecoration: 'underline',
  },
};

export default Verify;