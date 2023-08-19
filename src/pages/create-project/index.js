import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CreateProject() {
    const [formData, setFormData] = useState({
        projectName: '',
        description: '',
        projectType: '',
        completionPercentage: 0,
        startDate: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#121212', height: '100vh' }}>
            <Card className="mt-5 mb-5" style={{ width: '70%', backgroundColor: '#2C2C2C', color: '#EAEAEA' }}>
                <Card.Header as="h5" style={{ textAlign: 'left' }}>Create a Project</Card.Header>
                <Card.Body>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label style={{ fontWeight: 'bold', textAlign: 'left', color: '#EAEAEA', display: 'block' }}>Project Name</label>
                            <input type="text" className="form-control" style={{ backgroundColor: '#424242', color: '#EAEAEA', borderColor: '#626262' }} name="projectName" value={formData.projectName} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label style={{ fontWeight: 'bold', textAlign: 'left', color: '#EAEAEA', display: 'block' }}>Project Description</label>
                            <textarea className="form-control" style={{ backgroundColor: '#424242', color: '#EAEAEA', borderColor: '#626262' }} name="description" value={formData.description} onChange={handleChange}></textarea>
                        </div>
                        <div className="form-group">
                            <label style={{ fontWeight: 'bold', textAlign: 'left', color: '#EAEAEA', display: 'block' }}>Project Type</label>
                            <select className="form-control" style={{ backgroundColor: '#424242', color: '#EAEAEA', borderColor: '#626262', textAlign: 'left' }} name="projectType" value={formData.projectType} onChange={handleChange}>
                                <option value="">-- Select a Project Type --</option>
                                <option value="Mobile App">Mobile App</option>
                                <option value="Web App">Web App</option>
                                <option value="Consulting">Consulting</option>
                                <option value="Event">Event</option>
                                <option value="Non-profit">Non-profit</option>
                            </select>
                        </div>
                        <div className="form-group">
                            {/* {{ fontWeight: 'bold', textAlign: 'left', color: '#EAEAEA', display: 'block' }} */}
                            <label style={{ fontWeight: 'bold', textAlign: 'left', color: '#EAEAEA', display: 'block' }}>Current Completion Percentage</label>
                            <div className="d-flex justify-content-between align-items-center">
                                <span style={{ fontWeight: 'bold', textAlign: 'left', color: '#EAEAEA', display: 'block' }}>{formData.completionPercentage}%</span>
                                <input type="range" min="0" max="100" className="form-control-range" style={{ flex: 1, marginLeft: '10px' }} name="completionPercentage" value={formData.completionPercentage} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="form-group">
                            <label style={{ fontWeight: 'bold', textAlign: 'left', color: '#EAEAEA', display: 'block' }}>Start Date</label>
                            <input type="date" className="form-control" style={{ backgroundColor: '#424242', color: '#EAEAEA', borderColor: '#626262' }} name="startDate" value={formData.startDate} onChange={handleChange} />
                        </div>
                        </form>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-end">
                    <Button variant="dark" className="mr-2">Cancel</Button>
                    <Button variant="light" type="submit">Submit</Button>
                </Card.Footer>
            </Card>
        </div>
    );
}

export default CreateProject;
