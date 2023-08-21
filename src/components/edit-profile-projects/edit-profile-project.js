import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import ProjectSummaryCard from "../../components/project-summary-card";

import { findMyProjectsThunk, findProjectsThunk } from "../../redux-services/projects/projects-thunks";
import { findUserThunk } from "../../redux-services/users/user-thunks";

function EditProfileProject() {
    const params = useParams();
    const dispatch = useDispatch();

    // Ensure projects defaults to an empty array if undefined
    const projects = useSelector((state) => state.projects.myProjects) || []; 

    const [user, setUser] = useState([]);

    let userId = null;

    if(!params.uid) {
        console.log("current user's page");
    } else {
        userId = params.uid;
    }

    const loadUser = async () => {
        const userToLoad = await dispatch(findUserThunk(userId));
        setUser(userToLoad);
    };

    useEffect(() => {
        loadUser();
        if (userId) {
            dispatch(findMyProjectsThunk(user));
        }
    }, [user]);

    return (
        <div>
            
            <div className="mt-4 col-xs-7 col-sm-7 col-md-7 col-lg-7 border border-secondary text-left main-content">
                <h4></h4>
                <div className="row Active_Project_Container">
                    {projects.map((project) => (
                        <div key={project._id} className="Project_Name_1">
                            <div className="col-4 mt-2 py-2 px-2 w-75 Active_Project_Container_image">
                                <ProjectSummaryCard project={project} />
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
        </div>
    );
}

export default EditProfileProject;
