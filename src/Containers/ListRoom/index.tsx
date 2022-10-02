import React from 'react';
import { Table, Button, Modal, notification } from "antd";
import { getHabitacion } from '../../Api/Modules/Habitacion';
import { findReserva } from '../../Api/Modules/Reserva';
import FormReserva from '../FormReserva';

interface IList {
  id: number
  capacidad: number
  precio: string
  estado: string
}

interface IModal {
  id: number
  nombre: string
  fechaIngreso: string
  fechaSalida: string
}

const ListRoom: React.FC = () => {
  const [dataSource, setDataSource] = React.useState<IList[]>();
  const [loading, setLoading] = React.useState(true);
  const [show, setShow] = React.useState(false);
  const [showReserva, setShowReserva] = React.useState(false);
  const [codigo, setCodigo] = React.useState(0);
  const [infoHabitacion, setInfoHabitacion] = React.useState<IModal>({
    id: 0,
    nombre: "",
    fechaIngreso: "",
    fechaSalida: ""
  });

  const columns: any = [
    {
      title: 'Capacidad',
      dataIndex: 'capacidad'
    },
    {
      title: 'Precio',
      dataIndex: 'precio'
    },
    {
      title: 'Estado',
      dataIndex: 'estado'
    },
    {
      title: 'Acciones',
      key: 'action',
      with: 10,
      render: (_: any, record: IList) => (
        <>
          <Button onClick={() => reservar(record.id, record.estado)}>Reservar</Button>
          <Button onClick={async () => await findCode(record.id)}>Ver detalles</Button>
        </>
      )
    }
  ];

  React.useEffect(() => {
    getList();
  }, []);

  const reservar = (id: number, estado: string): void => {
    if (estado === "Reservado") {
      notification.error({
        message: "La habitación se encuentra reservada",
        duration: 400
      });
    } else {
      setShowReserva(true);
      setCodigo(id);
      getList();
    }
  };

  const getList = async (): Promise<void> => {
    try {
      const response = await getHabitacion();
      setDataSource(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const findCode = async (id: number): Promise<void> => {
    try {
      const response = await findReserva(id);
      if (response.data.codigo.length > 0) {
        setShow(true);
        setInfoHabitacion({
          id,
          nombre: response.data.codigo[0].nombre,
          fechaIngreso: response.data.codigo[0].fechaIngreso,
          fechaSalida: response.data.codigo[0].fechaSalida
        });
      } else {
        notification.error({
          message: "La habitación no se ha reservado antes",
          duration: 400
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const closeModal = (): void => {
    setShow(false);
  };

  const closeModalReserva = (): void => {
    setShowReserva(false);
  };

  return <>
    <Table dataSource={dataSource} columns={columns} scroll={{ x: 'calc(700px + 50%)' }} size="middle" bordered loading={loading}/>
    <Modal
    title="Información de reserva"
    open={show}
    closable={false}
    footer={[
      <Button key="back" onClick={closeModal}>
        Cerrar
      </Button>
    ]}
  >
    <ul>
      <li>Codigo: {infoHabitacion.id}</li>
      <li>Nombre: {infoHabitacion.nombre}</li>
      <li>Fecha de ingreso: {infoHabitacion.fechaIngreso}</li>
      <li>Fecha de salida: {infoHabitacion.fechaSalida}</li>
    </ul>
  </Modal>
  <Modal
    title="Registrar reserva"
    open={showReserva}
    closable={false}
    footer={[
      <Button key="back" onClick={closeModalReserva}>
        Cerrar
      </Button>
    ]}
  >
    <FormReserva codigo={codigo.toString()}/>
  </Modal>
  </>;
};

export default ListRoom;
