import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./login-pages.css";

function ProfilePictureUpload() {
    return (
        <div className="w-50 m-auto">
            <h3>Upload a profile picture</h3>
            <div className="login-box d-flex flex-column p-4 w-75 m-auto">
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Default file input example</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>
                <Button variant="primary" size="sm" className="green">
                    Done
                </Button>
            </div>
        </div>
    );
}
export default ProfilePictureUpload;
