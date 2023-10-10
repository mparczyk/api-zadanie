import { Button, Form, Input, Space } from 'antd';

const { TextArea } = Input;

interface ArticleProps {
  article: string;
  description: string;
};

const onArticleSubmit = async (data: object) => {
    const response = await fetch('http://localhost:3001/articles', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    });
    const result = await response.json();
    console.log(result);
}

export const ArcitlesForm = (): JSX.Element => {
  const [form] = Form.useForm();

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Form
      form={form}
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onArticleSubmit}
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
        label="Description"
        name="description"
        rules={[{ required: true, message: 'Please input Article Description!' }]}
      >
        <TextArea  rows={4} />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Space direction="vertical">
          <Space>
            <Button type="primary"  htmlType="submit">
              Submit
            </Button>
            <Button danger htmlType="button" onClick={onReset}>
              Reset
            </Button>
          </Space>
        </Space>
      </Form.Item>
    </Form>
  );
}