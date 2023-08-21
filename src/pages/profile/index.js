import React from "react";
import { useParams } from "react-router";
import { useState, useEffect } from "react";

// styling
import "./index.css";

// services
import { findUser } from "../../redux-services/users/users-service";

// Bootstrap components
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

import EditProfileProject from "../../components/edit-profile-projects/edit-profile-project.js";
import EditProfileView from "../../components/edit-profile-view/Edit-profile-view";
import ProjectSummaryCard from "../../components/project-summary-card";
import APICard from "../../components/api-card/APICard";
import APICards from "../api-finder";

function Profile() {
    const params = useParams();
    const [user, setUser] = useState([]);
    const [projects, setProjects] = useState([]);

    let userId = null;

    if (!params.uid) {
        // if there's no id after profile/, then go to currentUser's page
        console.log("current user's page");
        // setUser to the currentUser app state variable
    } else {
        userId = params.uid;
        // setUser to a user object (get user by id)
    }

    // async function to load user based on userId
    const loadUser = async () => {
        const userToLoad = await findUser(userId);
        setUser(userToLoad);
    };

    const loadProjects = () => {
        // load projects to the local state so we can display them in the profile page
    }
    // load the user
    useEffect(() => {
        loadUser();
    }, []);

    // confirm local state user variable
    useEffect(() => {
        console.log(user);
    }, [user]);

    return (
        <div>
            <div className="row profile-header">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 text-center edit-profile-view">
                    <EditProfileView user={user} />
                </div>
                <div className="mt-4 col-xs-7 col-sm-7 col-md-7 col-lg-7 border border-secondary text-left main-content">
                    <h4>Active Projects:</h4>
                    <div className="row Active_Project_Container ">
                        <div className="Project_Name_1">
                            <div className="col-4 mt-2 py-2 px-2 w-75 Active_Project_Container_image"></div>
                            <EditProfileProject />
                        </div>
                    </div>
                    <div>
                        <h4 className="mt-4 bookmarks-h4">Bookmarks:</h4>
                        <div className="row mt-4 bookmarks-row d-flex flex-wrap">
                            <div className="w-10 m-2">
                                <APICard api={APICards} />
                            </div>
                            <div className="w-10 m-2">
                                <APICard api={APICards} />
                            </div>
                            <div className="w-10 m-2">
                                <APICard api={APICards} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
