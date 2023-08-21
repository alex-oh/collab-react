import React from "react";
import { useNavigate } from "react-router";
import "./index.css";

const ActiveProjectCourseCard = ({ project }) => {
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
                <p>Looking for: 1 designer</p>
            </div>
        </li>
    );
};
export default ActiveProjectCourseCard;
