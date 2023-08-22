import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { findUser } from "../../redux-services/users/users-service.js"; // Import your user service
// import Modal from "react-bootstrap/Modal";
// import Form from "react-bootstrap/Form";

import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import "./index.css";
// import projectData from "./projectDetails.json";

// commented out modal - future feature
// import Modal from "react-bootstrap/Modal";
// import Form from "react-bootstrap/Form";
import {
    deleteProject,
    findProjectById,
} from "../../redux-services/projects/projects-service";
import { updateUserThunk } from "../../redux-services/auth/auth-thunks.js";

function ProjectDetails() {
    const params = useParams();
    const [project, setProject] = useState([]);
    const [projectOwner, setProjectOwner] = useState(null); // state to hold the user details
    let { currentUser } = useSelector((state) => state.user);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const loadProject = async () => {
        const projectToLoad = await findProjectById(params.pid);
        setProject(projectToLoad);
    };

    useEffect(() => {
        loadProject();
    }, []);

    useEffect(() => {
        const fetchUser = async () => {
            if (project && project.projectOwner) {
                const response = await findUser(project.projectOwner);
                setProjectOwner(response);
            }
        };

        fetchUser();
    }, [project]);

    const currentUserIsProjectOwner = () => {
        const response =
            projectOwner &&
            currentUser != null &&
            projectOwner._id === params.uid;
        return response;
    };

    const handleDeleteProject = async () => {
        const deletedProjId = await deleteProject(project._id);
        // remove the deleted project from current user's created projects
        const deletedProjIndex = currentUser.projectsCreated.indexOf(
            deletedProjId.toString()
        );
        // create new array with same values since projectsCreated is immutable here
        let updatedProjectsCreated = [...currentUser.projectsCreated];
        updatedProjectsCreated.splice(deletedProjIndex);
        // update the user locally
        currentUser = {
            ...currentUser,
            projectsCreated: updatedProjectsCreated,
        };
        // push the updated user to the server
        dispatch(updateUserThunk(currentUser));
        navigate("/");
    };
    // const [showModal, setShowModal] = useState(false);

    // const handleClose = () => setShowModal(false);
    // const handleShow = () => setShowModal(true);

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
                        Project Owner:
                        {projectOwner && (
                            <Link
                                to={`/profile/${projectOwner._id}`}
                                className="owner-link"
                            >
                                {projectOwner.username}
                            </Link>
                        )}
                    </Card.Text>

                    <Card.Text>
                        {/* UPDATE THE HREF BELOW TO BE ...url/user_id  */}
                        NEU Class: {project.classNumber}
                    </Card.Text>
                    <Card.Text>
                        Completion: {project.completionPercentage}%
                    </Card.Text>
                    <Card.Text>
                        Looking for:{" "}
                        <span className="text-danger">
                            {project.seekingMembers}
                        </span>
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
                {currentUserIsProjectOwner() && (
                    <Button variant="danger" onClick={handleDeleteProject}>
                        Delete Project
                    </Button>
                )}
                {projectOwner && projectOwner.email && (
                    <a
                        href={`mailto:${projectOwner.email}`}
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
