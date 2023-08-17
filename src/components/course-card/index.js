import React from "react";
import ActiveProjectCourseCard from "../active-project-card/active-proj-card-course.js";

const CourseCard = (course) => {
    return(
        <li className="list-group-item project-card">
            {" "}
            <h4>Course name</h4>
            <ul className="d-flex flex-wrap">
                <ActiveProjectCourseCard/>
                <ActiveProjectCourseCard/>
                <ActiveProjectCourseCard/>
                <ActiveProjectCourseCard/>
            </ul>
        </li>
    );
}
export default CourseCard;