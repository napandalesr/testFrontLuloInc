import { IResponse } from './../../../interface/IResponse';
import { httpClient } from '../..';
import { BookingDto } from './dto';

const postReserva = async (data: BookingDto): Promise<IResponse> => {
  return await httpClient().post("https://test-lulo-inc.herokuapp.com/booking", data);
};

const findReserva = async (id: number): Promise<IResponse> => {
  return await httpClient().post("https://test-lulo-inc.herokuapp.com/room/id", { codigo: id });
};

export {
  postReserva,
  findReserva
};
