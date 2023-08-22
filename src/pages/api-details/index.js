import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import './index.css';
import { useParams, useNavigate } from 'react-router';
import { findApiById } from '../../redux-services/apis/apis-service.js';
import { findUser } from '../../redux-services/users/users-service';

function APIDetails() {

    const { aid } = useParams();
    const navigate = useNavigate();
    const [api, setApi] = useState(null);
    const [userDetails, setUserDetails] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    console.log("API ID IN PAGE:", aid);

    useEffect(() => {
        const fetchApiData = async () => {
            try {
                const apiData = await findApiById(aid);
                setApi(apiData);
            } catch (err) {
                console.error("Error fetching API details:", err);
                setError(err.message);
            }
        };

        fetchApiData();
    }, [aid]);

    useEffect(() => {
        // Fetch user details for all user IDs if api exists
        if (api) {
            const fetchUserDetails = async () => {
                try {
                    const userPromises = api.userFavorites.map(userId => findUser(userId));
                    const userDetailsFetched = await Promise.all(userPromises);
                    setUserDetails(userDetailsFetched);
                    setLoading(false);
                } catch (error) {
                    console.error("Error fetching user details:", error);
                    setError(error.message);
                }
            };

            fetchUserDetails();
        }
    }, [api]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="project-details-container">
            {api ? (
                <>
                    <Card className="dark-card">
                        <Card.Header as="h5">{api.title}</Card.Header>
                        <Card.Body className="dark-card-body">
                            <Badge className="category-badge">{api.category}</Badge>
                            <Card.Text style={{ fontStyle: 'italic' }}>
                                Supports CORS?
                            </Card.Text>
                            <h4>{api.cors}</h4>

                            <Card.Text>
                                AUTH Method:
                            </Card.Text>
                            <h4>{api.auth}</h4>

                            <Card.Text>
                                HTTPS?
                            </Card.Text>
                            <h4>{api.https ? "Yes" : "No"}</h4>
                        </Card.Body>
                    </Card>

                    <Card className="dark-card">
                        <Card.Header as="h5">Description</Card.Header>
                        <Card.Body className="dark-card-body">
                            <Card.Text>{api.description}</Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="dark-card">
                        <Card.Header as="h5">These users have also favorited this API:</Card.Header>
                        <Card.Body className="dark-card-body">
                            {loading ? (
                                <p>Loading...</p>
                            ) : (
                                userDetails.map(user => (
                                    <Badge
                                        key={user._id}
                                        style={{
                                            backgroundColor: 'blue',
                                            color: 'white',
                                            marginRight: '5px',
                                            fontSize: '1.2em',
                                            padding: '5px 10px',
                                            cursor: 'pointer'
                                        }}
                                        onClick={() => navigate(`/profile/${user._id}`)}
                                    >
                                        {user.username}
                                    </Badge>
                                ))
                            )}
                        </Card.Body>
                    </Card>
                </>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
}

export default APIDetails;
