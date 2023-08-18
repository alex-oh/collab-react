import React, { useState } from 'react';
import sampleAPIs from './sampleAPIs.json';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import APICard from '../../components/api-card/APICard';
import './index.css';

function APICards() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div style={{ padding: '20px', backgroundColor: '#121212', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <InputGroup className="mb-3" style={{ width: '70%' }}>
                <Form.Control
                    placeholder="What type of API do you want?"
                    aria-label="API Search"
                    aria-describedby="button-addon2"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    style={{ backgroundColor: '#424242', color: '#EAEAEA', borderColor: '#626262' }}
                />
                <Button className="search-button" variant="outline-light" id="button-addon2">
                    Search
                </Button>
                <Button className="search-button-two" variant="outline-light" id="button-addon2">
                    Surprise Me!
                </Button>
            </InputGroup>

            <div style={{ width: '70%', display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
                {sampleAPIs
                    .filter(api => api.API.toLowerCase().includes(searchTerm.toLowerCase()))
                    .map((api, index) => (
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
