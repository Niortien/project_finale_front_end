import React, { useState } from 'react';
import { Container, Form, Row, Col, Button, Table } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Navigation from '../Navigation';
import './Agent.css';

function Agent() {
  const [showForm, setShowForm] = useState(false);
  const [agentData, setAgentData] = useState([]);
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);

  const sexesOptions = ['Homme', 'Femme'];
  const typesOptions = ['Utilisateur normal', 'Manager d\'agence'];
  const agencesOptions = ['Abobo', 'Cocody', 'Bingerville'];

  const handleEdit = (index) => {
    setSelectedAgent(agentData[index]);
    setShowForm(true);
    setSelectedRowIndex(index);
  };

  const handleDelete = (index) => {
    const confirmDelete = window.confirm("Voulez-vous vraiment supprimer?");
    if (confirmDelete) {
      const updatedData = [...agentData];
      updatedData.splice(index, 1);
      setAgentData(updatedData);
    }
  };

  const handleAdd = () => {
    setShowForm(true);
    setSelectedAgent(null);
    setSelectedRowIndex(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nouvelAgent = {
      nom: event.target.nom.value,
      prenom: event.target.prenom.value,
      sexe: event.target.sexe.value,
      telephone: event.target.telephone.value,
      email: event.target.email.value,
      motDePasse: event.target.motDePasse.value,
      type: event.target.type.value,
      agence: event.target.agence.value,
    };

    if (selectedRowIndex !== null) {
      const updatedData = [...agentData];
      updatedData[selectedRowIndex] = nouvelAgent;
      setAgentData(updatedData);
      setSelectedAgent(null);
      setSelectedRowIndex(null);
    } else {
      setAgentData([...agentData, nouvelAgent]);
    }

    event.target.reset();
    setShowForm(false);
  };

  return (
    <div>
      <Navigation />
      <Container className="mt-5">
        {agentData.length === 0 ? (
          <div className="initial-message">
            <p>
              Vous n'avez aucun agent pour l'instant{' '}
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
              Ajouter un agent
            </Button>

            <div>
              <h2>Liste des agents enregistrés</h2>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Nom</th>
                    <th>Prénom</th>
                    <th>Sexe</th>
                    <th>Téléphone</th>
                    <th>Email</th>
                    <th>Mot de passe</th>
                    <th>Type</th>
                    <th>Agence</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {agentData.map((agent, index) => (
                    <tr key={index}>
                      <td>{agent.nom}</td>
                      <td>{agent.prenom}</td>
                      <td>{agent.sexe}</td>
                      <td>{agent.telephone}</td>
                      <td>{agent.email}</td>
                      <td>{agent.motDePasse}</td>
                      <td>{agent.type}</td>
                      <td>{agent.agence}</td>
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
                    <Form.Control type="text" name="nom" required defaultValue={selectedAgent?.nom || ''} />
                  </Col>
                  <Col>
                    <Form.Label className="required-label">Prénom</Form.Label>
                    <Form.Control type="text" name="prenom" required defaultValue={selectedAgent?.prenom || ''} />
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col>
                    <Form.Label className="required-label">Sexe</Form.Label>
                    <Form.Select name="sexe" required defaultValue={selectedAgent?.sexe || ''}>
                      {sexesOptions.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </Form.Select>
                  </Col>
                  <Col>
                    <Form.Label className="required-label">Téléphone</Form.Label>
                    <Form.Control type="tel" name="telephone" required defaultValue={selectedAgent?.telephone || ''} />
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col>
                    <Form.Label className="required-label">Email</Form.Label>
                    <Form.Control type="email" name="email" required defaultValue={selectedAgent?.email || ''} />
                  </Col>
                  <Col>
                    <Form.Label className="required-label">Mot de passe</Form.Label>
                    <Form.Control type="password" name="motDePasse" required defaultValue={selectedAgent?.motDePasse || ''} />
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col>
                    <Form.Label className="required-label">Type</Form.Label>
                    <Form.Select name="type" required defaultValue={selectedAgent?.type || ''}>
                      {typesOptions.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </Form.Select>
                  </Col>
                  <Col>
                    <Form.Label className="required-label">Agence</Form.Label>
                    <Form.Select name="agence" required defaultValue={selectedAgent?.agence || ''}>
                      {agencesOptions.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </Form.Select>
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

export default Agent;
