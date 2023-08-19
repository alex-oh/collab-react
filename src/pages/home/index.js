import React from "react";
import MyProjects from "./my-projects-view.js";
import ProjectsFeed from "./projects-feed-view.js";
import Courses from "./courses-view.js";

function Home() {
    return (
        <div>
            <div className="row">
                <div className="col-2" />
                <div className="col-8 text-left">
                    <h1>This is the homepage.</h1>
                    <MyProjects />
                    <ProjectsFeed />
                    <Courses />
                </div>
                <div className="col-2" />
            </div>
        </div>
    );
}
export default Home;
