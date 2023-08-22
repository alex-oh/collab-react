import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { findUser } from "../../redux-services/users/users-service";
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
                <div className="col-lg-9 col-sm-8 text-left">
                    <h4>{project.name}</h4>
                    <em>{project.description}</em>
                    <p>Looking for: {project.seekingMembers}</p>
                </div>
                <div className="col-lg-3 col-sm-4 text-right">
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
