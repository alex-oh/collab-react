import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ActiveProjectCard from "../../components/active-project-card/active-proj-card.js";
import { findMyProjects } from "../../redux-services/projects/projects-service.js";

function MyProjects() {
    const [myProjects, setMyProjects] = useState([]);
    const { currentUser } = useSelector((state) => state.user);

    const loadMyProjects = async () => {
        const response = await findMyProjects(currentUser);
        setMyProjects(response);
    };

    useEffect(() => {
        loadMyProjects();
    }, []);

    return (
        <div>
            <h3>My Projects</h3>
            <ul className="d-flex flex-wrap justify-content-around p-0">
                {myProjects.toReversed().map((project) => (
                    <ActiveProjectCard key={project._id} project={project} />
                ))}
            </ul>
        </div>
    );
}
export default MyProjects;
