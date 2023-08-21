import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useNavigate } from "react-router-dom"; // Changed to useNavigate
import { useDispatch, useSelector } from "react-redux";
import { createProject } from "../../redux-services/projects/projects-service.js";
import { updateUserThunk } from "../../redux-services/auth/auth-thunks.js";

function CreateProject() {
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Initialize useNavigate
    let { currentUser } = useSelector((state) => state.user);

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        type: "",
        completionPercentage: 0,
        startDate: "",
        classNumber: "",
        projectOwner: currentUser ? currentUser._id : null,
    });

    useEffect(() => {
        if (currentUser) {
            setFormData((prevState) => ({
                ...prevState,
                projectOwner: currentUser._id,
            }));
        }
    }, [currentUser]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await createProject(formData);
            console.log("Project created successfully:", response);
            navigate(`/projects/${response._id}`);
            // add project id to user
            currentUser = {
                ...currentUser,
                projectsCreated: [...currentUser.projectsCreated, response._id],
            };
            console.log(currentUser);
            // update user state
            dispatch(updateUserThunk(currentUser));
        } catch (error) {
            console.error("Error creating project:", error);
        }
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#121212",
                height: "80vh",
            }}
        >
            <Card
                className="mt-3 mb-5"
                style={{
                    width: "70%",
                    backgroundColor: "#2C2C2C",
                    color: "#EAEAEA",
                }}
            >
                <Card.Header as="h5" style={{ textAlign: "left" }}>
                    Create a Project
                </Card.Header>
                <Card.Body>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label
                                style={{
                                    fontWeight: "bold",
                                    textAlign: "left",
                                    color: "#EAEAEA",
                                    display: "block",
                                }}
                            >
                                Project Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                style={{
                                    backgroundColor: "#424242",
                                    color: "#EAEAEA",
                                    borderColor: "#626262",
                                }}
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label
                                style={{
                                    fontWeight: "bold",
                                    textAlign: "left",
                                    color: "#EAEAEA",
                                    display: "block",
                                }}
                            >
                                Project Description
                            </label>
                            <textarea
                                className="form-control"
                                style={{
                                    backgroundColor: "#424242",
                                    color: "#EAEAEA",
                                    borderColor: "#626262",
                                }}
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <div className="form-group">
                            <label
                                style={{
                                    fontWeight: "bold",
                                    textAlign: "left",
                                    color: "#EAEAEA",
                                    display: "block",
                                }}
                            >
                                Project Type
                            </label>
                            <select
                                className="form-control"
                                style={{
                                    backgroundColor: "#424242",
                                    color: "#EAEAEA",
                                    borderColor: "#626262",
                                    textAlign: "left",
                                }}
                                name="type"
                                value={formData.type}
                                onChange={handleChange}
                            >
                                <option value="">
                                    -- Select a Project Type --
                                </option>
                                <option value="Mobile App">Mobile App</option>
                                <option value="Web App">Web App</option>
                                <option value="Consulting">Consulting</option>
                                <option value="Event">Event</option>
                                <option value="Non-profit">Non-profit</option>
                            </select>
                        </div>
                        <div className="form-group">
                            {/* {{ fontWeight: 'bold', textAlign: 'left', color: '#EAEAEA', display: 'block' }} */}
                            <label
                                style={{
                                    fontWeight: "bold",
                                    textAlign: "left",
                                    color: "#EAEAEA",
                                    display: "block",
                                }}
                            >
                                Current Completion Percentage
                            </label>
                            <div className="d-flex justify-content-between align-items-center">
                                <span
                                    style={{
                                        fontWeight: "bold",
                                        textAlign: "left",
                                        color: "#EAEAEA",
                                        display: "block",
                                    }}
                                >
                                    {formData.completionPercentage}%
                                </span>
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    className="form-control-range"
                                    style={{ flex: 1, marginLeft: "10px" }}
                                    name="completionPercentage"
                                    value={formData.completionPercentage}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label
                                style={{
                                    fontWeight: "bold",
                                    textAlign: "left",
                                    color: "#EAEAEA",
                                    display: "block",
                                }}
                            >
                                Start Date
                            </label>
                            <input
                                type="date"
                                className="form-control"
                                style={{
                                    backgroundColor: "#424242",
                                    color: "#EAEAEA",
                                    borderColor: "#626262",
                                }}
                                name="startDate"
                                value={formData.startDate}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label
                                style={{
                                    fontWeight: "bold",
                                    textAlign: "left",
                                    color: "#EAEAEA",
                                    display: "block",
                                }}
                            >
                                Course Number (Optional)
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                style={{
                                    backgroundColor: "#424242",
                                    color: "#EAEAEA",
                                    borderColor: "#626262",
                                }}
                                name="classNumber"
                                value={formData.classNumber}
                                onChange={handleChange}
                            />
                        </div>
                    </form>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-end">
                    <Button variant="dark" className="mr-2">
                        Cancel
                    </Button>
                    <Button
                        variant="light"
                        type="submit"
                        onClick={handleSubmit}
                    >
                        Submit
                    </Button>
                </Card.Footer>
            </Card>
        </div>
    );
}

export default CreateProject;
