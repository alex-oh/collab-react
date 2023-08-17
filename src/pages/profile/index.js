import React from 'react';

import UserIcon from '../../assets/Image/spacex.jpg'; 


function MainProfile() {
    return (
        <div>
            {/* <GlobalNav /> */}

            <div className="profile-header">
                <h4>Collab</h4>
                <input type="text" placeholder="Search" className="search-bar" />
                <img src={UserIcon} alt="User Icon" className="user-icon" />
            </div>

            <div className="profile-details mb-3">
                <img src={UserIcon} alt="User Icon" className="profile-user-icon" />
                <h5>Username</h5>
            </div>

            <div className="project-list mb-7">
               

               
            </div>
        </div>
    );
}

export default MainProfile;