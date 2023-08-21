import React from "react";
import CourseCard from "../../components/course-card";

function Courses() {

    return (
        <div className="p-0">
            <h3>Courses</h3>
            <ul>
                <CourseCard />
            </ul>
        </div>
    );
}
export default Courses;
