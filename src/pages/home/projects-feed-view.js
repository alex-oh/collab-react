import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import ProjectSummaryCard from "../../components/project-summary-card";
import { findProjectsThunk } from "../../redux-services/projects/projects-thunks";

function ProjectsFeed() {
    const sampleProjects = [
        {
            _id: "64e0b5c156d4597be2e06646",
            name: "web dev",
            type: "Web Stuff",
            completionPercentage: 20,
            projectOwner: "64dfc2af66faf9b0c92d59fa",
            classNumber: "CS5160",
            createDate: "2023-08-19T12:29:53.079Z",
            __v: 0,
        },
    ];
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
    useEffect(() => {
        console.log(projects);
    }, [projects]);
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
