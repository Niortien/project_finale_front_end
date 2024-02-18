
import React, { useState } from 'react';
import { Container, Form, Row, Col, Button, Table } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Navigation from '../Navigation';
import './Agence.css';

function Agence({ onAjouterAgence }) {
  const [showForm, setShowForm] = useState(false);
  const [agencesData, setAgencesData] = useState([]);
  const [selectedAgency, setSelectedAgency] = useState(null);
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);

  const handleEdit = (index) => {
    setSelectedAgency(agencesData[index]);
    setShowForm(true);
    setSelectedRowIndex(index);
  };

  const handleDelete = (index) => {
    const confirmDelete = window.confirm("Voulez-vous vraiment supprimer?");
    if (confirmDelete) {
      const updatedData = [...agencesData];
      updatedData.splice(index, 1);
      setAgencesData(updatedData);
    }
  };

  const handleAdd = () => {
    setShowForm(true);
    setSelectedAgency(null);
    setSelectedRowIndex(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nouvelleAgence = {
      nom: event.target.nom.value,
      responsable: event.target.responsable.value,
    };

    if (selectedRowIndex !== null) {
      const updatedData = [...agencesData];
      updatedData[selectedRowIndex] = nouvelleAgence;
      setAgencesData(updatedData);
      setSelectedAgency(null);
      setSelectedRowIndex(null);
    } else {
      setAgencesData([...agencesData, nouvelleAgence]);
    }

    event.target.reset();
    setShowForm(false);
  };

  return (
    <div>
      <Navigation />
      <Container className="mt-5">
        {agencesData.length === 0 ? (
          <div className="initial-message">
            <p>
              Vous n'avez aucune agence pour l'instant{' '}
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
              Ajouter une agence
            </Button>

            <div>
              <h2>Liste des agences enregistrées</h2>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Nom de l'agence</th>
                    <th>Responsable</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {agencesData.map((agence, index) => (
                    <tr key={index}>
                      <td>{agence.nom}</td>
                      <td>{agence.responsable}</td>
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
                    <Form.Label className="required-label">Nom de l'agence</Form.Label>
                    <Form.Control type="text" name="nom" defaultValue={selectedAgency?.nom || ''} required />
                  </Col>
                  <Col>
                    <Form.Label className="required-label">Responsable</Form.Label>
                    <Form.Control type="text" name="responsable" defaultValue={selectedAgency?.responsable || ''} required />
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

export default Agence;