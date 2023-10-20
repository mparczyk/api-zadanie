import { Button, Form, Space } from 'antd';
import { useMutation } from '@tanstack/react-query';

import type { IArticle } from './types';

import { request } from '../../utils/http';

import { CommonForm } from './CommonForm';
import { StyledForm } from './styles';

export const ArcitlesForm = (): JSX.Element => {
  const [form] = Form.useForm();
  const mutation = useMutation({
    mutationFn: (data: object) => request<IArticle>('post', 'http://localhost:3001/articles', data),
  });

  const onReset = () => {
    form.resetFields();
  };

  return (
    <>
      <h2>Create New Article</h2>
      <StyledForm form={form} name='new-article' labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} onFinish={mutation.mutate}>
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
