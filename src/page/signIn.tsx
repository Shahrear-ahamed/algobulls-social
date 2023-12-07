/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Col, Row } from "antd";
import loginImage from "../assets/login-image.jpg";
import { SubmitHandler } from "react-hook-form";
import Form from "../components/Form/Form";
import FormInput from "../components/Form/FormInput";
import { Link, useNavigate } from "react-router-dom";
import instance from "../utils/axios";
import toast from "react-hot-toast";
import { setToken } from "../utils/token";

type FormValues = {
  email: string;
  password: string;
};

const SignIn = () => {
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const result = await instance.post("/auth/sign-in", data);

      if (result.data.statusCode !== 200) {
        return toast.error("Login Failed");
      }

      navigate("/");
      setToken(result?.data?.data?.accessToken);
      toast.success("Login Successful");
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
          First login your account
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
            <div>
              <p>
                New at Algobulls Social? <Link to={"/sign-up"}>Sign In</Link>
              </p>
            </div>
            <Button type="primary" htmlType="submit">
              Sign In
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default SignIn;
