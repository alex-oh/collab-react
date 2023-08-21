import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import ProjectSummaryCard from "../../components/project-summary-card";

import { findMyProjects } from "../../redux-services/projects/projects-service";
import { findUser } from "../../redux-services/users/users-service";

function EditProfileProject() {
    const params = useParams();
    const userId = params.uid;

    const [projects, setProjects] = useState([]);
    const [user, setUser] = useState([]);

    // loading functions
    const loadUser = async () => {
        const userToLoad = await findUser(userId);
        setUser(userToLoad);
    };
    const loadMyProjects = async () => {
        const response = await findMyProjects(user);
        setProjects(response);
    };

    // load user and projects
    useEffect(() => {
        loadUser();
        loadMyProjects();
    }, [user]);

    return (
        <div>
            <div className="mt-4 col-xs-7 col-sm-7 col-md-7 col-lg-7 border border-secondary text-left main-content">
                <h4></h4>
                {projects.map((project) => (
                    <ProjectSummaryCard project={project} />
                ))}
            </div>
        </div>
    );
}

export default EditProfileProject;
