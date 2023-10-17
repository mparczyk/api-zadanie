import { Button, Form, Space } from 'antd';

import type { IArticle } from './Types/types';
import { FormItem } from '../UI/FormItem';
import { request } from '../utils/http';

const onArticleSubmit = async (data: object) => {
  const response = await request<IArticle>('post', 'http://localhost:3001/articles', data);
  console.log(response);
};

export const ArcitlesForm = (): JSX.Element => {
  const [form] = Form.useForm();

  const onReset = () => {
    form.resetFields();
  };

  return (
    <>
      <h2>Create New Article</h2>
      <Form
        form={form}
        name='basic'
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        onFinish={onArticleSubmit}
      >
        <FormItem />

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Space direction='vertical'>
            <Space>
              <Button type='primary' htmlType='submit'>
                Submit
              </Button>
              <Button danger htmlType='button' onClick={onReset}>
                Clear
              </Button>
            </Space>
          </Space>
        </Form.Item>
      </Form>
    </>
  );
};
