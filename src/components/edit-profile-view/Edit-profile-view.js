import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUserDescription } from "./edit-profile-reducer";

import UserIcon from "../../assets/images/profile.png";
import "./Edit-profile-view.css";

function EditProfileView({ user }) {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [description, setDescription] = useState(user.description);
  const userDescription = useSelector(
    (state) => {
      if (state.user && state.user.currentUser) {
        return state.user.currentUser.description;
      }
      return '';
    }
  );

  const handleEdit = () => {
    setDescription(userDescription);
    setEditing(true);
  };

  const handleCancel = () => {
    setDescription(userDescription);
    setEditing(false);
  };

  const handleSave = () => {
    dispatch(updateUserDescription(description)); // Dispatch the action to update the description in the store
    setEditing(false);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
    dispatch(updateUserDescription(e.target.value));
  };

  return (
    <div className="col-8 col-sm-8 col-md-8 col-lg-8 profile-container">
      <h2></h2>
      <img
        src={UserIcon}
        alt="User Icon"
        className="mt-2 rounded-circle profile-user-icon"
      />
      <h5 className="mt-3">{user.username}</h5>
      <div className="bio-container">
        {editing ? (
          <div>
            <input
              type="text"
              value={description}
              onChange={handleDescriptionChange}
              className="bio-input"
              placeholder="Enter a bio"
            />
            <button className="btn btn-success" onClick={handleSave}>Save</button>
          </div>
        ) : (
          <p className="bio-info">{userDescription}</p>
        )}
      </div>
      <h6 className="mt-3">{user.email}</h6>

      <button onClick={editing ? handleCancel : handleEdit } className="btn btn-primary">
        {editing ? "cancel" : "Edit Profile"}
      </button>
    </div>
  );
}

export default EditProfileView;
