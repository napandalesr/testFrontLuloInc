import { AxiosStatic } from 'axios';
import { httpClient } from '../..';
import { RoomDto } from './dto';

const postHabitacion = async (data: RoomDto): Promise<AxiosStatic> => {
  return await httpClient().post("http://localhost:3000/booking", data);
};

export {
  postHabitacion
};
