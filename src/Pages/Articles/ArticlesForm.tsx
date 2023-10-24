import { Button, Form, Space } from 'antd';

import { useNewArticleMutation } from './queries';

import { CommonForm } from './CommonForm';
import { StyledForm } from './styles';

export const ArcitlesForm = (): JSX.Element => {
  const [form] = Form.useForm();
  const { mutate: createNewArticle } = useNewArticleMutation();

  const onReset = () => {
    form.resetFields();
  };

  return (
    <>
      <h2>Create New Article</h2>
      <StyledForm form={form} name='new-article' labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} onFinish={createNewArticle}>
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
