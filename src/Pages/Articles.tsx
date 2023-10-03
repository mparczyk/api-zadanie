import React from 'react';
import { Button, Form, Input } from 'antd';

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};
interface ArticleProps {
    article: string;
    description: string;
    id: number;
};

const onArticleSubmit = async () => {
    const response = await fetch('http://localhost:3001/article', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    });
    const result = await response.json();
    console.log(result);
}

export const Arcitles: React.FC = () => (
  <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item<ArticleProps>
      label="Article Name"
      name="article"
      rules={[{ required: true, message: 'Please input Article Name!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item<ArticleProps>
      label="Content"
      name="description"
      rules={[{ required: true, message: 'Please input Article Description!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit" onClick={onArticleSubmit}>
        Submit
      </Button>
    </Form.Item>
  </Form>
);
