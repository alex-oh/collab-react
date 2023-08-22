import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge"; // Add this at the top with your other imports
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getApiByName } from '../../redux-services/apis/apis-service.js';
import { addFavoriteApiToUser } from '../../redux-services/users/users-service.js';
import { addUserToApiFavorites } from "../../redux-services/apis/apis-service.js";


import "./APICard.css";

function APICard({ api, index, favoritedIndices, toggleFavorite }) {
    let navigate = useNavigate();
    let { currentUser } = useSelector((state) => state.user);

    const handleApiCardClick = async () => {
        console.log(`Clicked ${api.API}`);
        

        
        const apiLocal = await getApiByName(api.API);
        console.log(`ID: ${apiLocal._id}`);
        
        // jump to that api's details paage
        navigate(`/apis/${apiLocal._id}`);
    };

    // const handleApiBookmark = async () => {
    //     console.log("Favorite Button Clicked for API:", api.API);
    //     try {
    //         const apiLocal = await getApiByName(api.API.replace(" ", "-"));
    //         console.log(apiLocal);
    //         const result = await addFavoriteApiToUser(currentUser._id, apiLocal._id);  // Assuming apiLocal has an _id field
    //         console.log(result);
    //     } catch (error) {
    //         console.error("Error:", error);
    //     }
    // };

    const handleFavoriteClick = async (e) => {
        e.stopPropagation();
    
        console.log("Favorite Button Clicked");
        let tempName = api.API.replace(" ", "-");
        console.log(tempName);
    
        try {
            const apiLocal = await getApiByName(tempName);
            console.log("API NAME HERE --->");
            console.log(apiLocal._id);
    
            if (apiLocal && apiLocal._id && currentUser && currentUser._id) {
                const userResult = await addFavoriteApiToUser(currentUser._id, apiLocal._id);  // Add the API to the user's favorites
                console.log(userResult);
                
                const apiResult = await addUserToApiFavorites(apiLocal._id, currentUser._id);  // Add the user to the API's favorites
                console.log(apiResult);
    
            } else {
                console.error("API or User details missing");
            }
        } catch (error) {
            console.error("Error while adding favorite:", error);
        }
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
                    onClick={handleFavoriteClick}  // Use the handleFavoriteClick function here
                >
                    <span className="material-symbols-outlined">favorite</span>
                </Button>
            </Card.Footer>
        </Card>
    );
}

export default APICard;
