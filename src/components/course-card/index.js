import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ActiveProjectCourseCard from "../active-project-card/active-proj-card-course.js";
import { findCourseProjects } from "../../redux-services/projects/projects-service.js";

import "./index.css";

const CourseCard = () => {
    let { currentUser } = useSelector((state) => state.user);
    const [courseProjects, setCourseProjects] = useState([]);

    const loadCourseProjects = async () => {
        const projects = await findCourseProjects(
            currentUser.instructorCourses
        );
        setCourseProjects(projects);
    };

    useEffect(() => {
        loadCourseProjects();
    }, []);

    return (
        <li className="list-group-item rounded course-card">
            {" "}
            <h4>Course: {currentUser.instructorCourses}</h4>
            <ul className="d-flex flex-wrap">
                {courseProjects.map((project) => (
                    <ActiveProjectCourseCard
                        key={project._id}
                        project={project}
                    />
                ))}
            </ul>
        </li>
    );
};
export default CourseCard;
