import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import ProjectSummaryCard from "../../components/project-summary-card";
import { findProjects } from "../../redux-services/projects/projects-service";

function ProjectsFeed() {
    const [projects, setProjects] = useState([]);

    const loadProjects = async () => {
        // load projects
        const response = await findProjects();
        setProjects(response);
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
