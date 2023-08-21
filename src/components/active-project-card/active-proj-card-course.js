import React from "react";
import "./index.css";

const ActiveProjectCourseCard = ({project}) => {
    return (
        <li className="list-group-item rounded project-card active-project-card">
            {" "}
            <h4>{project.name}</h4>
            <em>
                {project.description}
            </em>
            <div>
                <p>
                    Looking for: 1 designer
                </p>
            </div>
        </li>
    );
};
export default ActiveProjectCourseCard;
