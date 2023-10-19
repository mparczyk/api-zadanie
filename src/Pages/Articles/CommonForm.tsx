import { Form, Input } from 'antd';

const { TextArea } = Input;

export const CommonForm = (): JSX.Element => {
  return (
    <>
      <Form.Item label='Article Name' name='article' rules={[{ required: true, message: 'Please input Article Name!' }]}>
        <Input />
      </Form.Item>

      <Form.Item
        label='Description'
        name='description'
        rules={[{ required: true, message: 'Please input Article Description!' }]}
      >
        <TextArea rows={4} />
      </Form.Item>
    </>
  );
};
