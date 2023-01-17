import { Button, Form, Input, Checkbox, Row, Col } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';

function Content() {
    useEffect(() => {

    }, [])

    const onFinish = (values) => {
        console.log('Success:', values);
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
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Username!',
                                },
                            ]}
                        >
                            <Input
                                prefix={<UserOutlined className="site-form-item-icon" />}
                                placeholder="Username"
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
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" className="login-form-remember">
                                <Checkbox value={false}>Remember me</Checkbox>
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

export default Content