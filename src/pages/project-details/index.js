import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { findUser } from "../../redux-services/users/users-service.js"; // Import your user service

import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import "./index.css";
import projectData from "./projectDetails.json";

import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { findProjectById } from "../../redux-services/projects/projects-service";

function ProjectDetails() {
    const params = useParams();
    const [project, setProject] = useState([]);

    const navigate = useNavigate();

    const loadProject = async () => {
        const projectToLoad = await findProjectById(params.pid);
        setProject(projectToLoad);
    };

    useEffect(() => {
        loadProject();
    }, []);

    const [user, setUser] = useState(null); // state to hold the user details

    useEffect(() => {
        const fetchUser = async () => {
            if (project && project.projectOwner) {
                const userDetails = await findUser(project.projectOwner);
                setUser(userDetails);
            }
        };

        fetchUser();
    }, [project]);

    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "2-digit", day: "2-digit" };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <div className="project-details-container">
            <Card className="dark-card">
                <Card.Header as="h5">{project.name} </Card.Header>

                <Card.Body className="dark-card-body">
                    <Badge className="category-badge">{project.category}</Badge>
                    <Card.Text className="dark-card-subtitle">
                        Created on: {formatDate(project.createDate)}
                    </Card.Text>
                    <Card.Text className="dark-card-subtitle">
                        Start Date: {formatDate(project.startDate)}
                    </Card.Text>

                    <Card.Text>
                        Owner:{" "}
                        {user && (
                            <span
                                onClick={() => {
                                    navigate(`/profile/${user._id}`);
                                }}
                                className="user-hyperlink"
                            >
                                {user.username}
                            </span>
                        )}
                    </Card.Text>
                    <Card.Text>
                        {/* UPDATE THE HREF BELOW TO BE ...url/user_id  */}
                        NEU Class: {project.classNumber}
                    </Card.Text>
                    <Card.Text>
                        Completion: {project.completionPercentage}%
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card className="dark-card">
                <Card.Header as="h5">Description</Card.Header>
                <Card.Body className="dark-card-body">
                    <Card.Text>{project.description}</Card.Text>
                </Card.Body>
            </Card>

            {/* <Modal show={showModal} onHide={handleClose} centered>
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
            </Modal> */}

            <footer className="sticky-footer">
                {user && user.email && (
                    <a
                        href={`mailto:${user.email}`}
                        className="btn btn-secondary footer-button"
                    >
                        Email Project Lead
                    </a>
                )}
            </footer>
        </div>
    );
}

export default ProjectDetails;
