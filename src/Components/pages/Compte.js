import React, { useState } from 'react';
import Navigation from '../Navigation';
import { Row, Col, Button } from 'react-bootstrap';
import { FaMoon, FaSun,FaCamera  } from 'react-icons/fa';
import './Compte.css';
import FileInput from './FileInput';

const MonCompte = () => {
  const [profileData, setProfileData] = useState({
    username: 'Karen',
    email: 'karen@email.com',
    residence: 'Abidjan',
    birthDate: '01/01/1990',
    language: 'fr',
    darkMode: false,
    profileImage: null,
  });
  

  const toggleDarkMode = () => {
    setProfileData({
      ...profileData,
      darkMode: !profileData.darkMode,
    });
  };

  const handleEditProfile = () => {
    // Ajoutez ici la logique pour l'édition du profil
    console.log('Modifier les informations');
  };
  const handleFileChange = (file) => {
    setProfileData({
      ...profileData,
      profileImage: file,
    });
  };
  

  return (
    <div className="account-tab">
      <Navigation />
      <h2>Mon Compte</h2>
      <div className="account-content">

      <Row className="mb-3">
          <Col className="text-center">
            <div className="profile-image-container">
              <FileInput onChange={handleFileChange} accept="image/*">
                {profileData.profileImage ? (
                  <img
                    src={URL.createObjectURL(profileData.profileImage)}
                    alt="Profile"
                    className="profile-image"
                  />
                ) : (
                  <FaCamera className="camera-icon" />
                )}
              </FileInput>
            </div>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <label>Nom d'utilisateur</label>
            <div>{profileData.username}</div>
          </Col>
          <Col>
            <label>Email</label>
            <div>{profileData.email}</div>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <label>Langue</label>
            <div>{profileData.language}</div>
          </Col>
          <Col>
            <label>Mode Sombre</label>
            <div className="toggle-button" onClick={toggleDarkMode}>
              {profileData.darkMode ? <FaMoon /> : <FaSun />}
            </div>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <label>Lieu de Résidence</label>
            <div>{profileData.residence}</div>
          </Col>
          <Col>
            <label>Date de Naissance</label>
            <div>{profileData.birthDate}</div>
          </Col>
        </Row>
        <Row>
        <a href="#!"  style={{ color: 'red', textDecoration: 'underline' }} >
                Changer le mot de passe? </a>
        </Row>
        <br></br>
        <Col>
        
            <Button variant="primary" onClick={handleEditProfile} className='btn-modifier'>
              Modifier les Informations
            </Button>
          </Col>
      </div>
      
    </div>
  );
};

export default MonCompte;
