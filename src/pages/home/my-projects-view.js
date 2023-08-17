import React from "react";
import ActiveProjectCard from "../../components/active-project-card/active-proj-card.js";

function MyProjects() {
    return (
        <div>
            <h3>My Projects</h3>
            <ul className="d-flex flex-wrap justify-content-around p-0">
                <ActiveProjectCard />
                <ActiveProjectCard />
                <ActiveProjectCard />
            </ul>
        </div>
    );
}
export default MyProjects;
