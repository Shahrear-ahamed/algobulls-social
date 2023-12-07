import { Button, Col, Row } from "antd";
import loginImage from "../assets/login-image.jpg";
import { SubmitHandler } from "react-hook-form";
import Form from "../components/Form/Form";
import FormInput from "../components/Form/FormInput";
import { Link, useNavigate } from "react-router-dom";
import instance from "../utils/axios";
import toast from "react-hot-toast/headless";
import { setToken } from "../utils/token";

type FormValues = {
  email: string;
  password: string;
  confirmPassword: string;
};

const SignUp = () => {
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormValues> = async (payload) => {
    try {
      const result = await instance.post("/auth/sign-up", payload);

      if (result.data.statusCode !== 201) {
        return toast.error(result.data.data.message);
      }

      navigate("/sign-in");
      setToken(result.data.data.token);
      toast.success("Login Successful");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      toast.error(err?.response?.data?.message);
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
              <FormInput name="email" type="text" size="large" label="Email" />
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
