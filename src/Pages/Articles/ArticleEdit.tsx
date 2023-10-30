import { Form, Button, Space } from "antd";

import { useArticleQuery, useArticleEditMutation } from "./queries";

import { CommonForm } from "./CommonForm";
import { StyledForm, Title } from "./styles";

export const ArticleEditPage = (): JSX.Element => {
  const { data: article } = useArticleQuery();
  const [form] = Form.useForm();
  const { mutate: editArticle } = useArticleEditMutation();

  return (
    <>
      <Title>Edit Article</Title>
      <StyledForm
        form={form}
        name="edit-article"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        onFinish={editArticle}
        initialValues={article}
      >
        <CommonForm />
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Space>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Space>
        </Form.Item>
      </StyledForm>
    </>
  );
};
