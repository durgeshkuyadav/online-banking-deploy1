import React,{useState} from 'react';
import {Form,Button,Card,Container,Row,Col} from 'react-bootstrap';
import {useAuth} from '../context/AuthContext';
import {useNavigate} from 'react-router-dom';

const Login=()=>{
  const[form,setForm]=useState({email:'',password:'',role:'CUSTOMER'});
  const{login}=useAuth();
  const nav=useNavigate();

  const submit=async(e)=>{
    e.preventDefault();
    const r=await login(form);
    if(r.success)nav(`/${form.role.toLowerCase()}`);
  };

  return(
    <Container className="mt-5"><Row className="justify-content-center"><Col md={6}>
      <Card><Card.Header className="bg-primary text-white"><h4 className="mb-0">Online Banking Login</h4></Card.Header>
        <Card.Body><Form onSubmit={submit}>
          <Form.Group className="mb-3"><Form.Label>Email</Form.Label><Form.Control type="email" required value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/></Form.Group>
          <Form.Group className="mb-3"><Form.Label>Password</Form.Label><Form.Control type="password" required value={form.password} onChange={e=>setForm({...form,password:e.target.value})}/></Form.Group>
          <Form.Group className="mb-3"><Form.Label>Login as</Form.Label><Form.Select value={form.role} onChange={e=>setForm({...form,role:e.target.value})}><option value="CUSTOMER">Customer</option><option value="BANK_MANAGER">Bank Manager</option><option value="ADMIN">Admin</option></Form.Select></Form.Group>
          <Button type="submit" className="w-100">Login</Button>
        </Form></Card.Body></Card>
    </Col></Row></Container>
  );
};
export default Login;
