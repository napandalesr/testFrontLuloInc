import React from 'react';
import { Button, Form, Input, notification, Spin, DatePicker } from 'antd';
import moment from 'moment';
import { postReserva } from '../../Api/Modules/Reserva';

const { RangePicker } = DatePicker;

interface IForm {
  codigo: string
  nombre: string
  date: string[]
}

interface IFormReserva {
  codigo: string
}

const FormReserva: React.FC<IFormReserva> = ({ codigo }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    form.setFieldsValue({ codigo });
  }, []);
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
      const response = await postReserva({
        codigo: [parseInt(values.codigo)],
        nombre: values.nombre,
        fechaIngreso: moment(values.date[0]).format("YYYY-MM-DD"),
        fechaSalida: moment(values.date[1]).format("YYYY-MM-DD")
      });
      if ([200, 201, 202, 203, 204].includes(response.status)) {
        notification.success({
          message: 'Reserva creada exitosamente',
          duration: 400
        });
        location.reload();
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
  };

  return <>
     <Spin spinning={loading}>
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
        <Form.Item name="codigo" label="Codigo" rules={[{ required: true }]}>
          <Input type='number' disabled/>
        </Form.Item>
        <Form.Item name="nombre" label="Nombre" rules={[{ required: true }]}>
          <Input/>
        </Form.Item>
        <Form.Item
          label="Fechas"
          name="date">
          <RangePicker />
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
