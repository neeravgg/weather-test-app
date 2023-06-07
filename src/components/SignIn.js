import React from "react";
import {  Button,  Form } from "react-bootstrap";

function SignIn({ onSubmit, values, onChange, isSignUpRequired }) {
  return (
    <>
      <Form onSubmit={onSubmit}>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label className='text-center'>Email address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            name='email'
            value={values?.email}
            onChange={onChange}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Password'
            name='password'
            value={values?.password}
            onChange={onChange}
          />
        </Form.Group>
        
        <Form.Group className='d-grid'>
          <span className={` mt-3 mb-3 ${isSignUpRequired && "text-danger"} `}>
            {isSignUpRequired
              ? "Note: Account Creation is Needed"
              : "Note: Please Login or Signup"}
          </span>

          <Button variant='primary' type='submit'>
            Login
          </Button>
        </Form.Group>
      </Form>
    </>
  );
}

export default SignIn;
