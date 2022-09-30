import { AxiosStatic } from 'axios';
import { httpClient } from '../..';
import { BookingDto } from './dto';

const postReserva = async (data: BookingDto): Promise<AxiosStatic> => {
  return await httpClient().post("http://localhost:3000/room", data);
};

export {
  postReserva
};
