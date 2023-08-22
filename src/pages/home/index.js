import React from "react";
import MyProjects from "./my-projects-view.js";
import ProjectsFeed from "./projects-feed-view.js";
import Courses from "./courses-view.js";
import { useSelector } from "react-redux";

function Home() {
    let { currentUser } = useSelector((state) => state.user);

    return (
        <div>
            <div className="row">
                <div className="col-2" />
                <div className="col-8 text-left">
                    {currentUser &&
                    currentUser.accountType === "instructor" &&
                    currentUser.instructorCourses ? (
                        <Courses />
                    ) : null}
                    {currentUser && currentUser.projectsCreated != 0 ? <MyProjects /> : null}
                    <ProjectsFeed />
                </div>
                <div className="col-2" />
            </div>
        </div>
    );
}
export default Home;
