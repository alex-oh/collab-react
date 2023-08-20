import React from "react";
import './index.css';
import { useNavigate } from "react-router";

const ActiveProjectCard = (project) => {
    let navigate = useNavigate();

    const handleProjectCardClick = async () => {
    }
    return(
        <li className="list-group-item project-card active-project-card">
            {" "}
            <h4>Title</h4>
            <em>This is the project description that is longer than this lorem ipsum dolor sit amet</em>
            <div>
                <p>Looking for: 1 designer<br/>Pending Interest: 3</p>
            </div>
        </li>
    );
}
export default ActiveProjectCard;