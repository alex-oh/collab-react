import React, { useState, useEffect } from 'react';
// import Card from 'react-bootstrap/Card';
// import sampleAPIs from './sampleAPIs.json';

import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import APICard from '../../components/api-card/APICard';
import { useSelector } from "react-redux";
import './index.css';


function APICards() {

    const [searchTerm, setSearchTerm] = useState('');
    const [apis, setApis] = useState([]);
    const [displayedAPIs, setDisplayedAPIs] = useState([]);
    const [resultCount, setResultCount] = useState(0);

    let { currentUser } = useSelector((state) => state.user);

    console.log(currentUser._id);

    useEffect(() => {
        fetch("https://api.publicapis.org/entries")
            .then(response => response.json())
            .then(data => {
                setApis(data.entries);
            })
            .catch(error => {
                console.error("Error fetching APIs:", error);
            });
    }, []);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchClick = (event) => {
        event.preventDefault(); // Prevent the form from refreshing the page
        const results = apis.filter(api => api.API.toLowerCase().includes(searchTerm.toLowerCase()));
        setDisplayedAPIs(results);
        setResultCount(results.length);
    };

    return (
        <div style={{ padding: '20px', backgroundColor: '#121212', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Form onSubmit={handleSearchClick} style={{ width: '70%' }}>
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="What type of API do you want?"
                        aria-label="API Search"
                        aria-describedby="button-addon2"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        style={{ backgroundColor: '#424242', color: '#EAEAEA', borderColor: '#626262' }}
                    />
                    <Button className="search-button" variant="outline-light" id="button-addon2" type="submit">
                        Search
                    </Button>
                </InputGroup>
            </Form>

            <div style={{ width: '70%', marginBottom: '20px', color: '#EAEAEA', textAlign: "left" }}>
                {resultCount} Results for: {searchTerm}
            </div>

            <div style={{ width: '70%', display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
                {displayedAPIs.map((api, index) => (
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

export default APICards;
