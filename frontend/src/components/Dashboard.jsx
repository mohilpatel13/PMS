import React, { use } from 'react'
import { Card, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import axios from 'axios';
import api from '../../tokenconfig';

function Dashboard() {
    const [projects, setProjects] = React.useState([]);
    const [teams, setTeams] = React.useState([]);
    const [tasks, setTasks] = React.useState([]);
    
    useEffect(() => {
        // Fetch projects
        console.log(localStorage.getItem('token'))
        const fetchProjects = async () => {
            try {
                const res = await api.post(
                "http://localhost:8000/api/projects", {
                headers : {Accept : 'application/json'},
            });

                // const data = await res.json();
                console.log(res.data.projects);
            setProjects(res.data.total_projects);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };
        fetchProjects();
    }, []); 

    return (
        <div>
            <Card style={{ width: '18rem', margin: '25px', display: 'inline-block' }}>
                <Card.Body>
                    <Card.Title>Total Projects</Card.Title>
                    <Card.Text>
                    You can see and manage all your projects here.
                    </Card.Text>
                    <h1>{ projects }</h1>
                    <a href="/projects"><Button variant="primary">Manage Projects</Button></a>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem', margin: '25px', display: 'inline-block' }}>
                <Card.Body>
                    <Card.Title>Total Teams</Card.Title>
                    <Card.Text>
                    You can see and manage all your teams here.
                    </Card.Text>
                    <h1>{0}</h1>
                    <a href="/teams"><Button variant="primary">Manage teams</Button></a>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem', margin: '25px', display: 'inline-block' }}>
                <Card.Body>
                    <Card.Title>Total Tasks</Card.Title>
                    <Card.Text>
                    You can see and manage all your tasks here.
                    </Card.Text>
                    <h1>{0}</h1>
                    <a href="/tasks"><Button variant="primary">Manage tasks</Button></a>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Dashboard
