import React from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios';
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Login() {
  
  const [form, setForm] = React.useState(
    {
        email: '',
        password: '',
    }
  );

  const handleChange = (e) => { 
    setForm({
      ...form, [e.target.name]: e.target.value
    });
  }
  
  const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(form);
      try {
        const res = await axios.post(
            "http://127.0.0.1:8000/api/login", form, {
                headers : {Accept : 'application/json'},
        });
        localStorage.setItem("token", res.data.access_token);
        toast.success("Login Successful");
        window.location.href = '/';
      } catch (error) {
        console.log(error);
        if (error.response && error.response.data && error.response.data.message) {
            Object.values(error.response.data.message).forEach(msg => {     
                toast.error(msg);
                console.log(msg);
            });
        }
      }
  }
  
  return (
    <Form onSubmit={handleSubmit} style={{width: '100%', margin: 'auto', marginTop: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px'}}>
        <Form.Label>Login Page</Form.Label>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange} />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange} />
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
        <ToastContainer/>
    </Form>
  )
}

export default Login
