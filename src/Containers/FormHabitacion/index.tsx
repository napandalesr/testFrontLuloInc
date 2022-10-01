import React from 'react';
import { Button, Form, Input, Select, Divider, Typography, notification, Spin } from 'antd';
import { postHabitacion } from '../../Api/Modules/Habitacion';

const { Option } = Select;
const { Title } = Typography;

interface IForm {
  capacidad: string
  precio: string
  estado: string
}

const FormReserva: React.FC = () => {
  const [form] = Form.useForm();
  const [precio, setPrecio] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const formatPrecio = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPrecio("$ " + new Intl.NumberFormat('de-DE').format(parseInt(e.target.value)));
  };

  const tailLayout = {
    wrapperCol: { offset: 11, span: 13 }
  };

  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 }
  };

  const onFinish = async (values: IForm): Promise<void> => {
    try {
      setLoading(true);
      const response = await postHabitacion({
        capacidad: parseInt(values.capacidad),
        estado: values.estado,
        precio: values.precio
      });
      if ([200, 201, 202, 203, 204].includes(response.status)) {
        notification.success({
          message: 'Habitación creada exitosamente',
          duration: 400
        });
      }
      setLoading(false);
    } catch (error) {
      console.log("Error", error);
      notification.error({
        message: 'Error intente nuevamente',
        duration: 400
      });
      setLoading(false);
    }
    onReset();
  };

  const onReset = (): void => {
    form.resetFields();
    setPrecio("");
  };

  return <>
     <Divider><Title level={3}>Reservado</Title></Divider>
     <Spin spinning={loading}>
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
        <Form.Item name="capacidad" label="Capacidad" rules={[{ required: true }]}>
          <Input type='number' />
        </Form.Item>
        <Form.Item name="precio" label="Precio" rules={[{ required: true }]}>
          <Input onChange={formatPrecio}/>
        </Form.Item>
        { precio }
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
     </Spin>
  </>;
};

export default FormReserva;
