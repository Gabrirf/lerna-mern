import React, { Component } from "react";
import { Form, Input, Button } from 'antd';
 
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 12 },
};

async function getFromBackend(data) {
  const port = window.location.port ? `:${parseInt(window.location.port)+1}` : '';
  const host = `${window.location.protocol}//${window.location.hostname}${port}`;
  const path = `/api/v1/users`;
  const params = Object.keys(data).map(p => `${p}=${data[p]}`).join('&');
  const query = params ? `?${params}` : '';
  const url = `${host}${path}${query}`
  const options = {
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }
  };
  const response = await fetch(url, options);
  const json = await response.json();
  return json;
}
class Search extends Component {


  render() {
    const onFinish = values => {
      console.log(values);
      getFromBackend(values);
    };
    return (
      <>
        <Form {...layout} onFinish={onFinish} >
          <Form.Item name='userName' label='Username' rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
            <Button type='primary' htmlType='submit'>
              Submit
            </Button>
          </Form.Item>
        </Form>
        {/* <UserCard /> */}
      </>
    );
  }
}
 
export default Search;