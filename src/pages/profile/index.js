import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import "./index.css";

//services
import { findUser } from "../../redux-services/users/users-service";
import { findMyProjects } from "../../redux-services/projects/projects-service";
import { findApiById } from "../../redux-services/apis/apis-service";

//components
import EditProfileView from "../../components/edit-profile-view/Edit-profile-view";
import ProjectSummaryCard from "../../components/project-summary-card";
import APICard from "../../components/api-card/APICard";

function Profile() {
    const { uid } = useParams();
    const { currentUser } = useSelector((state) => state.user);
    const [user, setUser] = useState([]);
    const [projects, setProjects] = useState([]);
    const [bookmarkedAPIs, setBookmarkedAPIs] = useState([]);

    let userId = null;
    if (uid) {
        userId = uid;
    } else {
        userId = currentUser._id;
    }

    const loadUser = async () => {
        try {
            if (userId != null) {
                const userToLoad = await findUser(userId);
                setUser(userToLoad);
            }
        } catch (error) {
            console.error("Failed to load user:", error);
        }
    };

    const loadMyProjects = async () => {
        const response = await findMyProjects(user);
        console.log(response);
        setProjects(response);
    };

    const fetchUserBookmarkedAPIs = async () => {
        // Replace this with the actual API call to fetch the user's bookmarked APIs
        const response = await fetch("https://api.publicapis.org/entries");
        const data = await response.json();
        const allApis = data.entries;
        let bookmarkedAPIsList = [];
        if (user.favoriteApis) {
            user.favoriteApis.map((apiId) => {
                const apiObject = allApis.find(
                    (api) => api.url === findApiById(apiId).link
                );
                // add to the local bookmarked apis list
                if (bookmarkedAPIsList.indexOf(apiObject) === -1) {
                    bookmarkedAPIsList.push(apiObject);
                }
            });
            setBookmarkedAPIs(bookmarkedAPIsList);
        }
    };

    // load user
    useEffect(() => {
        loadUser();
    }, []);

    // laod user's projects
    useEffect(() => {
        loadMyProjects();
        fetchUserBookmarkedAPIs();
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
                            {projects.map((project) => (
                                <ProjectSummaryCard
                                    key={project._id}
                                    project={project}
                                />
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="mt-4 bookmarks-h4">Bookmarks:</h4>
                        <div className="row mt-4 bookmarks-row d-flex flex-wrap">
                            <div
                                style={{
                                    width: "70%",
                                    display: "flex",
                                    flexWrap: "wrap",
                                    justifyContent: "flex-start",
                                }}
                            >
                                {bookmarkedAPIs.map((api, index) => (
                                    <div
                                        key={index}
                                        className="mb-4"
                                        style={{ marginRight: "2%" }}
                                    >
                                        <APICard api={api} index={index} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
