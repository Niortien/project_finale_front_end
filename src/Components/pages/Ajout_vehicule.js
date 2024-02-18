import React, { useState } from 'react';
import { Container, Form, Row, Col, Button, Table } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Navigation from '../Navigation';
import './Ajout_vehicule.css';

function AjoutVehicule({ onAjouterVehicule }) {
  const [showForm, setShowForm] = useState(false);
  const [vehiculeData, setVehiculeData] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);

  const marquesOptions = ['BMW', 'Opel', 'Suzuki', 'Toyota', 'Ford', 'Volvo', 'Renault', 'Porshe', 'Nissan', 'Volkswagen', 'Skoda'];
  const agencesOptions = ['Abobo', 'Cocody', 'Bingerville'];
  const categoriesOptions = ['Luxe', 'Famille', '4*4'];
  const carburantOptions = ['Diesel', 'Essence', 'Electrique'];
  const etatOptions = ['Parc', 'Reparation', 'Vente'];
  const typeOptions = ['Moto', 'Voiture'];

  const handleEdit = (index) => {
    setSelectedVehicle(vehiculeData[index]);
    setShowForm(true);
    setSelectedRowIndex(index);
  };

  const handleDelete = (index) => {
    const confirmDelete = window.confirm("Voulez-vous vraiment supprimer?");
    if (confirmDelete) {
      const updatedData = [...vehiculeData];
      updatedData.splice(index, 1);
      setVehiculeData(updatedData);
    }
  };

  const handleAdd = () => {
    setShowForm(true);
    setSelectedVehicle(null);
    setSelectedRowIndex(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nouveauVehicule = {
      proprietaire: event.target.proprietaire.value,
      marque: event.target.marque.value,
      matricule: event.target.matricule.value,
      modele: event.target.modele.value,
      type: event.target.type.value,
      agence: event.target.agence.value,
      categorie: event.target.categorie.value,
      compteurKm: event.target.compteurKm.value,
      datedepot: event.target.datedepot.value,
      etatVoiture: event.target.etatVoiture.value,
      couleur: event.target.couleur.value,
      carburantMoteur: event.target.carburantMoteur.value,
      nombrePortes: event.target.nombrePortes.value,
    };

    if (selectedRowIndex !== null) {
      const updatedData = [...vehiculeData];
      updatedData[selectedRowIndex] = nouveauVehicule;
      setVehiculeData(updatedData);
      setSelectedVehicle(null);
      setSelectedRowIndex(null);
    } else {
      setVehiculeData([...vehiculeData, nouveauVehicule]);
    }

    event.target.reset();
    setShowForm(false);
  };

  return (
    <div>
      <Navigation />
      <Container className="mt-5">
        {vehiculeData.length === 0 ? (
          <div className="initial-message">
            <p>
              Vous n'avez aucun véhicule pour l'instant{' '}
              <a
                href="#!"
                style={{ color: 'red', textDecoration: 'underline' }}
                onClick={handleAdd}
              >
                cliquez ici
              </a>{' '}
              pour ajouter
            </p>
          </div>
        ) : (
          <div>
            <Button
              variant="primary"
              className="mb-3"
              onClick={handleAdd}
            >
              Ajouter un véhicule
            </Button>

            <div>
              <h2>Liste des véhicules enregistrés</h2>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Proprietaire</th>
                    <th>Matricule</th>
                    <th>Marque</th>
                    {/* <th>Modèle</th> */}
                    <th>Type</th>
                    <th>Catégorie</th>
                    {/* <th>Compteur KM</th> */}
                    <th>Couleur</th>
                    <th>Carburant moteur</th>
                    <th>portes</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {vehiculeData.map((vehicule, index) => (
                    <tr key={index}>
                      <td>{vehicule.datedepot}</td>
                      <td>{vehicule.proprietaire}</td>
                      <td>{vehicule.matricule}</td>
                      <td>{vehicule.marque}</td>
                      <td>{vehicule.type}</td>
                      <td>{vehicule.categorie}</td>
                      <td>{vehicule.couleur}</td>
                      <td>{vehicule.carburantMoteur}</td>
                      <td>{vehicule.nombrePortes}</td>
                      <td>
                        <Button
                          variant="outline-primary"
                          size="sm"
                          className="me-2"
                          onClick={() => handleEdit(index)}
                        >
                          <FaEdit />
                        </Button>
                        <Button
                          variant="outline-danger"
                          size="sm"
                          onClick={() => handleDelete(index)}
                        >
                          <FaTrash />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        )}

        {showForm && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={() => setShowForm(false)}>&times;</span>
              <Form onSubmit={handleSubmit} className="form-containers">
                <Row className="mb-3">
                  <Col>
                    <Form.Label className="required-label">Proprietaire</Form.Label>
                    <Form.Control type="text" name="proprietaire" defaultValue={selectedVehicle?.proprietaire || ''} required />
                  </Col>
                  <Col>
                    <Form.Label className="required-label">Marque</Form.Label>
                    <Form.Select name="marque" required defaultValue={selectedVehicle?.marque || ''}>
                      {marquesOptions.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </Form.Select>
                  </Col>
                  <Col>
                    <Form.Label className="required-label">Matricule</Form.Label>
                    <Form.Control type="text" name="matricule" defaultValue={selectedVehicle?.matricule || ''} required />
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col>
                    <Form.Label className="required-label">Type</Form.Label>
                    <Form.Select name="type" required defaultValue={selectedVehicle?.type || ''}>
                      {typeOptions.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </Form.Select>
                  </Col>
                  <Col>
                    <Form.Label className="required-label">Agence</Form.Label>
                    <Form.Select name="agence" required defaultValue={selectedVehicle?.agence || ''}>
                      {agencesOptions.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </Form.Select>
                  </Col>
                  <Col>
                    <Form.Label className="required-label">Catégorie</Form.Label>
                    <Form.Select name="categorie" required defaultValue={selectedVehicle?.categorie || ''}>
                      {categoriesOptions.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </Form.Select>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col>
                    <Form.Label className="required-label">Compteur KM</Form.Label>
                    <Form.Control type="number" name="compteurKm" defaultValue={selectedVehicle?.compteurKm || ''} required />
                  </Col>
                  {/* <Col>
                    <Form.Label className="required-label">Prix</Form.Label>
                    <Form.Control type="number" name="prix" defaultValue={selectedVehicle?.prix || ''} required />
                  </Col> */}
                   <Col>
                    {/* <label className="required-label">Date de naissance</label> */}
                    <Form.Label className="required-label">Date de depot</Form.Label>
                    <Form.Control type="date" name="datedepot" defaultValue={selectedVehicle?.datedepot || ''} required />
                    {/* <input type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} required /> */}
            </Col>
                  <Col>
                    <Form.Label className="required-label">Etat voiture</Form.Label>
                    <Form.Select name="etatVoiture" required defaultValue={selectedVehicle?.etatVoiture || ''}>
                      {etatOptions.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </Form.Select>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col>
                    <Form.Label className="required-label">Couleur</Form.Label>
                    <Form.Control type="text" name="couleur" defaultValue={selectedVehicle?.couleur || ''} required />
                  </Col>
                  <Col>
                    <Form.Label className="required-label">Carburant moteur</Form.Label>
                    <Form.Select name="carburantMoteur" required defaultValue={selectedVehicle?.carburantMoteur || ''}>
                      {carburantOptions.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </Form.Select>
                  </Col>
                  <Col>
                    <Form.Label className="required-label">Nombre de portes</Form.Label>
                    <Form.Control type="number" name="nombrePortes" defaultValue={selectedVehicle?.nombrePortes || ''} required />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Label className="required-label">Modèle</Form.Label>
                    <Form.Control type="text" name="modele" defaultValue={selectedVehicle?.modele || ''} required />
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col>
                    <Form.Label >Ajouter une photo</Form.Label>
                    <Form.Control type="file" name="photo" accept="image/*" />
                  </Col>
                </Row>

                <Button variant="primary" type="submit">
                  Ajouter
                </Button>
              </Form>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}

export default AjoutVehicule;
