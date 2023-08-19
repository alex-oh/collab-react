import React from "react";
import './index.css'

const ProjectSummaryCard = ({project}) => {
    return (
        <li className="list-group-item project-card project-summary my-2">
            <div className="row">
                <div className="col-9 text-left">
                    <h4>{project.name}</h4>
                    <em>{project.description}</em>
                    <p>Looking for: 1 designer</p>
                </div>
                <div className="col-3 text-right">
                    <div>@username</div>
                    <div className="subtext">{project.createDate}</div>
                </div>
            </div>
            <br/> 
        </li>
    );
};
export default ProjectSummaryCard;
