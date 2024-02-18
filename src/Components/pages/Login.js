import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import inscription from '../../images/insc.jpg';
import CreateAccount from './Create_account';
import './Login.css';

const Login = ({ setLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setLoggedIn(true);
    navigate('/navigation');
  };

  const handleCreateAccountClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className="login-container">
      <div className="image-container">
        <img src={inscription} alt="" />
      </div>
      <div className="form-container">
        <h2>Login</h2>
        <label>Nom d'utilisateur</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <br />
        <label>Mot de passe</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <Link to="/home" onClick={handleLogin} className="submit-link">
          Submit
        </Link>
        <br /><br />
        <h6 onClick={handleCreateAccountClick} style={{ cursor: 'pointer', color: 'blue' }}>Create Account</h6>
        {showForm && (
          <div className="modal-overlay">
            <div className="modal">
              <span className="close" onClick={handleCloseForm}>&times;</span>
              <CreateAccount setShowForm={setShowForm} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
