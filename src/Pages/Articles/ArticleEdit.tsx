import { Form, Button, Space } from 'antd';

import { useArticleQuery, useArticleEditMutation, useArticleDeleteMutation } from './queries';

import { CommonForm } from './CommonForm';
import { StyledForm } from './styles';

export const ArticleEditPage = (): JSX.Element => {
  const { data: article } = useArticleQuery();
  const [form] = Form.useForm();
  const { mutate: editArticle } = useArticleEditMutation();
  const { mutate: deleteArticle } = useArticleDeleteMutation();

  const handleDelete = () => {
    deleteArticle(article.id);
  };

  return (
    <>
      <h2>Edit Article</h2>
      <StyledForm
        form={form}
        name='edit-article'
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        onFinish={editArticle}
        initialValues={article}
      >
        <CommonForm />
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Space>
            <Button type='primary' htmlType='submit'>
              Save
            </Button>
            <Button type='primary' danger onClick={handleDelete}>
              Delete
            </Button>
          </Space>
        </Form.Item>
      </StyledForm>
    </>
  );
};
