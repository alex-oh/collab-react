import React from "react";
import MyProjects from "./my-projects-view.js";
import ProjectsFeed from "./projects-feed-view.js";
import Courses from "./courses-view.js";
import { useSelector } from "react-redux";

function Home() {
    let { myProjects } = useSelector((state) => state.projects);
    let { currentUser } = useSelector((state) => state.user);

    return (
        <div>
            <div className="row">
                <div className="col-2" />
                <div className="col-8 text-left">
                    <h1>This is the homepage.</h1>
                    {myProjects.length != 0 ? <MyProjects /> : null}
                    <ProjectsFeed />
                    {currentUser && currentUser.type == "instructor" ? (
                        <Courses />
                    ) : null}
                    <Courses />
                </div>
                <div className="col-2" />
            </div>
        </div>
    );
}
export default Home;
