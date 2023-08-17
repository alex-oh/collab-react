import React from "react";
import './index.css'

const ProjectSummaryCard = (project) => {
    return (
        <li className="list-group-item project-card project-summary my-2">
            <div className="row">
                <div className="col-2">
                    <img/>
                </div>
                <div className="col-7 text-left">
                    <h4>Project Name</h4>
                    <em>This is the project summary blah blah blah... lorem ipsum sit dolor amet</em>
                    <p>Looking for: 1 designer</p>
                </div>
                <div className="col-3 text-right">
                    <div>@username</div>
                    <div className="subtext">Posted 1 hr ago</div>
                </div>
            </div>
        </li>
    );
};
export default ProjectSummaryCard;
