import React from "react";
import { Button, Form } from "react-bootstrap";

function SignUp({ onSubmit, values, onChange, isSignUpRequired }) {
  return (
    <>
      <Form onSubmit={onSubmit}>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label className='text-center'>Full Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Full Name'
            name='name'
            value={values?.name}
            onChange={onChange}
          />
        </Form.Group>
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

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Confirm Password'
            name='confirm_password'
            value={values?.confirm_password}
            onChange={onChange}
          />
        </Form.Group>

        <Form.Group className='d-grid'>
          <span className={` mt-3 mb-3 ${!isSignUpRequired && "text-danger"} `}>
            {isSignUpRequired
              ? "Note: Please Create an Account"
              : "Note: Account Already Exist, Signin instead"}
          </span>

          <Button variant='info' type='submit'>
            SignUp
          </Button>
        </Form.Group>
      </Form>
    </>
  );
}

export default SignUp;
