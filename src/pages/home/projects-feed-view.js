import React from "react";
import ProjectSummaryCard from "../../components/project-summary-card"

function ProjectsFeed() {
    return (
        <div>
            <h3>Projects Feed</h3>
            <ul>
                <ProjectSummaryCard/>
                <ProjectSummaryCard/>
                <ProjectSummaryCard/>
            </ul>
        </div>
    );
}
export default ProjectsFeed;
