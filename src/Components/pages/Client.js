import React, { useState } from 'react';
import { Container, Form, Row, Col, Button, Table } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Navigation from '../Navigation';
import './Client.css';

function Client() {
  const [showForm, setShowForm] = useState(false);
  const [clientData, setClientData] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);

  const sexesOptions = ['Homme', 'Femme'];
  const nationalitesOptions = ['Française', 'Allemande', 'Américaine', 'Autre'];

  const handleEdit = (index) => {
    setSelectedClient(clientData[index]);
    setShowForm(true);
    setSelectedRowIndex(index);
  };

  const handleDelete = (index) => {
    const confirmDelete = window.confirm("Voulez-vous vraiment supprimer?");
    if (confirmDelete) {
      const updatedData = [...clientData];
      updatedData.splice(index, 1);
      setClientData(updatedData);
    }
  };

  const handleAdd = () => {
    setShowForm(true);
    setSelectedClient(null);
    setSelectedRowIndex(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nouveauClient = {
      nom: event.target.nom.value,
      prenom: event.target.prenom.value,
      sexe: event.target.sexe.value,
      dateNaissance: event.target.dateNaissance.value,
      telephone: event.target.telephone.value,
      email: event.target.email.value,
      nationalite: event.target.nationalite.value,
      numeroCNI: event.target.numeroCNI.value,
      lieuNaissance: event.target.lieuNaissance.value,
    };

    if (selectedRowIndex !== null) {
      const updatedData = [...clientData];
      updatedData[selectedRowIndex] = nouveauClient;
      setClientData(updatedData);
      setSelectedClient(null);
      setSelectedRowIndex(null);
    } else {
      setClientData([...clientData, nouveauClient]);
    }

    event.target.reset();
    setShowForm(false);
  };

  return (
    <div>
      <Navigation />
      <Container className="mt-5">
        {clientData.length === 0 ? (
          <div className="initial-message">
            <p>
              Vous n'avez aucun client pour l'instant{' '}
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
              Ajouter un client
            </Button>

            <div>
              <h2>Liste des clients enregistrés</h2>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Nom</th>
                    <th>Prénom</th>
                    <th>Sexe</th>
                    {/* <th>Date de Naissance</th> */}
                    <th>Téléphone</th>
                    <th>Email</th>
                    <th>Nationalité</th>
                    <th>Numéro CNI</th>
                    {/* <th>Lieu de Naissance</th> */}
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {clientData.map((client, index) => (
                    <tr key={index}>
                      <td>{client.nom}</td>
                      <td>{client.prenom}</td>
                      <td>{client.sexe}</td>
                      {/* <td>{client.dateNaissance}</td> */}
                      <td>{client.telephone}</td>
                      <td>{client.email}</td>
                      <td>{client.nationalite}</td>
                      <td>{client.numeroCNI}</td>
                      {/* <td>{client.lieuNaissance}</td> */}
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
                    <Form.Label className="required-label">Nom</Form.Label>
                    <Form.Control type="text" name="nom" required defaultValue={selectedClient?.nom || ''} />
                  </Col>
                  <Col>
                    <Form.Label className="required-label">Prénom</Form.Label>
                    <Form.Control type="text" name="prenom" required defaultValue={selectedClient?.prenom || ''} />
                  </Col>
                  
                </Row>

                <Row className="mb-3">
                <Col>
                    <Form.Label className="required-label">Sexe</Form.Label>
                    <Form.Select name="sexe" required defaultValue={selectedClient?.sexe || ''}>
                      {sexesOptions.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </Form.Select>
                  </Col>
                  <Col>
                    <Form.Label className="required-label">Date de Naissance</Form.Label>
                    <Form.Control type="date" name="dateNaissance" required defaultValue={selectedClient?.dateNaissance || ''} />
                  </Col>
                  
                </Row>

                <Row className="mb-3">
                <Col>
                    <Form.Label className="required-label">Lieu de Naissance</Form.Label>
                    <Form.Control type="text" name="lieuNaissance" required defaultValue={selectedClient?.lieuNaissance || ''} />
                  </Col>
                <Col>
                    <Form.Label className="required-label">Téléphone</Form.Label>
                    <Form.Control type="tel" name="telephone" required defaultValue={selectedClient?.telephone || ''} />
                  </Col>
                  
                </Row>

                <Row>
                <Col className="mb-3">
                    <Form.Label className="required-label">Nationalité</Form.Label>
                    <Form.Select name="nationalite" required defaultValue={selectedClient?.nationalite || ''}>
                      {nationalitesOptions.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </Form.Select>
                  </Col>
                  <Col>
                    <Form.Label className="required-label">Numéro CNI</Form.Label>
                    <Form.Control type="text" name="numeroCNI" required defaultValue={selectedClient?.numeroCNI || ''} />
                  </Col>
                </Row>
                <Row className="mb-3">
                <Col>
                    <Form.Label className="required-label">Email</Form.Label>
                    <Form.Control type="email" name="email" required defaultValue={selectedClient?.email || ''} />
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

export default Client;
