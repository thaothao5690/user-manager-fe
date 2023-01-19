import { Button, Form, Input, Checkbox, Row, Col } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import "./Login.css";

function Login() {
  const initValue = {
    email: "",
    password: "",
  };

  const generateToken = (email) => {
    const HMACSHA256 = (stringToSign, secret) => "not_implemented";

    // The header typically consists of two parts:
    // the type of the token, which is JWT, and the signing algorithm being used,
    // such as HMAC SHA256 or RSA.
    const header = {
      alg: "HS256",
      typ: "JWT",
      kid: "vpaas-magic-cookie-1fc542a3e4414a44b2611668195e2bfe/4f4910",
    };
    const encodedHeaders = btoa(JSON.stringify(header));

    // The second part of the token is the payload, which contains the claims.
    // Claims are statements about an entity (typically, the user) and
    // additional data. There are three types of claims:
    // registered, public, and private claims.
    const claims = {
      email: email,
    };
    const encodedPlayload = btoa(JSON.stringify(claims));

    // create the signature part you have to take the encoded header,
    // the encoded payload, a secret, the algorithm specified in the header,
    // and sign that.
    const signature = HMACSHA256(
      `${encodedHeaders}.${encodedPlayload}`,
      "mysecret"
    );
    const encodedSignature = btoa(signature);

    const jwt = `${encodedHeaders}.${encodedPlayload}.${encodedSignature}`;
    localStorage.setItem("jwt", jwt);
  };

  const [data, setData] = useState(initValue);

  useEffect(() => {}, []);

  const onFinish = (values) => {
    console.log("Success:", values);
    setData(values);
    generateToken(values.email);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="App-login">
      <Row justify="center">
        <Col span={8}>
          <h2>Login</h2>
          <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                type="email"
                placeholder="Enter email..."
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password",
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Enter password..."
              />
            </Form.Item>
            <Form.Item>
              <Form.Item
                valuePropName="checked"
                className="login-form-remember"
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="#">
                Forgot password?
              </a>
            </Form.Item>

            <Form.Item>
              <Button htmlType="submit" className="login-form-button">
                Log in
              </Button>
              Or <a href="#">register now!</a>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
