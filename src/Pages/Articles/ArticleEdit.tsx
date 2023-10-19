import { useLoaderData } from 'react-router';
import type { LoaderFunctionArgs } from 'react-router-dom';
import { Form, Button, Space } from 'antd';

import type { IArticle } from './types';

import { CommonForm } from './CommonForm';
import { request } from '../../utils/http';
import { StyledForm } from './styles';

export const articleIdLoader = async ({ params }: LoaderFunctionArgs) => {
  const response = await request<IArticle>('get', `http://localhost:3001/articles/${params.id}`);
  return response;
};

type ArticleLoaderType = Awaited<ReturnType<typeof articleIdLoader>>;

const editArticle = async (article: IArticle, data: object) => {
  await request<IArticle>('put', `http://localhost:3001/articles/${article.id}`, data);
};

const deleteArticle = async (article: IArticle) => {
  await request('delete', `http://localhost:3001/articles/${article.id}`);
};

export const ArticleEditPage = (): JSX.Element => {
  const article = useLoaderData() as ArticleLoaderType;
  const [form] = Form.useForm();

  const handleSubmit = (data: object) => {
    editArticle(article, data);
  };
  const handleClick = () => {
    deleteArticle(article);
  };

  return (
    <>
      <h2>Edit Article</h2>
      <StyledForm
        form={form}
        name='edit-article'
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        onFinish={handleSubmit}
        initialValues={article}
      >
        <CommonForm />
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Space>
            <Button type='primary' htmlType='submit'>
              Save
            </Button>
            <Button type='primary' danger onClick={handleClick}>
              Delete
            </Button>
          </Space>
        </Form.Item>
      </StyledForm>
    </>
  );
};
