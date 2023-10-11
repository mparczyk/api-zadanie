import { Form, Button, Input, Space } from 'antd';
import { useLoaderData } from 'react-router';
import type { LoaderFunctionArgs } from 'react-router-dom';

import { IArticle } from '../utils/types';

const { TextArea } = Input;

export const articleIdLoader = async ({ params }: LoaderFunctionArgs) => {
  const response = await fetch(`http://localhost:3001/articles/${params.id}`);

  if (!response.ok) {
      throw new Response("Some Error", {status: response.status})
  }
  return response.json();
};

type ArticleLoaderType = Awaited<ReturnType<typeof articleIdLoader>>;

const editArticle = async (data: object) => {
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  };
  const response = await fetch(`http://localhost:3001/articles/1`, requestOptions);
  const result: IArticle = await response.json();
  console.log(result);
};

const deleteArticleById = async () => {
  const response = await fetch(`http://localhost:3001/articles/1`, { method: 'DELETE' });
  const result = await response.json();
  console.log(result);
}

export const ArticleEditPage = (): JSX.Element => {
  const article = useLoaderData() as ArticleLoaderType;
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      onFinish={editArticle}
      autoComplete="off"
    >
      <Form.Item
        label="Change Article Name"
        name="article"
        initialValue={article.data.article}
        rules={[{ required: true, message: 'Please input Article Name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Change Description"
        name="description"
        initialValue={article.data.description}
        rules={[{ required: true, message: 'Please input Article Description!' }]}
      >
        <TextArea rows={4} />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Space direction="vertical">
          <Space>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
            <Button type="primary" danger onClick={deleteArticleById}>
                Delete
            </Button>
          </Space>
        </Space>
      </Form.Item>
    </Form>
  )
}
