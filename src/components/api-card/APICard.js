import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge"; // Add this at the top with your other imports
import { useNavigate } from "react-router";
import {
    createApi,
} from "../../redux-services/apis/apis-service.js";

import "./APICard.css";

function APICard({ api, index, favoritedIndices, toggleFavorite }) {
    let navigate = useNavigate();

    const handleApiCardClick = () => {
        console.log(`Clicked ${api.API}`);
        console.log(api);
    };

    return (
        <Card
            // border={api.category}
            className="card-hover-effect"
            style={{
                width: "18rem",
                backgroundColor: "#2C2C2C",
                color: "#EAEAEA",
                textAlign: "left",
            }}
            onClick={handleApiCardClick}
        >
            <Card.Header className="cardTitle">{api.API}</Card.Header>
            <Card.Body>
                {/* <Card.Text>{api.category}</Card.Text> */}
                <Badge className="api-category">{api.Category}</Badge>
                {/* <br/>
            <br /> */}

                <Card.Text className="cardBody">{api.Description}</Card.Text>
            </Card.Body>
            <Card.Footer style={{ display: "flex", alignItems: "center" }}>
                <a
                    href={api.Link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                >
                    <Button
                        className="custom-button"
                        variant="outline-light"
                        style={{ border: "none", background: "transparent" }}
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                    >
                        <span className="material-symbols-outlined">link</span>
                    </Button>
                </a>
                <Button
                    className="custom-button"
                    variant="outline-light"
                    style={{
                        border: "none",
                        background: "transparent",
                        marginLeft: "10px",
                    }}
                    onClick={(e) => {
                        e.stopPropagation();
                        console.log("Favorite Button Clicked");
                    }}
                >
                    <span className="material-symbols-outlined">favorite</span>
                </Button>
            </Card.Footer>
        </Card>
    );
}

export default APICard;
