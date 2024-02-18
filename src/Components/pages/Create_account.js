import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { FaTimes  } from 'react-icons/fa';
import './Create_account.css';

const CreateAccount = ({ setShowForm }) => {
  const [formData, setFormData] = useState({
    username: '',
    residence: '',
    contact: '',
    city: '',
    birthDate: '',
    gender: '',
    email: '',
    password: '',
    confirmPassword: '',
    photo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  // const handlePhotoChange = (e) => {
  //   const photoFile = e.target.files[0];
  //   const reader = new FileReader();

  //   reader.onloadend = () => {
  //     setFormData({
  //       ...formData,
  //       photo: reader.result,
  //     });
  //   };

  //   if (photoFile) {
  //     reader.readAsDataURL(photoFile);
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulaire soumis avec les données :', formData);
    setShowForm(false);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h3>Inscription</h3>

          {/* <div className="camera-icon" title="Ajouter une photo">
              <label htmlFor="photoUpload">
                <FaCamera />
              </label>
              <input
                id="photoUpload"
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                style={{ display: 'none' }}
              />
            </div> */}
          <span className="close" onClick={() => setShowForm(false)}><FaTimes /></span>
        </div>
        <form onSubmit={handleSubmit} className="form-containers">
          <Row className="mb-1">
            <Col>
              <label className="required-label">Nom</label>
              <input type="text" name="username" value={formData.username} onChange={handleChange} required />
            </Col>
            <Col>
              <label className="required-label">Date de naissance</label>
              <input type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} required />
            </Col>
          </Row>
          <Row className="mb-1">
            <Col>
              <label className="required-label">Lieu d'habitation</label>
              <input type="text" name="residence" value={formData.residence} onChange={handleChange} required />
            </Col>
            <Col>
              <label className="required-label">Genre</label>
              <select name="gender" value={formData.gender} onChange={handleChange} required>
                <option value="">Sélectionnez...</option>
                <option value="homme">Homme</option>
                <option value="femme">Femme</option>
              </select>
            </Col>
          </Row>
          <Row className="mb-1">
            <Col>
              <label className="required-label">Contact</label>
              <input type="text" name="contact" value={formData.contact} onChange={handleChange} required />
            </Col>
            <Col>
              <label className="required-label">Ville</label>
              <input type="text" name="city" value={formData.city} onChange={handleChange} required />
            </Col>
          </Row>

          <Row className="mb-1">
            <Col>
              <label className="required-label">Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </Col>
            <Col>
              <label className="required-label">Mot de passe</label>
              <input type="password" name="password" value={formData.password} onChange={handleChange} required />
            </Col>
          </Row>
          <Row>
            <Col>
              <label className="required-label">Confirmer le mot de passe</label>
              <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
            </Col>
          </Row>

          <button type="submit">S'inscrire</button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
