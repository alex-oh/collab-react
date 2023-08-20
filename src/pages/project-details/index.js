import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import './index.css';
import projectData from './projectDetails.json';

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { findProjectById } from '../../redux-services/projects/projects-service';

function ProjectDetails() {
    const params = useParams();
    const [project, setProject] = useState([]);

    const loadProject = async() => {
        const projectToLoad = await findProjectById(params.pid);
        setProject(projectToLoad);
    }
    useEffect(() => {
        loadProject();     
    }, [])

    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);


    return (
        <div className="project-details-container">
            <Card className="dark-card">
                <Card.Header as="h5">{project.name} </Card.Header>

                <Card.Body className="dark-card-body">
                    <Badge className="category-badge">{project.category}</Badge>
                    <Card.Subtitle className="dark-card-subtitle">
                        Created on: {project.createDate}
                    </Card.Subtitle>
                    <Card.Subtitle className="dark-card-subtitle">
                        Start Date: {project.startDate}
                    </Card.Subtitle>
                    <Card.Text>
                        {/* UPDATE THE HREF BELOW TO BE ...url/user_id  */}
                        Owner: <a href="#" className="owner-link">{project.owner}</a>
                    </Card.Text>
                    <Card.Text>
                        {/* UPDATE THE HREF BELOW TO BE ...url/user_id  */}
                        NEU Class: <a href="#" className="owner-link">{project.class}</a>
                    </Card.Text>
                    <Card.Text>Completion: {project.completion}%</Card.Text>
                </Card.Body>
            </Card>

            <Card className="dark-card">
                <Card.Header as="h5">Description</Card.Header>
                <Card.Body className="dark-card-body">
                    <Card.Text>{project.description}</Card.Text>
                </Card.Body>
            </Card>

            <Modal show={showModal} onHide={handleClose} centered>
                <Modal.Header>
                    <Modal.Title>Signup As a Participant</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Expected Graduation Date</Form.Label>
                            <Form.Control type="date" />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>How many hours per week can you give?</Form.Label>
                            <Form.Control as="select">
                                <option>1 - 5 Hours</option>
                                <option>5 - 10 Hours</option>
                                <option>10 - 20 Hours</option>
                                <option>21+ Hours</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>What skill can you provide?</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="light" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="dark" type="submit">
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>


            <footer className="sticky-footer">
                <Button variant="outline-secondary" className="footer-button">Email Project Lead</Button>
                <Button variant="secondary" className="footer-button" onClick={handleShow}>
                    Signup As a Participant
                </Button>

            </footer>
        </div>
    );
}

export default ProjectDetails;
