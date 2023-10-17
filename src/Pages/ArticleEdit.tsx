import { useLoaderData } from 'react-router';
import type { LoaderFunctionArgs } from 'react-router-dom';
import { Form, Button, Space } from 'antd';

import type { IArticle } from './Types/types';
import { FormItem } from '../UI/FormItem';
import { request } from '../utils/http';

export const articleIdLoader = async ({ params }: LoaderFunctionArgs) => {
  const response = await request<IArticle>('get', `http://localhost:3001/articles/${params.id}`);
  return response;
};

type ArticleLoaderType = Awaited<ReturnType<typeof articleIdLoader>>;

const editArticle = async (data: object) => {
  const response = await request<IArticle>('put', `http://localhost:3001/articles/1`, data);
};

const deleteArticleById = async () => {
  const response = await request('delete', `http://localhost:3001/articles/1`);
  console.log('success', response);
};

export const ArticleEditPage = (): JSX.Element => {
  const article = useLoaderData() as ArticleLoaderType;
  const [form] = Form.useForm();
  console.log(article);
  return (
    <>
      <h2>Edit Article</h2>
      <Form
        form={form}
        name='basic'
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        onFinish={editArticle}
        initialValues={article}
      >
        <FormItem />
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Space>
            <Button type='primary' htmlType='submit'>
              Save
            </Button>
            <Button type='primary' danger onClick={deleteArticleById}>
              Delete
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </>
  );
};
