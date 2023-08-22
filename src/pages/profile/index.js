import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import "./index.css";
import { findUser } from "../../redux-services/users/users-service";
import EditProfileBookmarks from "../../components/edit-profile-bookmarks/edit-profile-bookmarks";
import EditProfileProject from "../../components/edit-profile-projects/edit-profile-project.js";
import EditProfileView from "../../components/edit-profile-view/Edit-profile-view";
import ProjectSummaryCard from "../../components/project-summary-card";
import APICard from "../../components/api-card/APICard";
import APICards from "../api-finder";

function Profile() {
    const { uid } = useParams();
    const [user, setUser] = useState(null);
    const [projects, setProjects] = useState([]);

    const userId = uid || getCurrentUserId(); // hypothetical function to get the logged-in user's ID

    useEffect(() => {
        async function loadUser() {
            try {
                console.log("userId from profile index.js", userId);
                const userToLoad = await findUser(userId);
                setUser(userToLoad);
            } catch (error) {
                console.error("Failed to load user:", error);
            }
        }
        loadUser();
    }, [userId]);

    useEffect(() => {
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
                                <EditProfileBookmarks user={user} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function getCurrentUserId() {
const currentUser = useSelector((state) => (state.user ? state.user.currentUser : null));

    return currentUser;
}

export default Profile;
