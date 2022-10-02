import { config, httpClient } from '../..';
import { IResponse } from '../../../interface/IResponse';
import { RoomDto } from './dto';

const postHabitacion = async (data: RoomDto): Promise<IResponse> => {
  return await httpClient().post("https://test-lulo-inc.herokuapp.com/room", data, config);
};

const getHabitacion = async (): Promise<IResponse> => {
  return await httpClient().get("https://test-lulo-inc.herokuapp.com/room", config);
};

export {
  postHabitacion,
  getHabitacion
};
