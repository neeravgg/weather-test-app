import React, { useState } from "react";
import { Col, Row, Container, Card } from "react-bootstrap";
import toast from "react-hot-toast";
import axios from "axios";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [values, setValues] = useState({});
  const [isSignUpRequired, setIsSignUpRequired] = useState(false);
  const [switchSign, setSwitchSign] = useState(false);
  const history = useHistory();

  const onChange = (event) => {
    event.preventDefault();
    if (event.persist) event.persist();
    setValues((values) => ({
      ...values,
      [event?.target?.name]: event?.target?.value,
    }));
  };

  const onSignIn = async (event) => {
    event.preventDefault();
    if (!values.password || !values.email) {
      toast.error("Please enter all details correctly!");
      return;
    }
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/login`,
        {
          ...values,
        }
      );
      if (response?.data?.token) {
        sessionStorage.setItem("token", response?.data?.token);
        history.push("/home");
      } else {
        setIsSignUpRequired(true);
        toast.error("You don't have an Account!");
      }
    } catch (err) {
      setIsSignUpRequired(true);
      toast.error("You don't have an Account!");
      console.log(err?.message);
    }
  };

  const onSignUp = async (event) => {
    event.preventDefault();
    if (
      !values.name ||
      !values.email ||
      !values.password ||
      !values.confirm_password
    ) {
      toast.error("Please enter all details correctly!");
      return;
    }
    if (values.password !== values.confirm_password) {
      toast.error("Confirm Password should be same");
      return;
    }
    if (values.password.length < 8 || values.confirm_password < 8) {
      toast.error("Password Length should be minimum 8 characters");
      return;
    }
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/register`,
        {
          ...values,
        }
      );
      if (response?.data?.token) {
        sessionStorage.setItem("token", response?.data?.token);
        history.push("/home");
      } else {
        setIsSignUpRequired(false);
        toast.error("You Already have an Account!");
      }
    } catch (err) {
      // setIsSignUpRequired(false);
      toast.error(err?.message);
      console.log(err?.message);
    }
  };

  return (
    <div className='App'>
      <Container>
        <Row className='vh-100 d-flex justify-content-center align-items-center'>
          <Col md={8} lg={6} xs={12}>
            <div className='border border-3 border-primary'></div>
            <Card className='shadow'>
              <Card.Body>
                <div className='mb-3 mt-md-4'>
                  <h2 className='fw-bold mb-2 text-uppercase '>WEATHER</h2>
                  <div className='mb-3'>
                    {switchSign ? (
                      <SignUp
                        onSubmit={onSignUp}
                        values={values}
                        onChange={onChange}
                        isSignUpRequired={isSignUpRequired}
                      />
                    ) : (
                      <SignIn
                        onSubmit={onSignIn}
                        values={values}
                        onChange={onChange}
                        isSignUpRequired={isSignUpRequired}
                      />
                    )}

                    <div className='mt-3'>
                      <span className='mb-0  text-center'>
                        {switchSign
                          ? `Already have an account?${" "}`
                          : `Don't have an account?${" "}`}
                        <span
                          className='text-primary fw-bold'
                          role="button"
                          onClick={() => {
                            setSwitchSign(!switchSign);
                            // setIsSignUpRequired(!isSignUpRequired);
                          }}
                        >
                          {switchSign ? `Login` : `Sign Up`}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
