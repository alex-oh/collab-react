import React from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import './index.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';



// Test API data
const apiTest = {
    API: "Carbon Interface",
    Description: "API to calculate carbon (C02) emissions estimates for common C02 emitting activities",
    Auth: "apiKey",
    HTTPS: true,
    Cors: "yes",
    Link: "https://docs.carboninterface.com/",
    Category: "Environment",
    favoriteUsers: ["Tom", "Alex", "Frank"]
};


function APIDetails({ api = apiTest }) { // Set default prop value to the testAPI
    // verify that url is getting an API Id
    const params = useParams();
    console.log(params);

    // TODO: query the database via aid to get the url
    // TODO: with that url from the database, call 3rd party api and filter by api url to get the desired api object
    // TODO: with api object from 3rd party api, populate metadata
    // TODO: with api object from database, populate favorited users

    const [userDetails, setUserDetails] = useState([]);

    useEffect(() => {
        // Fetch user details for each Object ID in the favoriteUsers array
        Promise.all(api.favoriteUsers.map(uid =>
            fetch(`/api/users/${uid}`)
                .then(response => response.json())
        ))
            .then(users => setUserDetails(users))
            .catch(error => console.error("Error fetching user details:", error));
    }, [api.favoriteUsers]);

    return (
        <div className="project-details-container">
            <Card className="dark-card">
                <Card.Header as="h5">{api.API} </Card.Header>

                <Card.Body className="dark-card-body">
                    <Badge className="category-badge">{api.Category}</Badge>
                    <Card.Text style={{ fontStyle: 'italic' }}>
                        Supports CORS? <h4>{api.Cors}</h4>
                    </Card.Text>

                    <Card.Text>
                        AUTH Method: <h4>{api.Auth}</h4>
                    </Card.Text>
                    <Card.Text>
                        HTTPS? <h4>{api.HTTPS ? "Yes" : "No"}</h4>
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card className="dark-card">
                <Card.Header as="h5">Description</Card.Header>
                <Card.Body className="dark-card-body">
                    <Card.Text>{api.Description}</Card.Text>
                </Card.Body>
            </Card>

            <Card className="dark-card">
                <Card.Header as="h5">These users have also favorited this API:</Card.Header>
                <Card.Body className="dark-card-body">
                    {userDetails.map(user => (
                        <Badge
                            key={user._id} // Assuming each user object has an _id property 
                            style={{
                                backgroundColor: 'blue',
                                color: 'white',
                                marginRight: '5px',
                                fontSize: '1.2em',
                                padding: '5px 10px',
                                cursor: 'pointer'
                            }}
                            onClick={() => window.location.href = `/api/users/${user._id}`}
                        >
                            {user.username} // Assuming each user object has a username property
                        </Badge>
                    ))}
                </Card.Body>
            </Card>
        </div>
    );
}

export default APIDetails;
