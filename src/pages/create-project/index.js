import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProjectForm() {
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
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Card className="mt-5" style={{ width: '70%' }}>
                <Card.Header as="h5" style={{ fontWeight: 'bold', textAlign: 'left', display: 'block' }}>Create a Project</Card.Header>
                <Card.Body>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label style={{ fontWeight: 'bold', textAlign: 'left', display: 'block' }}>Project Name</label>
                            <input type="text" className="form-control" name="projectName" value={formData.projectName} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label style={{ fontWeight: 'bold', textAlign: 'left', display: 'block' }}>Description</label>
                            <textarea className="form-control" name="description" value={formData.description} onChange={handleChange}></textarea>
                        </div>
                        <div className="form-group">
                            <label style={{ fontWeight: 'bold', textAlign: 'left', display: 'block' }}>Project Type</label>
                            <select className="form-control" name="projectType" value={formData.projectType} onChange={handleChange}>
                                <option value="">-- Select a Project Type --</option>
                                <option value="Mobile App">Mobile App</option>
                                <option value="Web App">Web App</option>
                                <option value="Consulting">Consulting</option>
                                <option value="Event">Event</option>
                                <option value="Non-profit">Non-profit</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label style={{ fontWeight: 'bold', textAlign: 'left', display: 'block' }}>Current Completion Percentage</label>
                            <div className="d-flex justify-content-between align-items-center">
                                <span style={{ flexShrink: 0 }}>{formData.completionPercentage}%</span>
                                <input type="range" min="0" max="100" className="form-control-range" style={{ flex: 1, marginLeft: '10px' }} name="completionPercentage" value={formData.completionPercentage} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="form-group">
                            <label style={{ fontWeight: 'bold', textAlign: 'left', display: 'block' }}>Start Date</label>
                            <input type="date" className="form-control" name="startDate" value={formData.startDate} onChange={handleChange} />
                        </div>

                        <div className="form-group">
                            <label style={{ fontWeight: 'bold', textAlign: 'left', display: 'block' }}>Start Date</label>
                            <input type="date" className="form-control" name="startDate" value={formData.startDate} onChange={handleChange} />
                        </div>
                        <div className="form-group d-flex justify-content-end"></div>
                    </form>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-end">
                    <Button variant="secondary" className="mr-2">Cancel</Button>
                    <Button variant="primary" type="submit">Submit</Button>
                </Card.Footer>
            </Card>
        </div>
    );
}

export default ProjectForm;
