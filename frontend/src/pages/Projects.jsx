import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Table from 'react-bootstrap/Table';
import api from '../../tokenconfig';

function Projects() {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // Fetch Projects 
        const fetchProjects = async () => {
            try {
                const res = await api.post(
                    "http://localhost:8000/api/projects", {
                    headers : {Accept : 'application/json'},
                });
                console.log(res.data.projects);
                setProjects(res.data.projects);
                
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
            
        }
        fetchProjects();
    }, []);

    return (
        <>
            <Navbar toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Project Name</th>
                        <th>Project Description</th>
                        <th>Project Status</th>
                        <th>Project Start Date</th>
                        <th>Project End Date</th>
                        <th>Manager Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    { projects.length > 0 ? (
                        projects.map((project) => (
                            <tr key={project.id}>
                                <td>{project.id}</td>
                                <td>{project.project_name}</td>
                                <td>{project.description}</td>
                                <td>{project.status}</td>
                                <td>{project.start_date}</td>
                                <td>{project.end_date}</td>
                                <td>{project.manager.name}</td>
                                <td>
                                    <a href="/projects/edit">Edit</a><br/>
                                    <a href="/projects/delete">Delete</a>
                                </td>     
                            </tr>
                        ))
                    //     <td>
                    //         <a href="/projects/edit">Edit</a><br/>
                    //         <a href="/projects/delete">Delete</a>
                    //     </td>
                    // </tr>
                    )
                    : (
                        <tr>
                            <td colSpan="4" className="text-center">No Projects Found</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </>

    )
}

export default Projects
