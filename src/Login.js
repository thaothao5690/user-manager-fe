import { Button, Form, Input, Checkbox, Row, Col } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import "./Login.css"

function Login() {
    const initValue = {
        email: '',
        password: '',
    }

    const [data, setData] = useState(initValue)

    useEffect(() => {

    }, [])

    const onFinish = (values) => {
        console.log('Success:', values);
        setData(values)
        localStorage.setItem('email', values.email)
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="App-login">
            <Row justify="center">
                <Col span={8}>
                    <h2>Login</h2>
                    <Form
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Username!',
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
                                    message: "Please input your password"
                                }
                            ]}
                        >
                            <Input.Password
                                prefix={<LockOutlined
                                    className="site-form-item-icon" />}
                                placeholder="Enter password..."
                            />
                        </Form.Item>
                        <Form.Item>
                            <Form.Item valuePropName="checked" className="login-form-remember">
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
        </div >
    )
}

export default Login