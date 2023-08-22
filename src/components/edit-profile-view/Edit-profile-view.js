import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateUserDescriptionThunk,
  updateUserEmailThunk,
  updateUserPasswordThunk,
} from "../../redux-services/users/user-thunks";
import { loginThunk } from "../../redux-services/auth/auth-thunks";

import UserIcon from "../../assets/images/profile.png";
import "./Edit-profile-view.css";

function EditProfileView() {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const currentUser = useSelector((state) => (state.user ? state.user.currentUser : null));

  const username = currentUser ? currentUser.username : "";
  const userDescription = currentUser ? currentUser.description : "";
  const userEmail = currentUser ? currentUser.email : "";

  useEffect(() => {
    setDescription(userDescription);
    setEmail(userEmail);
  }, [userDescription, userEmail]);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleCancel = () => {
    setDescription(userDescription);
    setEmail(userEmail);
    setEditing(false);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      await 
      dispatch(updateUserDescriptionThunk({ username, description }));
      dispatch(updateUserEmailThunk({ username, email }));
      dispatch(updateUserPasswordThunk({ username, password }));
      setPassword("");
      setEditing(false);
    } catch (error) {
      setErrorMessage("Error updating profile");
      console.error(error);
    }
  };

  return (
    <div className="col-8 col-sm-8 col-md-8 col-lg-8 profile-container">
      <img
        src={UserIcon}
        alt="User Icon"
        className="mt-2 rounded-circle profile-user-icon img-fluid"
      />
      <h5 className="mt-3">{username}</h5>
      <div className="bio-container">
        {editing ? (
          <div className="">
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-4col-xs-8 col-sm-8 col-md-8 col-lg-8 bio-input"
              placeholder="Enter a bio"
              style={{ width: "250px", height: "200px" }}
            />
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-4 col-xs-8 col-sm-8 col-md-8 col-lg-8 bio-input"
              placeholder="Edit your email"
              style={{ width: "250px", height: "60px" }}
            />
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-4 col-xs-8 col-sm-8 col-md-8 col-lg-8 bio-input"
              placeholder="Edit your password"
              style={{ width: "250px", height: "60px" }}
            />
            <br />
            <button
              className="btn btn-success"
              onClick={handleSave}
              style={{ marginLeft: "5px", marginTop: "15px" }}
            >
              Save
            </button>
          </div>
        ) : (
          <p className="bio-info" style={{ fontSize: "medium" }}>
            {userDescription || "Enter a bio"}
          </p>
        )}
      </div>
      <h6 className="mt-3">{userEmail}</h6>
      <button
        onClick={editing ? handleCancel : handleEdit}
        className="btn btn-primary"
      >
        {editing ? "cancel" : "Edit Profile"}
      </button>
    </div>
  );
}

export default EditProfileView;