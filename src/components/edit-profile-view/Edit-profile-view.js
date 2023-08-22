import React, { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";

import UserIcon from "../../assets/images/profile.png";
import { updateUserThunk } from "../../redux-services/auth/auth-thunks";
import "./Edit-profile-view.css";

function EditProfileView({ user }) {
    const dispatch = useDispatch();
    const [editing, setEditing] = useState(false);
    const [description, setDescription] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [localUser, setLocalUser] = useState([]);

    let { currentUser } = useSelector((state) => state.user);
    console.log(user);
    useMemo(() => {
        setDescription(user.description);
        setEmail(user.email);
        setPassword(user.password);
        setLocalUser({ ...user });
    }, [user]);

    const handleEdit = () => {
        setEditing(true);
    };

    const handleCancel = () => {
        setDescription(user.description);
        setEmail(user.email);
        setPassword(user.password);
        setEditing(false);
    };

    const handleSave = async (e) => {
        e.preventDefault();
        try {
            const updatedUser = {
                ...user,
                description: description,
                email: email,
                password: password,
            };
            dispatch(updateUserThunk(updatedUser));
            setLocalUser(updatedUser);
            setEditing(false);
        } catch (error) {
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
            <h4 className="mt-3">{user.username}</h4>
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
                    <>
                        <p className="bio-info" style={{ fontSize: "medium" }}>
                            {localUser.description || "No bio"}
                        </p>
                        <div className="mt-2">{localUser.email}</div>
                        {currentUser && user._id === currentUser._id && (
                            <div className="bio-info">
                                Password: {localUser.password}
                            </div>
                        )}
                    </>
                )}
            </div>

            {currentUser && user._id === currentUser._id && (
                <button
                    onClick={editing ? handleCancel : handleEdit}
                    className="btn btn-primary"
                >
                    {editing ? "cancel" : "Edit Profile"}
                </button>
            )}
        </div>
    );
}

export default EditProfileView;
