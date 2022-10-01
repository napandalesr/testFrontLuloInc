import { config, httpClient } from '../..';
import { IResponse } from '../../../interface/IResponse';
import { RoomDto } from './dto';

const postHabitacion = async (data: RoomDto): Promise<IResponse> => {
  return await httpClient().post("http://localhost:3000/room", data, config);
};

const getHabitacion = async (): Promise<IResponse> => {
  return await httpClient().get("http://localhost:3000/room", config);
};

export {
  postHabitacion,
  getHabitacion
};
