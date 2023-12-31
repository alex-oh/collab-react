import React from "react";
import "./index.css";
import { useNavigate } from "react-router";

const ActiveProjectCard = ({ project }) => {
    let navigate = useNavigate();

    const handleProjectCardClick = async () => {
        navigate(`/projects/${project._id}`);
    };
    return (
        <li
            className="list-group-item rounded project-card active-project-card"
            onClick={handleProjectCardClick}
        >
            {" "}
            <h4>{project.name}</h4>
            <em>{project.description}</em>
            <div>
                <p>Looking for: {project.seekingMembers}</p>
            </div>
        </li>
    );
};
export default ActiveProjectCard;
