import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { findUser } from "../../redux-services/users/users-service";
import { Link } from "react-router-dom";
import "./index.css";

const ProjectSummaryCard = ({ project }) => {
    let navigate = useNavigate();
    const [projectOwner, setProjectOwner] = useState([]);

    const loadProjectOwner = async () => {
        const response = await findUser(project.projectOwner);
        if (response != null) {
            setProjectOwner(response);
        } else {
            setProjectOwner({ username: null });
        }
    };

    useEffect(() => {
        loadProjectOwner();
    }, []);

    const handleProjectCardClick = async () => {
        navigate(`/projects/${project._id}`);
    };
    return (
        <li
            className=" list-group-item rounded project-card project-summary my-2"
            onClick={handleProjectCardClick}
        >
            <div className="row">
                <div className="col-9 text-left">
                    <h4>{project.name}</h4>
                    <em>{project.description}</em>
                    <p>Looking for: 1 designer</p>
                </div>
                <div className="col-3 text-right">
                    <div
                        onClick={(e) => {
                            e.stopPropagation();
                            if (projectOwner.username) {
                                navigate(`/profile/${projectOwner._id}`);
                            }
                        }}
                    >
                        @{projectOwner.username}
                    </div>

                    <div className="subtext">{project.createDate}</div>
                </div>
            </div>
            <br />
        </li>
    );
};
export default ProjectSummaryCard;
