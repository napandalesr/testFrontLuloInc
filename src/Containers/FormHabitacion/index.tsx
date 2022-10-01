import React from 'react';
import { Button, Form, Input, Select, Divider, Typography } from 'antd';

const { Option } = Select;
const { Title } = Typography;

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 }
};

const FormReserva: React.FC = () => {
  const [form] = Form.useForm();

  const tailLayout = {
    wrapperCol: { offset: 11, span: 13 }
  };

  const onFinish = (values: any): void => {
    console.log(values);
    onReset();
  };

  const onReset = (): void => {
    form.resetFields();
  };

  return <>
     <Divider><Title level={3}>Reservado</Title></Divider>
    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
      <Form.Item name="capacidad" label="Capacidad" rules={[{ required: true }]}>
        <Input type='number' />
      </Form.Item>
      <Form.Item name="precio" label="Precio" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="estado" label="Estado" rules={[{ required: true }]}>
        <Select
          allowClear
        >
          <Option value="disponible">Disponible</Option>
          <Option value="reservado">Reservado</Option>
        </Select>
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Guardar
        </Button>
      </Form.Item>
    </Form>
  </>;
};

export default FormReserva;
