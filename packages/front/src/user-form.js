import { Form, Input, Button, Select, DatePicker } from 'antd';

const { Option } = Select;

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 12 },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const config = {
  rules: [{ type: 'object', required: true, message: 'Please select time!' }],
};

async function postToBackend(data) {
  const port = window.location.port ? `:${parseInt(window.location.port)+1}` : '';
  const url = `${window.location.protocol}//${window.location.hostname}${port}/api/v1/users`;
  const options = {
    method: 'POST',
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(data),
  };
  const response = await fetch(url, options);
  const json = await response.json();
  return json;
}

const UserForm = () => {
  const onFinish = values => {
    postToBackend(values);
  };

  return (
    <Form {...layout} onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item name='userName' label='Username' rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name='realName' label='Full name'>
        <Input />
      </Form.Item>
      <Form.Item name='password' label='Password' rules={[{ required: true, message: 'Please input your password!' }]}>
        <Input.Password />
      </Form.Item>
      <Form.Item name="role" label="Role" rules={[{ required: true }]}>
        <Select placeholder="Selecciona el rol" allowClear>
          <Option value="user">user</Option>
          <Option value="admin">admin</Option>
        </Select>
      </Form.Item>
      <Form.Item name="date-picker" label="DatePicker" {...config}>
        <DatePicker />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
 
export default UserForm;