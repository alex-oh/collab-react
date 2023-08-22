import React, { useState, useEffect } from 'react';

import { findApiById } from '../../redux-services/apis/apis-service';
import { findMyProjects } from "../../redux-services/projects/projects-service";
import APICard from "../../components/api-card/APICard";

import samplesAPIs from "../../pages/api-finder/sampleAPIs.json"


function EditProfileBookmarks() {
    const [bookmarkedAPIs, setBookmarkedAPIs] = useState([]);

    useEffect(() => {
        // Fetch the bookmarked APIs for the user
        // I'm using a placeholder here; replace it with your own API call
        fetchUserBookmarkedAPIs().then(data => {
            setBookmarkedAPIs(data);
        }).catch(error => {
            console.error("Error fetching bookmarked APIs:", error);
        });
    }, []);

    const fetchUserBookmarkedAPIs = async () => {
        // Replace this with the actual API call to fetch the user's bookmarked APIs
        const response = await fetch("https://api.publicapis.org/entries");
        const data = await response.json();
        console.log("edit-profile-bookmarks",data);
        return [];    };

    return (
        <div style={{ padding: '20px', backgroundColor: '#121212', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
            <div style={{ width: '70%', display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
                {bookmarkedAPIs.map((api, index) => (
                    <div key={index} className="mb-4" style={{ marginRight: '2%' }}>
                        <APICard
                            api={api}
                            index={index}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}


export default EditProfileBookmarks;
