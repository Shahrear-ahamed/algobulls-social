import { Button, Col, Row } from "antd";
import loginImage from "../assets/login-image.jpg";
import { SubmitHandler } from "react-hook-form";
import Form from "../components/Form/Form";
import FormInput from "../components/Form/FormInput";
import { Link } from "react-router-dom";

type FormValues = {
  id: string;
  password: string;
  confirmPassword: string;
};

const SignUp = () => {
  const onSubmit: SubmitHandler<FormValues> = (payload) => {
    try {
      console.log(payload);
      if (payload.password !== payload["confirmPassword"])
        throw new Error("Password and Confirm Password is not same");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Row
      justify="center"
      align="middle"
      style={{
        minHeight: "100vh",
      }}>
      <Col sm={12} md={16} lg={10}>
        <img src={loginImage} width={500} alt="login image" />
      </Col>
      <Col sm={12} md={8} lg={8}>
        <h1
          style={{
            margin: "15px 0px",
          }}>
          Create Your Account
        </h1>
        <div>
          <Form submitHandler={onSubmit}>
            <div>
              <FormInput name="id" type="text" size="large" label="Email" />
            </div>
            <div
              style={{
                margin: "15px 0px",
              }}>
              <FormInput
                name="password"
                type="password"
                size="large"
                label="Password"
              />
            </div>
            <div
              style={{
                margin: "15px 0px",
              }}>
              <FormInput
                name="confirmPassword"
                type="password"
                size="large"
                label="Confirm Password"
              />
            </div>
            <div>
              <p>
                Already have account? <Link to={"/sign-in"}>Sign in</Link>
              </p>
            </div>
            <Button type="primary" htmlType="submit">
              Sign Up
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default SignUp;
