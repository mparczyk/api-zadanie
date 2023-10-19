import { Button, Form, Space } from 'antd';

import type { IArticle } from './types';

import { request } from '../../utils/http';

import { CommonForm } from './CommonForm';
import { StyledForm } from './styles';

const onArticleSubmit = async (data: object) => {
  await request<IArticle>('post', 'http://localhost:3001/articles', data);
};

export const ArcitlesForm = (): JSX.Element => {
  const [form] = Form.useForm();

  const onReset = () => {
    form.resetFields();
  };

  return (
    <>
      <h2>Create New Article</h2>
      <StyledForm form={form} name='new-article' labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} onFinish={onArticleSubmit}>
        <CommonForm />
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Space>
            <Button type='primary' htmlType='submit'>
              Submit
            </Button>
            <Button danger htmlType='button' onClick={onReset}>
              Clear
            </Button>
          </Space>
        </Form.Item>
      </StyledForm>
    </>
  );
};
