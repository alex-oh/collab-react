import React from "react";
import "./index.css";

const ActiveProjectCourseCard = (project) => {
    return (
        <li className="list-group-item project-card active-project-card course-view">
            {" "}
            <h4>Active Project Name</h4>
            <em>
                This is the project description that is longer than this...
            </em>
            <div>
                <p>
                    Looking for: 1 designer
                    <br />
                    Pending Interest: 3
                </p>
            </div>
        </li>
    );
};
export default ActiveProjectCourseCard;
