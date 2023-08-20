import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import ProjectSummaryCard from "../../components/project-summary-card";
import { findProjectsThunk } from "../../redux-services/projects/projects-thunks";

function ProjectsFeed() {
    const dispatch = useDispatch();
    const [projects, setProjects] = useState([]);

    const loadProjects = async () => {
        // load projects
        const response = await dispatch(findProjectsThunk());
        setProjects(response.payload);
    };
    useEffect(() => {
        loadProjects();
    }, []);
    // verify that projects were loaded
    // useEffect(() => {
    //     console.log(projects);
    // }, [projects]);
    return (
        <div>
            <h3>Projects Feed</h3>
            <ul>
                {projects.map((project) => (
                    <ProjectSummaryCard key={project._id} project={project} />
                ))}
            </ul>
        </div>
    );
}
export default ProjectsFeed;
