import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ActiveProjectCard from "../../components/active-project-card/active-proj-card.js";

function MyProjects() {
    let { myProjects } = useSelector((state) => state.projects);

    return (
        <div>
            <h3>My Projects</h3>
            <ul className="d-flex flex-wrap justify-content-around p-0">
                {myProjects.map((project) => (
                    <ActiveProjectCard key={project._id} project={project} />
                ))}
            </ul>
        </div>
    );
}
export default MyProjects;
